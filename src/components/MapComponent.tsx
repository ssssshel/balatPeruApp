import { GoogleMap } from '@capacitor/google-maps';
import { useIonViewDidEnter } from '@ionic/react';
import { useRef } from 'react';

const MyMap: React.FC = () => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: 'map',
      element: mapRef.current,
      apiKey: "AIzaSyCqgfoQIQg7IXBq-xAa4o0tpQbDAVuMrsA",
      config: {
        center: {
          lat: 33.6,
          lng: -117.9
        },
        zoom: 8
      }
    })
  }

  useIonViewDidEnter(() => { createMap() })

  return (
    <div className="component-wrapper">
      <capacitor-google-map ref={mapRef} style={{
        display: 'inline-block',
        width: 100 + '%',
        height: 60 + 'vh'
      }}></capacitor-google-map>

      {/* <button onClick={createMap}>Create Map</button> */}
    </div>
  )
}

export default MyMap;