import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, ScrollView, Alert, FlatList } from 'react-native';
import firebase from 'firebase';
import db from '../config.js';
import { Card,Icon} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

export default class recieverDetailsScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            userId:firebase.auth().currentUser.email,
            userName:'',
            recieverId:this.props.navigation.getParam("details")["userId"],
            requestId:this.props.navigation.getParam("details")["requestId"],
            bookName:this.props.navigation.getParam("details")["bookName"],
            reason:this.props.navigation.getParam("details")["reason"],
            recieverName:'',
            receiverContact:'',
            recieverAddress:'',
            recieverRequestDocId:'',
    
        }
    }
    getReceiverDetails(){
        db.collection("users").where("emailId","==",this.state.recieverId).get().then(snapShot=>{
            snapShot.forEach(doc=>{
                this.setState({
                    recieverName:doc.data().first_name,
                    recieverContact:doc.data().contact,
                    recieverAddress:doc.data().address, 
                })
            })
        })
        db.collection("bookRequest").where("requestId","==",this.state.requestId).get().then(snapShot=>{
            snapShot.forEach(doc=>{
               this.setState({
                   recieverRequestDocId:doc.id
            })
       })

        })
    }
    componentDidMount(){
        this.getReceiverDetails()
    }
render(){
    return(
        <View>
            <View>
                <Card>
                    <Card>
                        <Text>Name Of Book:{this.state.bookName}</Text>
                    </Card>
                    <Card>
                        <Text>Reason for Request:{this.state.reason}</Text>
                    </Card>
                    <Card>
                        <Text>Reciever Contact:{this.state.reason}</Text>
                    </Card>
                    
                </Card>
            </View>
            <View>
<Card>
                    <Card>
                        <Text>Address:{this.state.recieverAddress}</Text>
                    </Card>
                    <Card>
                        <Text>Contact:{this.state.recieverContact}</Text>
                    </Card>
                    <Card>
                        <Text>Reciever Name:{this.state.recieverName}</Text>
                    </Card>
</Card>
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({ container: { flex:1, },
     buttonContainer : { flex:0.3, justifyContent:'center', alignItems:'center' },
     button:{ width:200, height:50, justifyContent:'center', alignItems : 'center', borderRadius: 10, backgroundColor: 'orange', shadowColor: "#000", shadowOffset: { width: 0, height: 8 }, elevation : 16 } })
