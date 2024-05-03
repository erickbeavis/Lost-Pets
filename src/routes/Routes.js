import { createStackNavigator } from '@react-navigation/stack';

import { CreateLostPetPost } from '../pages/createLostPetPost/index';
import { CreateUser } from '../pages/createUser';
import { Feed } from '../pages/feed/index';
import { Login } from '../pages/login';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="feed"
        component={Feed}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="createuser"
        component={CreateUser}
        options={{
          title: '',
          headerTintColor: '#FFF',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="createLostPetPost"
        component={CreateLostPetPost}
        options={{
          title: '',
          headerTintColor: '#FFF',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
