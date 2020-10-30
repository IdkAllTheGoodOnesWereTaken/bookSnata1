import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, Alert } from 'react-native';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import bookDonateScreen from '../screens/bookDonateScreen'
import bookRequestScreen from '../screens/bookRequestScreen'
import { appStackNavigator } from './appStackNavigator';


export const AppTabNavigator=createBottomTabNavigator({
bookDonate:{screen:appStackNavigator},
bookRequest:{screen:bookRequestScreen}
})
