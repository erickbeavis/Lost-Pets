import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { TopMenu } from '../../components/TopMenu';

import { FeedPost } from '~/components/FeedPost';
import { usePetsContext } from '~/context/petsContext';

export const Feed = () => {
  const { missingPetPost } = usePetsContext();

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu />
      <Chip icon="map-marker" style={styles.feedMapLocation}>
        Localização...
      </Chip>
      {missingPetPost.length > 0 ? (
        <FlatList
          data={missingPetPost}
          renderItem={(item) => <FeedPost post={item} />}
          style={styles.feedPostContainer}
        />
      ) : (
        <View style={styles.notFoundcontainer}>
          <Text style={styles.notFoundText}>Não há publicações no momento</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
