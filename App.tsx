import { NavigationContainer } from '@react-navigation/native';
import { TabsNavigation } from './src/navigation/tabs-navigation';

export default function App() {
  return (
    <NavigationContainer>
      <TabsNavigation />
    </NavigationContainer>
  );
};
