import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import bookRequestScreen from '../screens/bookRequestScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import customSideBarMenu from './CustomSideBarMenu';

export const AppDrawerNavigator=createDrawerNavigator({
    Home : {
        screen : AppTabNavigator,
        },
       'Book Request' :{
        screen : bookRequestScreen,
       } ,
    },
     {contentComponent:customSideBarMenu},
    {
        initialRouteName : 'Home'
    },
)
//this.this.this. 