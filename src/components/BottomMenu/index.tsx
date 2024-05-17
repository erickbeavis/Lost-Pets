import { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import { CreateLostPetPost } from '~/pages/createLostPetPost';
import { Feed } from '~/pages/feed';

const HomeRoute = () => <Feed />;
const AddPostRoute = () => <CreateLostPetPost />;
const SearchRoute = () => <CreateLostPetPost />;

export const BottomMenu = () => {
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
