
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
export class FeedScreen extends React.Component{
    constructor(props){
        super(props);
        this.state ={
        isLoading: true,
        shoppingListData: []
        }
       }
  
    componentDidMount(){
        fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
        .then((response) => response.json())
        .then((responseJson) => {
        this.setState({
        shoppingListData: responseJson,
        });
        console.log(this.state.shoppingListData);
        })
        .catch((error) =>{
        console.log(error);
        });     
    }
       
    render(){
    return(
        <View style= {{flex:1}}>  
                    
                    <FlatList
            data={this.state.shoppingListData}
            renderItem={({item}) => 
    <Text>{item.user.given_name}   -- {item.chit_content}</Text>  
        }
            keyExtractor={({id}, index) => id}
            />
            

    </View>
    );
    } 

    
   }

