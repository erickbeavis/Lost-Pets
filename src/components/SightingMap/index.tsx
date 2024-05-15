import React, { useState } from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker } from 'react-native-maps';

import { styles } from './styles';

const googleMapsKey = process.env.GOOGLE_MAPS_API_KEY;

export const SightingMap = () => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0022,
    longitudeDelta: 0.0022,
  });

  const handleMapPress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setRegion({ ...region, latitude, longitude });
  };

  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          if (!details) return;

          const { lat, lng } = details.geometry.location;

          console.log('TCL  lat, lng:', lat, lng);
          setRegion({ ...region, latitude: lat, longitude: lng });
        }}
        fetchDetails
        query={{
          key: googleMapsKey,
          language: 'pt-br',
          components: 'country:br',
        }}
        styles={{
          container: {
            width: '90%',
            alignSelf: 'center',
          },
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
            zIndex: 999,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
      <MapView region={region} showsUserLocation style={{ height: 100 }} onPress={handleMapPress}>
        <Marker coordinate={region} />
      </MapView>
    </View>
  );
};
