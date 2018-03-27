import React, { Component } from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleBar from './tabDecorators/TitleBar';
import About from './activityModules/About';
import NavigationBar from '../NavigationBar';
import ActivityScreen from './ActivityScreen';

const headerFontColor = 'blue';
const styles = {
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

const ActivityStackComponent = StackNavigator({
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
                             onPress={ () => {
                                } } />,
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


class ActivityStack extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return <ActivityStackComponent screenProps={this.props}/>;
    }

}

export default ActivityStack;