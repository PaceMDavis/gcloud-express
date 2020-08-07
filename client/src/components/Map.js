import React , { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react'
import  { GoogleApiWrapper } from 'google-maps-react'
import Marker from './Marker'

const url = "https://maps.googleapis.com/maps/api/geocode/json?address="

const api_key = process.env.REACT_APP_GOOGLE_API_KEY

const Map = ({address}, props) => {
  const [center, setCenter] = useState({lat: 30.278919, lng: -97.749481})
  const [zoom, setZoom] = useState(13)

  useEffect(() => {
    console.log(address, "reading", url+address+"&key="+api_key)
    fetch(url+address+"&key="+api_key)
    .then(res => res.json())
    .then(response => {
      if(response.results[0]) {
        console.log(response.results[0].geometry.location, "hello")
        setCenter(response.results[0].geometry.location)
      } else {

      }
    })
  },
    [address]
  );
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
        >  
            <Marker
            lat={center.lat}
            lng={center.lng}
            text="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    )
}

export default GoogleApiWrapper({ apiKey: api_key}) (Map)



// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyClsoUa47Qq8H6mQ4lMP0gWAJywIcxGH_U