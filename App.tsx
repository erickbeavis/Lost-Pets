import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import Routes from './src/routes/Routes';

import { PetsProvider } from '~/context/petsContext';

export default function App() {
  return (
    <PaperProvider>
      <PetsProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="dark" translucent />
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </SafeAreaView>
      </PetsProvider>
    </PaperProvider>
  );
}
