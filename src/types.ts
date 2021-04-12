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
