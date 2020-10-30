import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, Alert } from 'react-native';
import firebase from 'firebase';
import {header } from 'react-native-elements';
import db from '../config.js'


export default class BookRequestScreen extends React.Component{
    constructor(){
        super();
        this.state={
bookName:'',
reason:'',
userId : firebase.auth().currentUser.email,
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7);
    }
    
    addBookRequest=(bookName,reason)=>{
    alert("Not an error")
    
    var userid=this.state.userId;
    var requestid=this.createUniqueId();
    alert(requestid)
    alert(this.state.userId)
    db.collection('bookRequest').add({
          
    bookName: bookName,
    reason: reason,
    userId:userid,
    requestId: requestid,

})

    }
    render(){
        return(
    <View>
        <TextInput 
          style ={styles.formTextInput}
        placeholder={'Book Name'} value={this.state.bookName} 
        onChangeText={(text)=>{this.setState({
             bookName:text,
           })}}>

        </TextInput>
        
        <TextInput   style ={[styles.formTextInput,{height:100}]} placeholder={'Reason for issue'} 
        onChangeText={(text)=>{this.setState({
            reason:text,
       })}}
        value={this.state.reason}></TextInput>
        <TouchableOpacity style={styles.button}
        onPress={()=>{this.addBookRequest(this.state.bookName,this.state.reason)}}
        ><Text>Place requests</Text></TouchableOpacity>
    </View>
        )
    }
   
}
const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"100%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:'100%',
      height:50,
      marginTop:20,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
      padding: 10
    },
    }
  )