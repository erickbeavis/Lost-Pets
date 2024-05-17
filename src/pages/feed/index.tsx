import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { BottomMenu } from '../../components/BottomMenu';
import { TopMenu } from '../../components/TopMenu';

import { FeedPost } from '~/components/FeedPost';
import { usePetsContext } from '~/context/petsContext';

export const Feed = () => {
  const { missingPetPost } = usePetsContext();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu />
      {missingPetPost.length > 0 ? (
        <FlatList
          data={missingPetPost}
          renderItem={() => <FeedPost />}
          style={styles.feedPostContainer}
        />
      ) : (
        <View style={styles.notFoundcontainer}>
          <Text style={styles.notFoundText}>Não há publicações no momento</Text>
        </View>
      )}
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
