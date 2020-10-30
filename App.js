import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { bottomTabNavigator, createAppContainer } from 'react-navigation';
import { createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from './screens/welcomeScreen';
import { AppTabNavigator } from './components/appTabNavigator';
import { AppDrawerNavigator} from './components/appDrawerNavigator';

export default class App extends React.Component {
  render(){
  return (
  <View>
    {/*5is ei() tsh(appDrawercotsh(()859gis eid thus dir att btr tdxm tgdi*/}
   <AppContainer/>
  </View>
  );
}}
const appNavigator = createSwitchNavigator({
  welcomeScreen: {screen:WelcomeScreen},
  appTabNavigator: {screen:AppTabNavigator},
  Drawer: {screen : AppDrawerNavigator},
})
const AppContainer = createAppContainer(appNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
)
