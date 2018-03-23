import React, { Component } from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleBar from './tabDecorators/TitleBar';
import About from './activityModules/About';
import NavigationBar from '../NavigationBar';
const headerFontColor = 'blue';
const styles = {
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'      
    },
    headerLeftText: {
        fontSize: 18,
        color: headerFontColor
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
                        onPress={() => this.props.navigation.navigate('About')}
                        />
                      </View>);
                  }
              )}
            </View>
        </View>);
    }
}


const ActivityStack = StackNavigator({
    ActivityScreen: { screen: ActivityScreen,
        navigationOptions: {
            headerLeft: <Button
                             title=""
                             onPress={ () => {} } />,
        }
     },
    About: { screen: About,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                             title="Refresh"
                             onPress={ () => console.log('Refresh') } />,
        headerLeft: <TouchableOpacity 
                        onPress={() => navigation.navigate('ActivityScreen')}
                        >
                        <View style={styles.headerLeft}>
                            <Icon 
                            name="angle-left" 
                            size={30} 
                            style={{marginRight: 5, marginLeft: 5}}
                            color={headerFontColor}>
                            </Icon>
                            <Text style={styles.headerLeftText}>test</Text>
                        </View>
                    </TouchableOpacity>,
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
        }) 
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