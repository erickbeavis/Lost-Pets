import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { usePetsContext } from '~/context/petsContext';

export const SightingMap = () => {
  const { region, setRegion } = usePetsContext();

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setRegion({ ...region, latitude, longitude });
  };

  return (
    <View>
      <MapView
        region={region}
        showsUserLocation
        style={{ height: '100%' }}
        onPress={handleMapPress}>
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
};
