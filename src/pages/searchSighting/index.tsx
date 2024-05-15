import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { styles } from './styles';

import { SightingMap } from '~/components/SightingMap';
import { usePetsContext } from '~/context/petsContext';

const googleMapsKey = process.env.GOOGLE_MAPS_API_KEY;

export const SearchSighting = () => {
  const { region, setRegion } = usePetsContext();

  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          if (!details) return;

          const { lat, lng } = details.geometry.location;

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
            width: '100%',
            alignSelf: 'center',
            zIndex: 99999,
            position: 'absolute',
            top: '1%',
          },
          textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            marginRight: 3,
            marginLeft: 3,
            borderWidth: 1,
            borderRadius: 5,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: '100%',
            color: '#5d5d5d',
            fontSize: 16,
            zIndex: 999,
          },
          poweredContainer: {
            display: 'none',
          },
          listView: {
            flex: 1,
            maxHeight: 200, // Defina a altura máxima desejada
            width: '100%',
            maxWidth: '98%',
            borderWidth: 1,
            marginRight: 3,
            marginLeft: 3,
            marginTop: 5,
          },
          row: {
            width: '100%',
            borderTopWidth: 1,
            flexDirection: 'row',
          },
        }}
      />
      <SightingMap />
    </View>
  );
};
