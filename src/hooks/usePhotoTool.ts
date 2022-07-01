import { useState } from "react";

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'
import { Filesystem, Directory } from '@capacitor/filesystem'
import { Storage } from "@capacitor/storage";
import { Capacitor } from "@capacitor/core";

const PHOTO_STORAGE = "photos";

export function usePhotoTool() {

  const [photos, setPhotos] = useState<UserPhoto[]>([]);

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

    const file = await Filesystem.readFile({
      path: photo.path!
    })
    base64Data = file.data

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    })

    return {
      filepath: savedFile.uri,
      webviewPath: Capacitor.convertFileSrc(savedFile.uri)
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

interface UserPhoto {
  filepath: string;
  webviewPath: string;
}