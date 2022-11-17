import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from 'navigations';
import useMemoryStore from 'stores/useMemoryStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage.clear();

function App() {
  const {loadMemories} = useMemoryStore();

  useEffect(() => {
    loadMemories();
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
