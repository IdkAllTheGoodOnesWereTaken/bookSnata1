import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, Alert, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config.js';
import { ListItem } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import BookDonateScreen from '../screens/bookDonateScreen.js';
import recieverDetailsScreen from '../screens/recieverDetails.js';

export const appStackNavigator = createStackNavigator({
    bookDonateList:{
        screen:BookDonateScreen,
    },
    recieverDetails:{
        screen:recieverDetailsScreen,
    },
},
{initialRouteName:'bookDonateList'}
)