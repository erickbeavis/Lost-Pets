import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';
import { BottomMenu } from '../../components/BottomMenu';
import { FeedPublication } from '../../components/FeedPublication';
import { TopMenu } from '../../components/TopMenu';

export const Feed = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopMenu />
      <View style={styles.notFoundcontainer}>
        <Text style={styles.notFoundText}>Não há publicações no momento</Text>
      </View>
      <TouchableOpacity
        style={styles.addPublicationContainer}
        onPress={() => navigation.navigate('createLostPetPost')}>
        <Image
          source={require('../../../assets/plus-icon.png')}
          style={styles.addPublicationIcon}
        />
      </TouchableOpacity>
      <BottomMenu />
    </View>
  );
};
