import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import Routes from './src/routes/Routes';

import { PetsProvider } from '~/context/petsContext';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" translucent />
      <NavigationContainer>
        <PetsProvider>
          <PaperProvider>
            <Routes />
          </PaperProvider>
        </PetsProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}
