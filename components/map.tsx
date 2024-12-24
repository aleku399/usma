'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'

// Fix for default marker icon in react-leaflet
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const DefaultIcon = new Icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

export default function Map() {
  return (
    <MapContainer 
      center={[0.3376, 32.5901]} 
      zoom={15} 
      scrollWheelZoom={false} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[0.3376, 32.5901]} icon={DefaultIcon}>
        <Popup>
          Kololo, Kampala
        </Popup>
      </Marker>
    </MapContainer>
  )
}

