import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// src
import RootStackNavigator from './src/RootNavigator';
import { useTypedSelector } from './src/hooks/useTypedSelector';
import { useAction } from './src/hooks/useAction';
import { Loader } from './src/components/Loader';
import { Error } from './src/components/Error';

const App: React.FC = () => {
  const { loading, error, data } = useTypedSelector(store => store.reducer);
  const { getAllChars } = useAction();

  useEffect(() => {
    getAllChars();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'#fff'} />
      {loading && !data.results.length ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

export default App;
