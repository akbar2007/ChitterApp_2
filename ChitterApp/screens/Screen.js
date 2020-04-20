import React from 'react';
import { Text, TextInput, View, Button, StyleSheet, Alert } from 'react-native';
export class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email : '',
            password:'',
            name: ''
        };
      }

    // sets the email value in the state
    handleInput = (email) => {
    this.setState({email: email})

  }
  handleInput = (password) => {
    this.setState({password: password})
  }
       
    render(){
    return(

       
    
    <View style= {styles.container}>  
        <Text> Home Screen</Text> 
        <Button
        title="About Me"
        onPress={() => this.props.navigation.navigate('About')}
        />

    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={this.handleInput}
      value={this.state.email} placeholder = {'Email'} 
    />

    
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={this.handleInput}
      value={this.state.password} placeholder = {'Password'}
    />
    </View>
    );
    } 

    
   }
const styles = StyleSheet.create({ 
    
}); 

