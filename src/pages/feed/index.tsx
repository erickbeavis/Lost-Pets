import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { TopMenu } from '../../components/TopMenu';

import { BottomMenu } from '~/components/BottomMenu';
import { FeedPost } from '~/components/FeedPost';
import { usePetsContext } from '~/context/petsContext';

export const Feed = () => {
  const { missingPetPost } = usePetsContext();

  return (
    <SafeAreaView style={styles.container}>
      <TopMenu />
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
