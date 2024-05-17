import { useEffect, useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import { usePetsContext } from '~/context/petsContext';
import { CreateLostPetPost } from '~/pages/createLostPetPost';
import { Feed } from '~/pages/feed';

const HomeRoute = () => <Feed />;
const AddPostRoute = () => <CreateLostPetPost />;
const SearchRoute = () => <CreateLostPetPost />;

export const BottomMenu = () => {
  const { missingPetPost } = usePetsContext();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', focusedIcon: 'home' },
    { key: 'addPost', focusedIcon: 'plus' },
    { key: 'search', focusedIcon: 'magnify' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    addPost: AddPostRoute,
    search: SearchRoute,
  });

  useEffect(() => {
    if (missingPetPost.length === 0) return;

    setIndex(0);
  }, [missingPetPost]);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#228c80', height: 50 }}
      activeIndicatorStyle={{ backgroundColor: '#fff' }}
      inactiveColor="#fff"
    />
  );
};
