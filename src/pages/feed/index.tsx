import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { BottomMenu } from '../../components/BottomMenu';
import { TopMenu } from '../../components/TopMenu';

import { FeedPost } from '~/components/FeedPost';

export const Feed = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu />
      <FeedPost />
      {/* <View style={styles.notFoundcontainer}>
        <Text style={styles.notFoundText}>Não há publicações no momento</Text>
      </View> */}

      <TouchableOpacity
        style={styles.addPublicationContainer}
        onPress={() => navigation.navigate('createLostPetPost')}>
        <Image
          source={require('../../../assets/plus-icon.png')}
          style={styles.addPublicationIcon}
        />
      </TouchableOpacity>
      <BottomMenu />
    </SafeAreaView>
  );
};
