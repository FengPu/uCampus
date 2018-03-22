import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TitleBar from './tabDecorators/TitleBar';

export default class MessageScreen extends Component{
    render(){
        return(
        <View style={{flex: 1}}>
            <TitleBar title={'訊息'}/>
            <Text> message </Text>
        </View>);
    }
}