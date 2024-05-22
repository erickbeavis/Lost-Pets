import { createStackNavigator } from '@react-navigation/stack';

import { CreateLostPetPost } from '../pages/createLostPetPost/index';
import { CreateUser } from '../pages/createUser';
import { Feed } from '../pages/feed/index';
import { Login } from '../pages/login';

import { SearchSighting } from '~/pages/searchSighting';
import { SightingModal } from '~/pages/sightingModal';
import MyProfile from '~/pages/myProfile';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="createUser"
        component={CreateUser}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="feed"
        component={Feed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="createLostPetPost"
        component={CreateLostPetPost}
        options={{
          headerShown: true,
          headerTitle: 'Voltar',
        }}
      />
      <Stack.Screen
        name="sightingModal"
        component={SightingModal}
        options={{
          headerShown: true,
          headerTitle: 'Voltar',
        }}
      />
      <Stack.Screen
        name="searchSighting"
        component={SearchSighting}
        options={{
          headerShown: true,
          headerTitle: 'Voltar',
        }}
        />
        <Stack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{
          headerShown: true,
          headerTitle: 'Voltar',
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
