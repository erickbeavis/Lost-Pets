import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

import { CreateLostPetPost } from '../pages/createLostPetPost/index';
import { CreateUser } from '../pages/createUser';
import { Login } from '../pages/login';

import { BottomMenu } from '~/components/BottomMenu';
import { SearchSighting } from '~/pages/searchSighting';
import { SightingModal } from '~/pages/sightingModal';

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
        component={BottomMenu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="createLostPetPost" component={CreateLostPetPost} />
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
    </Stack.Navigator>
  );
};

export default Routes;
