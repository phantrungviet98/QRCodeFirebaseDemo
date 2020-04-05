import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './src/screens/HomeScreen';
import {HomeHeaderLeft} from './src/components/HomeHeaderLeft';
import {UsersScreen} from './src/screens/UsersScreen';

const Stack = createStackNavigator();

const homeOptions = {
  headerLeft: (props) => <HomeHeaderLeft {...props} />
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name={'Home'} 
          component={HomeScreen}
          options={homeOptions} />
        <Stack.Screen 
          name={'Users'}
          component={UsersScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
