import React , { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleApiWrapper } from 'google-maps-react'
import Marker from './Marker'

const url = "https://maps.googleapis.com/maps/api/geocode/json?address="

const api_key = process.env.REACT_APP_GOOGLE_API_KEY

const spotDetailMap = ({address}, props) => {
  const [center, setCenter] = useState({lat: 30.287247, lng: -97.718637})
  const [zoom, setZoom] = useState(14)
  
  useEffect(() => {
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
      <div style={{ height: '50vh', width: '100%' }}>
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
    );
}

export default GoogleApiWrapper({apiKey: api_key})(spotDetailMap)