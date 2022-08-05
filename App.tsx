import React, { FC, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './src/screens';
import { useTypedSelector } from './src/hooks/useTypedSelector';
import { useAction } from './src/hooks/useAction';
import { Loader } from './src/components/Loader';
import { Error } from './src/components/Error';
import { Color } from './src/styles';

const App: FC = () => {
  const { loading, error, data } = useTypedSelector(store => store.reducer);
  const { getAllCharacters } = useAction();

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <StatusBar backgroundColor={Color.WHITE} />
      <NavigationContainer>
        {loading && !data.results.length ? <Loader /> : error ? <Error /> : <RootStackNavigator />}
      </NavigationContainer>
    </>
  );
};

export default App;
