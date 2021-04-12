export interface Location {
  name?: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
}

export interface MapUserLocation {
  nativeEvent?: {
    coordinate: {
      latitude: number;
      longitude: number;
    };
  };
}

export interface LocationModalProps {
  onSelect: (location: Location) => void;
  onError: () => void;
}

export interface LocationSelectorProps {
  onSelect: (location: Location) => void;
  onFocus: () => void;
  onError: () => void;
}
export interface MapProps {
  pickup: Location;
  destination: Location;
  onReady: () => void;
  onError: () => void;
  onUserLocationChange: (userLocation: MapUserLocation) => void;
}
