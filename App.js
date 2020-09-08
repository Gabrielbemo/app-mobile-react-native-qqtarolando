import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/pages/LoginScreen'
import NewsPage from './src/pages/NewsPage'
import NewsDetailPage from './src/pages/NewsDetailPage';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#5c5c5c',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            flexGrow: 1,
            textAlign: 'center',
          },
          headerTintColor: '#fff'
        }} name="Login" component={LoginScreen} />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#5c5c5c',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            flexGrow: 1,
            textAlign: 'center',
          },
          headerTintColor: '#fff'
        }}
        name="Noticias" component={NewsPage} />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: '#5c5c5c',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 30,
            flexGrow: 1,
            textAlign: 'center',
          },
          headerTintColor: '#fff'
        }}
        name="Detalhes" component={NewsDetailPage} />
    </Stack.Navigator >
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
