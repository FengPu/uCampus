
import React, { Component } from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleBar from './tabDecorators/TitleBar';
import { About, Admission, Award, Books, Grade, Guess, QA, Region, Review} from './activityModules';
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
        this.activityModules = [
            {component: About, name: 'About', title: '關於比賽'},
            {component: Region, name: 'Region', title: '賽區資訊'},
            {component: Review, name: 'Review', title: '題目回顧'},
            {component: Award, name: 'Award', title: '得獎名單'},
            {component: Books, name: 'Books', title: '作文專書'},
            {component: QA, name: 'QA', title: '常見問題'},           
            {component: Guess, name: 'Guess', title: '考前猜猜'},
            {component: Grade, name: 'Grade', title: '成績'},
            {component: Admission, name: 'Admission', title: '入場證'}
                        
        ]

    }
    //
    render(){
        return(
        <View style={{flex: 1}}>
            <View style={styles.content}>
              { this.activityModules.map(
                  (modules, index)=>{
                      return (
                      <View 
                        key={index}                     
                        style={{ width: mWidth, height: mWidth, backgroundColor: 'white', margin: 2}}> 
                      <Button
                        title={modules.title}
                        onPress={() => {
                            /*this.props.navigation.setParams({
                                tabBarVisible: false});*/
                            this.props.navigation.navigate(modules.name);                         
                        }}
                        />
                      </View>);
                  }
              )}
            </View>
        </View>);
    }
}
