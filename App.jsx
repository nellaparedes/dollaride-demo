import "react-native-gesture-handler";

import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import LocationModal from './src/components/LocationModal';
import RouteMap from './src/components/RouteMap';
import Message from './src/components/Message';

export default function App() {
  const [flashMessage, setFlashMessage] = useState('');
  const [pickup, setPickup] = useState(null);
  const [destination, setDestination] = useState(null);

  const selectDestination = (location) => {
    setDestination(location);
    setFlashMessage('Loading');
  }

  const handlePickupChange = (location) => {
    const coordinate = location?.nativeEvent?.coordinate;
    setPickup({
      coordinate: {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude
      }
    });
  }

  const handleReady = () => {
    setFlashMessage('');
  }

  const handleError = () => {
    setFlashMessage("We couldn't find a route to that destination. Please try again.");
    setDestination(null);
  }

  const handleLocationError = () => {
    setFlashMessage('There was an error trying to load locations. Plase try again.');
    setDestination(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {!!flashMessage && (
          <Message>{flashMessage}</Message>
        )}
        <View style={styles.mapContainer}>
          <RouteMap 
            pickup={pickup} 
            destination={destination} 
            onReady={handleReady} 
            onError={handleError}
            onUserLocationChange={handlePickupChange}
          />          
        </View>
      </View>
      <LocationModal
        label='Select destination'
        onSelect={selectDestination}
        onError={handleLocationError}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapContainer: {
    height: '87%'    
  }
});
