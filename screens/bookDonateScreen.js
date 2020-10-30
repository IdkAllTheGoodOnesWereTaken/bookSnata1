import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, Alert, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config.js';
import { ListItem } from 'react-native-elements';

export default class BookDonateScreen extends React.Component{
  constructor(){
      super();
      this.state={
          userId : firebase.auth().currentUser.email,
          requestedBooksList:[],
      }
  }
getBookRequests=async()=>{
  await db.collection("bookRequest").onSnapshot((snapshot)=>{
                                                               
var requestedBooksList=snapshot.docs.map((doc)=>doc.data())
  

this.setState({
    requestedBooksList:[...requestedBooksList],
})
 }
 ) 
}
keyExtractor = (item, index) => index.toString();

componentDidMount(){

this.getBookRequests();

}
render(){
    return(
      <View>
        <Text>Book Donate Screen
        </Text>
      {/* <MyHeader title="Donate Books" navigation ={this.props.navigation}/> */} 
      <View>
        {
          this.state.requestedBooksList.length === 0
          ?(
            <View>
              <Text>List Of All Requested Books</Text>
            </View>
           )

          :(
            <View>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.requestedBooksList}
              renderItem={
                ({item,i}) =>( <View style={{width:'100%',}}>
                   <Text>{ "Book Id:" + item.bookName }</Text> 
                   <Text>{ "Reason for request: " + item.reason }</Text>
                   <TouchableOpacity style={styles.button} title='Donate' onPress={()=>{
                   alert("In Button"+ " "+ item.bookName)
                   this.props.navigation.navigate("recieverDetails",{"details": item})
                   
                  }
                    }/>
                   </View>)
                         }
                  />
                  </View>
          )
        }
      </View>
    </View>
  )
}
}
   
const styles = StyleSheet.create({ 
subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center', alignSelf:'center' }, 
button:{
  width:300,
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
})