import { createStackNavigator } from '@react-navigation/stack';

import { CreateLostPetPost } from '../pages/createLostPetPost/index';
import { CreateUser } from '../pages/createUser';
import { Feed } from '../pages/feed/index';
import { Login } from '../pages/login';

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
          headerShown: false,
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
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
