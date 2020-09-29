import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite';
import Landing from '../../Routes/Landing/Landing';
import Load from '../../Routes/Load/Load';
import Main from '../../Routes/Main/Main';

const App = () => {
  /* --- This section creates and opens our DB for use globally in the app ---*/

  const globalAny: any = global;

  globalAny.db = SQLite.openDatabase('DB'); // creates if it does not exist

  console.log(globalAny.db);

  /* --- --- */

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Load" component={Load} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
