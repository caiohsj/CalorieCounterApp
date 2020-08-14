import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Food from './pages/food';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                  name="Main"
                  component={Main}
                  options={
                    {
                      title: 'Calories Counter',
                      headerStyle: styles.mainHeaderStyle,
                      headerTintColor: '#fff'
                    }
                  }
                />
                <Stack.Screen
                  name="Food"
                  component={Food}
                  options={({ route }) => ({
                      title: route.params.title,
                      headerStyle: styles.mainHeaderStyle,
                      headerTitleStyle: styles.headerTitleStyle,
                      headerTintColor: '#fff'
                    })
                  }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  mainHeaderStyle: {
    backgroundColor: '#00b894'
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

export default Routes;