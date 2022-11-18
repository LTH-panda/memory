import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from 'navigations';
import useMemoryStore from 'stores/useMemoryStore';
import SplashScreen from 'react-native-splash-screen';

function App() {
  const {loadMemories} = useMemoryStore();

  useEffect(() => {
    loadMemories();
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
