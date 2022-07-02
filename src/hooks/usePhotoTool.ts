import { useEffect, useState } from "react";

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Storage } from "@capacitor/storage";
import { Capacitor } from "@capacitor/core";
import { isPlatform } from "@ionic/react";

const PHOTO_STORAGE = "photos";

export function usePhotoTool() {

  const [photos, setPhotos] = useState<UserPhoto[]>([]);


  // -----------------------web-------------------------------

  // we use useEffect to load the photos from the web device's storage
  useEffect(() => {
    const loadSaved = async () => {
      const { value } = await Storage.get({ key: PHOTO_STORAGE })

      const photosInStorage = (value ? JSON.parse(value) : []) as UserPhoto[]

      // if running on the web:
      if (!isPlatform('hybrid')) {
        for (let photo of photosInStorage) {
          const file = await Filesystem.readFile({ path: photo.filepath, directory: Directory.Data })

          // in webplatform we need to convert the file to a base64 string
          photo.webviewPath = `data:image/jpeg;base64,${file.data}`
        }
      }
      setPhotos(photosInStorage)
    }
    loadSaved()
  }, [])

  // -----------------------web-------------------------------


  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri,
      quality: 100
    })

    const fileName = new Date().getTime() + '.jpeg';
    const savedFileImage = await savePicture(photo, fileName);
    const newPhotos = [savedFileImage, ...photos];
    setPhotos(newPhotos);

    Storage.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) })
  }

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    let base64Data: string

    // const file = await Filesystem.readFile({
    //   path: photo.path!
    // })
    // base64Data = file.data

    if (isPlatform('hybrid')) {
      const file = await Filesystem.readFile({ path: photo.path! })
      base64Data = file.data
    } else {
      base64Data = await base64FromPath(photo.webPath!)
    }

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    })

    // return {
    //   filepath: savedFile.uri,
    //   webviewPath: Capacitor.convertFileSrc(savedFile.uri)
    // }
    if (isPlatform('hybrid')) {
      // Display the new image by rewriting the 'file://' path to HTTP
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri)
      }
    } else {
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      }
    }
  }

  const deletePhoto = async (photo: UserPhoto) => {

    const newPhotos = photos.filter(p => p.filepath !== photo.filepath)

    Storage.set({ key: PHOTO_STORAGE, value: JSON.stringify(newPhotos) })

    const fileName = photo.filepath.substring(photo.filepath.lastIndexOf('/') + 1);
    await Filesystem.deleteFile({ path: fileName, directory: Directory.Data })
    setPhotos(newPhotos);
  }

  return {
    photos, takePhoto, deletePhoto
  }
}

// The base64FromPath method is a helper util that downloads a file from the supplied path
//  and returns a base64 representation of that file.
export async function base64FromPath(path: string): Promise<string> {
  const response = await fetch(path)
  const blob = await response.blob()
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result)
      } else {
        reject('Method did not return a string')
      }
    }
    reader.readAsDataURL(blob)
  })
}


export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}