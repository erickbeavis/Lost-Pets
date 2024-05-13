import React, { useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { styles } from './styles';

export const SightingMap = ({ onLocationSelect }: any) => {
  const [region, setRegion] = useState({
    latitude: -11.0516176,
    longitude: -58.140747,
    latitudeDelta: 10.0,
    longitudeDelta: 10.0,
  });

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    console.log('TCL  event.nativeEvent.coordinate:', event.nativeEvent);
    setRegion({ ...region, latitude, longitude });
    onLocationSelect({ latitude, longitude });
  };

  return (
    <View style={styles.mapContainer}>
      <MapView
        region={region}
        showsUserLocation
        style={{ flex: 1, height: 200 }}
        onPress={handleMapPress}>
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
};
