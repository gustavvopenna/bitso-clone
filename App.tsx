import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TabsNavigation } from './src/navigation/tabs-navigation';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <TabsNavigation />
    </NavigationContainer>
  );
};
