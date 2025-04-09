import { MapContainer, MapContainerProps, Marker, Popup, TileLayer } from 'react-leaflet'
import Leaflet, { LatLng } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { SelectPopup } from './SelectPopup'

/**
 * 地図コンポーネント
 */
export const Map = () => {
  const position = new LatLng(35.688408, 139.692005)

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '75vh', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/*
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        */}
        <SelectPopup />
      </MapContainer>
    </>
  )
}
