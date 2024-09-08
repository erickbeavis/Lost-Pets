import { useState } from 'react';
import { View, Text, RefreshControl } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { TopMenu } from '../../components/TopMenu';

import { FeedPost } from '~/components/FeedPost';
import { Loading } from '~/components/Loading';
import { usePetsContext } from '~/context/petsContext';

export const Feed = () => {
  const { handleSearchMissingPet, missingPetPost, tabIndex, setTabIndex, feedLocation } =
    usePetsContext();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    handleSearchMissingPet();

    setRefreshing(false);
  };

  return (
    <>
      <Loading />
      <SafeAreaView style={styles.container}>
        <TopMenu />
        <Chip icon="map-marker" style={styles.feedMapLocation} onPress={() => setTabIndex(2)}>
          {feedLocation.address !== '' ? feedLocation.address : 'Filtrar por localização...'}
        </Chip>
        {feedLocation.address !== '' ? (
          <View style={styles.notFoundcontainer}>
            <Text style={styles.notFoundText}>Selecione uma localização...</Text>
          </View>
        ) : (
          <>
            {missingPetPost.length > 0 && tabIndex === 0 ? (
              <>
                <FlatList
                  data={missingPetPost}
                  renderItem={({ item, index }) => <FeedPost item={item} index={index} />}
                  style={styles.feedPostContainer}
                  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                />
              </>
            ) : (
              <View style={styles.notFoundcontainer}>
                <Text style={styles.notFoundText}>Não há publicações no momento</Text>
              </View>
            )}
          </>
        )}
      </SafeAreaView>
    </>
  );
};
