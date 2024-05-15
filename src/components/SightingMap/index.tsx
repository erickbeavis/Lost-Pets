import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { usePetsContext } from '~/context/petsContext';

export const SightingMap = () => {
  const { sightingRegion, setSightingRegion } = usePetsContext();

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setSightingRegion({ ...sightingRegion, latitude, longitude });
  };

  return (
    <View style={{ height: 100 }}>
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
