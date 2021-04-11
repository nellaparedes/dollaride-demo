import React from 'react';
import Constants from 'expo-constants';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GOOGLE_PLACES_API_KEY = Constants.manifest.extra.GOOGLE_MAPS_API_KEY;

const LocationSelector = ({ onSelect, onFocus, onError, currentLocation }) => {
  
  const handlePres = (data, details) => {

    const location = {
      name: data.description,
      coordinate: {
        latitude: details?.geometry?.location?.lat,
        longitude: details?.geometry?.location?.lng
        
      }
    };
    onSelect?.(location)
  }
  
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={styles.heading}>Where do you want to go?</Text>
      <GooglePlacesAutocomplete
          placeholder="Enter a destination"
          currentLocation={currentLocation}
          onPress={handlePres}
          fetchDetails
          query={{
              key: GOOGLE_PLACES_API_KEY,
              language: 'en',
          }}
          onFail={onError}
          styles={styles}
          textInputProps={{ onFocus }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 18 
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 35,
    backgroundColor: '#F9F9F9',
    color:'#666'
  }
});



export default LocationSelector;