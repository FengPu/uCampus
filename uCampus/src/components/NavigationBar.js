import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import LearningScreen from './tabScreens/LearningScreen';
import ActivityStack from './tabScreens/ActivityStack';
import About from './tabScreens/activityModules/About';
import MessageScreen from './tabScreens/MessageScreen';
import SettingsScreen from './tabScreens/SettingsScreen';

const NavigationBar = TabNavigator(
    {
      訊息: { screen: MessageScreen },
      學習: { screen: LearningScreen },
      聯合盃: {  screen: ActivityStack },
      設定: { screen: SettingsScreen }
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          /*
          if (routeName === 'Home') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }*/
          switch(routeName){
              case '訊息':
                iconName = 'envelope';
                break;
              case '學習':
                iconName = 'book';
                break;
              case '設定':
                iconName = 'cog';
                break;
              case '聯合盃':
                iconName = 'apple';
                break;
              default:
                iconName = 'rocket';
                break;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          //return (<Ionicons name={iconName} size={25} color={tintColor} />);
          return (<Icon name={iconName} size={25} color={tintColor} />);
        },
      }),
      tabBarOptions: {
        activeTintColor: '#00a4e4',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: 'white'
        } 
      },
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
    }
  );

  export default NavigationBar;
