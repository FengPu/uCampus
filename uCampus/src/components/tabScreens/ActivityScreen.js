
import React, { Component } from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleBar from './tabDecorators/TitleBar';
import { About, Admission, Books, Grade, Guess, QA, Region } from './activityModules';
import Award from './activityModules/Award';
import Review from './activityModules/Review';
import NavigationBar from '../NavigationBar';
import { activityAbout, activityAdmission, activityAward, activityBooks, activityGrade,
         activityGuess, activityQA, activityRegion, activityReview } from '../../images/images';

const uWidth = Dimensions.get('window').width;
const uHeight = Dimensions.get('window').height;
const mWidth = Math.floor((uWidth-12)/3);
const headerFontColor = 'blue';
const styles = {
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    buttonContainer: {
        width: mWidth, height: mWidth, backgroundColor: 'white', 
        margin: 2, justifyContent: 'center', alignItems: 'center'
    },
    iconImg: {
       marginBottom: 15
    },
    iconTitle: {
       fontSize: 16
    }

}


export default class ActivityScreen extends Component{
    constructor(props){
        
        super(props);
        this.activityModules = [
            {component: About, name: 'About', title: '關於比賽', icon: activityAbout},
            {component: Region, name: 'Region', title: '賽區資訊', icon: activityRegion},
            {component: Review, name: 'Review', title: '題目回顧', icon: activityReview},
            {component: Award, name: 'Award', title: '得獎名單', icon: activityAward},
            {component: Books, name: 'Books', title: '作文專書', icon: activityBooks},
            {component: QA, name: 'QA', title: '常見問題', icon: activityQA},           
            {component: Guess, name: 'Guess', title: '考前猜猜', icon: activityGuess},
            {component: Grade, name: 'Grade', title: '成績', icon: activityGrade},
            {component: Admission, name: 'Admission', title: '入場證', icon: activityAdmission}
                        
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
                      <TouchableOpacity 
                        key={index}                     
                        style={styles.buttonContainer}
                        onPress={() => {
                            /*this.props.navigation.setParams({
                                tabBarVisible: false});*/
                            this.props.navigation.navigate(modules.name, {title: 'WHATEVER', alf: '關於比賽'});                         
                        }}
                        > 
                      <Image style={styles.iconImg} source={modules.icon}/>
                      <Text style={styles.iconTitle}>
                        {modules.title}                      
                      </Text>
                      </TouchableOpacity>);
                  }
              )}
            </View>
        </View>);
    }
}

