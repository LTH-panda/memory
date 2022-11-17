import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from 'navigations';
import useMemoryStore from 'stores/useMemoryStore';

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
