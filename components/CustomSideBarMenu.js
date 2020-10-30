import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer';

export default class CustomSideBarMenu extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userId:firebase.auth().currentUser.email,
        }
    }
    
    render(){
        return(
    <View>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props} />
        </View>
            <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('welcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
    </View>
        )
    }
}
var styles = StyleSheet.create({
    container : {
      flex:1
    },
    drawerItemsContainer:{
      flex:0.8
    },
    logOutContainer : {
      flex:0.2,
      justifyContent:'flex-end',
      paddingBottom:30
    },
    logOutButton : {
      height:30,
      width:'100%',
      justifyContent:'center',
      padding:10
    },
    logOutText:{
      fontSize: 30,
      fontWeight:'bold'
    }
  })