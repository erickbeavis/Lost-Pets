
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { StatusBar } from 'expo-status-bar';

export default function App() {
	return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='dark' translucent={true} />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
	);
}