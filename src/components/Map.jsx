/* eslint-disable no-console */

// https://stackoverflow.com/questions/44878472/errorinvalidvalueerror-setcenter-not-a-latlng-or-latlngliteral-in-property-l // TIPO DE DATOS DE LAT Y LNG //

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  console.log(data);
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: parseFloat(data.lat),
    lng: parseFloat(data.lng),
  };

  // DEJO EL TOKEN DEL CURSO, YA QUE NO TENGO HABILITADO UN METODO DE PAGO Y FACTURACION EN MI CUENTA DE GOOGLE CLOUD //
  return (
    <LoadScript googleMapsApiKey="AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw">
      <GoogleMap mapContainerStyle={mapStyles} zoom={17} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
