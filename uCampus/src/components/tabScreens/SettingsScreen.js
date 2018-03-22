import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TitleBar from './tabDecorators/TitleBar';

export default class SettingsScreen extends Component{
    render(){
        return(
        <View style={{flex: 1}}>
            <TitleBar title={'設定'}/>
            <Text> setting </Text>
        </View>);
    }
}