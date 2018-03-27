
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
    }
}
const uWidth = Dimensions.get('window').width;
const uHeight = Dimensions.get('window').height;
const mWidth = Math.floor((uWidth-12)/3);

export default class ActivityScreen extends Component{
    constructor(props){
        
        super(props)

    }
    
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
