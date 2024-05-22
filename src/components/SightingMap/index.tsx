import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { usePetsContext } from '~/context/petsContext';

type SightingMapProps = {
  isModal: boolean;
  location?: any;
};

export const SightingMap = ({ isModal, location }: SightingMapProps) => {
  const { sightingLocation, setSightingLocation } = usePetsContext();
  const [mapLocation, setMapLocation] = useState(sightingLocation);

  useEffect(() => {
    if (location) {
      setMapLocation({
        ...location,
        latitudeDelta: sightingLocation.latitudeDelta,
        longitudeDelta: sightingLocation.longitudeDelta,
      });
    }
  }, [location]);

  const handleMapPress = (event: any) => {
    if (isModal) return;

    const { latitude, longitude } = event.nativeEvent.coordinate;

    setSightingLocation({ ...sightingLocation, latitude, longitude });
  };

  return (
    <View style={isModal ? { height: 200 } : null}>
      <MapView
        scrollEnabled={!isModal}
        region={mapLocation}
        style={{ height: '100%' }}
        onPress={handleMapPress}>
        <Marker coordinate={mapLocation} />
      </MapView>
    </View>
  );
};
