import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { usePetsContext } from '~/context/petsContext';

type SightingMapProps = {
  isModal: boolean;
};

export const SightingMap = ({ isModal }: SightingMapProps) => {
  const { sightingRegion, setSightingRegion } = usePetsContext();

  const handleMapPress = (event: any) => {
    if (isModal) return;

    const { latitude, longitude } = event.nativeEvent.coordinate;

    setSightingRegion({ ...sightingRegion, latitude, longitude });
  };

  return (
    <View style={isModal ? { height: 200 } : null}>
      <MapView
        region={sightingRegion}
        showsUserLocation
        style={{ height: '100%' }}
        onPress={handleMapPress}>
        <Marker coordinate={sightingRegion} />
      </MapView>
    </View>
  );
};
