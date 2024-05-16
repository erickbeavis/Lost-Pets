import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { usePetsContext } from '~/context/petsContext';

type SightingMapProps = {
  isModal: boolean;
};

export const SightingMap = ({ isModal }: SightingMapProps) => {
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
        region={sightingLocation}
        style={{ height: '100%' }}
        onPress={handleMapPress}>
        <Marker coordinate={sightingLocation} />
      </MapView>
    </View>
  );
};
