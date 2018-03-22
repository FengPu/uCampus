import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TitleBar from './tabDecorators/TitleBar';

const styles = {
    content: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    }
}
export default class LearningScreen extends Component{
    render(){
        return(
        <View style={{flex: 1}}>
            <TitleBar title={'學習'}/>
            <View style={styles.content}>
            <Text> learning </Text>
            </View>
        </View>);
    }
}