import React, { Component } from 'react';
import { View, Text, Dimensions, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TitleBar from './tabDecorators/TitleBar';
import About from './activityModules/About';
import NavigationBar from '../NavigationBar';
const styles = {
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    }
}
const uWidth = Dimensions.get('window').width;
const uHeight = Dimensions.get('window').height;
const mWidth = Math.floor((uWidth-12)/3);

class ActivityScreen extends Component{

    render(){
        return(
        <View style={{flex: 1}}>
            <View style={styles.content}>
              {[1,2,3,4,5,6].map(
                  (value)=>{
                      return (
                      <View 
                        key={value}
                        style={{ width: mWidth, height: mWidth, backgroundColor: 'white', margin: 2}}> 
                      <Button
                        title="Go to Details"
                        onPress={() => this.props.navigation.navigate('About')}/>
                      </View>);
                  }
              )}
            </View>
        </View>);
    }
}


const ActivityStack = StackNavigator({
    ActivityScreen: { screen: ActivityScreen },
    About: { screen: About,                 
        navigationOptions: {
        tabBarVisible: false,
        headerTitle: <Text
               style={{
                   backgroundColor: 'white',
                   alignSelf: 'center',
                   textAlignVertical: 'center',
                   fontSize: 16, 
                   fontWeight: 'bold'
               }}
               onPress={() => {
                   
               }}> About </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        } 
    }
  },
  {
    navigationOptions: {
            headerTitle: <Text
               style={{
                   backgroundColor: 'white',
                   alignSelf: 'center',
                   textAlignVertical: 'center',
                   fontSize: 16, 
                   fontWeight: 'bold'
               }}
               onPress={() => {
                   
               }}> 聯合盃 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  });

export default ActivityStack;