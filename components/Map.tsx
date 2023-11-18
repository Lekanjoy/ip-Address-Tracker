'use client'
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import iconLocation from '@/public/icon-location.svg'

// {
//     "ip_address": "102.89.42.92",
//     "city": "Lagos",
//     "city_geoname_id": 2332459,
//     "region": "Lagos",
//     "region_iso_code": "LA",
//     "region_geoname_id": 2332453,
//     "postal_code": null,
//     "country": "Nigeria",
//     "country_code": "NG",
//     "country_geoname_id": 2328926,
//     "country_is_eu": false,
//     "continent": "Africa",
//     "continent_code": "AF",
//     "continent_geoname_id": 6255146,
//     "longitude": 3.3903,
//     "latitude": 6.4474,
//     "security": {
//         "is_vpn": false
//     },
//     "timezone": {
//         "name": "Africa/Lagos",
//         "abbreviation": "WAT",
//         "gmt_offset": 1,
//         "current_time": "20:38:48",
//         "is_dst": false
//     },
//     "flag": {
//         "emoji": "🇳🇬",
//         "unicode": "U+1F1F3 U+1F1EC",
//         "png": "https://static.abstractapi.com/country-flags/NG_flag.png",
//         "svg": "https://static.abstractapi.com/country-flags/NG_flag.svg"
//     },
//     "currency": {
//         "currency_name": "Naira",
//         "currency_code": "NGN"
//     },
//     "connection": {
//         "autonomous_system_number": 29465,
//         "autonomous_system_organization": "MTN NIGERIA Communication limited",
//         "connection_type": "Corporate",
//         "isp_name": "MTN Nigeria",
//         "organization_name": "MTN Nigeria"
//     }
// }


const Map = () => {
    const [position, setPosition] = useState<[number, number]>([0, 0]);


     // Create a custom icon
const customIcon = new L.Icon({
  iconUrl: iconLocation,
  iconSize: [32, 32], 
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32],
});



  return (
    <div className="w-full h-screen">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map