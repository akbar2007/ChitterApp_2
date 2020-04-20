import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';  
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import  {HomeScreen} from './screens/Screen';
import { ProfileScreen } from './screens/profile';
import { FeedScreen } from './screens/feed';
import { SearchScreen } from './screens/search';
import { View } from 'react-native';




const AppStackNav = createMaterialBottomTabNavigator({
  Home: {
  screen: HomeScreen,
  navigationOptions: {
    tabBarIcon: ({ tintColor}) => (
        <View>
          <Icon style= {[{color: tintColor}]} size={25} name={'md-home'} />
        </View>
      ),
    }
  }, 

  Feed: {
    screen: FeedScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor}) => (
          <View>
            <Icon style= {[{color: tintColor}]} size={25} name={'md-home'} />
          </View>
        ),
      }
    
  },

  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor}) => (
          <View>
            <Icon style= {[{color: tintColor}]} size={25} name={'md-home'} />
          </View>
        ),
      }
  },

  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor}) => (
          <View>
            <Icon style= {[{color: tintColor}]} size={25} name={'md-home'} />
          </View>
        ),
      }
  }, 
},
{
  initialRouteName:'Home',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  shifting:false,
  barStyle: {backgroundColor: '#694fad'},
}
);
 
 const AppContainer = createAppContainer(AppStackNav)
 
 export default AppContainer;

 