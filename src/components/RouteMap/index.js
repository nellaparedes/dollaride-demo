import React, { useEffect, useRef } from "react";
import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = Constants.manifest.extra.GOOGLE_MAPS_API_KEY;

const RouteMap = ({ pickup, destination, onReady, onError, onUserLocationChange }) => {

  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE = 37.771707;
  const LONGITUDE = -122.4053769;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const mapRef = useRef(null);
  const showRoute = pickup && destination;

  const initialRegion = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  }

  useEffect(() => {
    mapRef.current?.fitToElements(true);
  },[ pickup, destination])

  return (
    <MapView
      ref={mapRef}
      initialRegion={initialRegion}
      style={StyleSheet.absoluteFill}
      showsUserLocation={true}
      followsUserLocation={false}
      onUserLocationChange={onUserLocationChange}
    >
      {pickup && (
        <Marker coordinate={pickup.coordinate} pinColor="#0490E1" />
      )}

      {destination && (
        <Marker coordinate={destination.coordinate} />
      )}

      {showRoute && (
        <MapViewDirections
          origin={pickup.coordinate}
          destination={destination.coordinate}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor="#000000"
          strokeWidth={2}
          onReady={onReady}
          onError={onError}
        />
      )}
    </MapView>
  )
}

export default RouteMap;
