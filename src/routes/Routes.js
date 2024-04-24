import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/login';
import { CreateUser } from '../pages/createUser';
import { Feed } from '../pages/Feed';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
              name='feed'
              component={Feed}
              options={{
                  headerShown: false
              }}
            />
            <Stack.Screen
              name='login'
              component={Login}
              options={{
                  headerShown: false
              }}
            />
            <Stack.Screen
              name='createuser'
              component={CreateUser}
              options={{
                  title: '',
                  headerTintColor: '#FFF',
                  headerTransparent: true
              }}
            />
        </Stack.Navigator>
    );
}