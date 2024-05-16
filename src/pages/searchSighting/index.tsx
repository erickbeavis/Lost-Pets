import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { IconButton } from 'react-native-paper';

import { styles } from './styles';

import { SightingMap } from '~/components/SightingMap';
import { usePetsContext } from '~/context/petsContext';

const googleMapsKey = process.env.GOOGLE_MAPS_API_KEY;

export const SearchSighting = () => {
  const { sightingLocation, setSightingLocation } = usePetsContext();

  const navigation = useNavigation();

  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          if (!details) return;

          const { lat, lng } = details.geometry.location;

          setSightingLocation({
            ...sightingLocation,
            latitude: lat,
            longitude: lng,
            address: details.formatted_address,
          });
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
            borderColor: '#ccc',
            elevation: 20,
            shadowColor: '#52006A',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.5,
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
            maxHeight: 200,
            width: '100%',
            maxWidth: '98%',
            borderColor: '#ccc',
            borderWidth: 1,
            marginRight: 3,
            marginLeft: 3,
            marginTop: 5,
          },
          row: {
            width: '100%',
            borderTopWidth: 1,
            borderColor: '#ccc',
            flexDirection: 'row',
          },
        }}
      />
      <View style={styles.confirmButtonContainer}>
        <IconButton
          icon="plus"
          iconColor="#fff"
          size={50}
          onPress={() => navigation.navigate('sightingModal')}
          style={styles.confirmButton}
        />
      </View>
      <SightingMap isModal={false} />
    </View>
  );
};
