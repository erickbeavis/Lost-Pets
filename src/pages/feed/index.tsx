import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';
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

      <IconButton
        icon="plus"
        iconColor="#fff"
        size={40}
        style={styles.addPublicationButton}
        onPress={() => navigation.navigate('createLostPetPost')}
      />
      <BottomMenu />
    </SafeAreaView>
  );
};
