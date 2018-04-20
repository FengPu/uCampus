
import React, { Component } from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleBar from './tabDecorators/TitleBar';
import { About, Admission, Books, Grade, Guess, QA, Region, DataList } from './activityModules';
import Award from './activityModules/Award';
import Review from './activityModules/Review';
import NavigationBar from '../NavigationBar';
import { activityAbout, activityAdmission, activityAward, activityBooks, activityGrade,
         activityGuess, activityQA, activityRegion, activityReview } from '../../images/images';

const uWidth = Dimensions.get('window').width;
const uHeight = Dimensions.get('window').height;
const mWidth = Math.floor((uWidth-12)/3);
const headerFontColor = '#2D82C6';
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


export default class LearningScreen extends Component{
    constructor(props){
        
        super(props);
        // context is used on header's
        this.activityModules = [
            {target: 'About', routeName: 'About', title: '關於比賽1', icon: activityAbout},
            {target: 'Region', routeName: 'Region', title: '賽區資訊2', icon: activityRegion},
            {target: 'Review', routeName: 'Review', title: '題目回顧3', icon: activityReview},
            {target: 'Award', routeName: 'Award', title: '得獎名單4', icon: activityAward, context: 'Award'},
            {target: 'Books', routeName: 'Books', title: '作文專書5', icon: activityBooks},
            {target: 'AI', routeName: 'AI', title: '考前暖身', icon: activityQA}
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
                            this.props.navigation.navigate(modules.routeName, {
                                title: modules.title, 
                                back: modules.back,
                                target: modules.target,
                                context: modules.context,
                                titleName: modules.titleName
                            });                         
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

