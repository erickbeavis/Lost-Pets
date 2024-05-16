import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { usePetsContext } from '~/context/petsContext';

type SightingMapProps = {
  isModal: boolean;
  location?: any;
};

export const SightingMap = ({ isModal, location }: SightingMapProps) => {
  const { sightingLocation, setSightingLocation } = usePetsContext();

  const handleMapPress = (event: any) => {
    if (isModal) return;

    const { latitude, longitude } = event.nativeEvent.coordinate;

    setSightingLocation({ ...sightingLocation, latitude, longitude });
  };

  return (
    <View style={isModal ? { height: 200 } : null}>
      <MapView
        scrollEnabled={!isModal}
        region={isModal ? location : sightingLocation}
        style={{ height: '100%' }}
        onPress={handleMapPress}>
        <Marker coordinate={isModal ? location : sightingLocation} />
      </MapView>
    </View>
  );
};
