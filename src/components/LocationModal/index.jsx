import React, { useMemo, useRef } from 'react';
import { StyleSheet,View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import LocationSelector from '../LocationSelector';

const LocationModal = ({ currentLocation, onSelect, onError }) => {
  const snapPoints = useMemo(() => ['20%', '80%'], []);
  const modalRef = useRef(null);

  const handleFocus = () => {
    modalRef.current?.expand();
  }

  const handleSelect = (value) => {
    onSelect?.(value)      
    modalRef.current?.collapse();
  }
  
  return (    
    <BottomSheet
      snapPoints={snapPoints}
      index={0}
      ref={modalRef}
    >
      <View style={styles.container}>
        <LocationSelector
          onSelect={handleSelect}
          onFocus={handleFocus}
          onError={onError}
          currentLocation={currentLocation} />
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
});

export default LocationModal;
