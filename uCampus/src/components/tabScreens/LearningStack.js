import React, { Component } from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import TitleBar from './tabDecorators/TitleBar';
/*
import About from './activityModules/About';
import Admission from './activityModules/Admission';
import Award from './activityModules/Award';
import Books from './activityModules/Books';
import Grade from './activityModules/Grade';
import Guess from './activityModules/Guess';
import QA from './activityModules/QA';
import Region from './activityModules/Region';
import Review from './activityModules/Review';
*/
//import {Grade} from './activityModules/Grade';
import { Stars, LevelUp } from './activityModules';
import DataList from './activityModules/DataList';
import ClassRoom from './activityModules/ClassRoom';
import Poll from './activityModules/Poll';
import WarmUp from './activityModules/WarmUp';
import MarkingEssay from './activityModules/MarkingEssay';
import AwardFinal from './activityModules/AwardFinal';
import Review from './activityModules/Review';
import FinalButton from './activityModules/utilities/FinalButton';
import Leaf from './activityModules/Leaf';
import WinnerList from './activityModules/WinnerList';
import NavigationBar from '../NavigationBar';
import LearningScreen from './LearningScreen';

const headerFontColor = '#2D82C6';
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


const LearningStackComponent = StackNavigator({
    LearningScreen: { screen: LearningScreen,
        navigationOptions: {
            headerLeft: <View></View>,
        }
     },
    //寫作新星
    Stars: { screen: Stars,             
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <View />,
        headerLeft: <TouchableOpacity 
                        onPress={() => navigation.navigate('LearningScreen')}
                        >
                        <View style={styles.headerLeft}>
                            <Icon 
                            name="angle-left" 
                            size={30} 
                            style={{marginRight: 5, marginLeft: 5}}
                            color={headerFontColor}>
                            </Icon>
                            <Text style={styles.headerLeftText}>返回</Text>
                        </View>
                    </TouchableOpacity>,
        headerTitle: 
            <View
            style={{
                flex: 1,
                alignItems: 'center'
            }}
            ><Text
               style={{
                   backgroundColor: 'white',
                   alignSelf: 'center',
                   textAlignVertical: 'center',
                   fontSize: 16, 
                   fontWeight: 'bold'
               }}
               onPress={() => {
                   
               }}> 寫作新星 </Text></View>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //寫作教室
    ClassRoom: { screen: ClassRoom,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <View></View>,
        headerLeft: <TouchableOpacity 
                        onPress={() => navigation.navigate('LearningScreen')}
                        >
                        <View style={styles.headerLeft}>
                            <Icon 
                            name="angle-left" 
                            size={30} 
                            style={{marginRight: 5, marginLeft: 5}}
                            color={headerFontColor}>
                            </Icon>
                            <Text style={styles.headerLeftText}>返回</Text>
                        </View>
                    </TouchableOpacity>,
        headerTitle: 
            <View
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}
            ><Text
               style={{
                   backgroundColor: 'white',
                   alignSelf: 'center',
                   textAlignVertical: 'center',
                   fontSize: 16, 
                   fontWeight: 'bold'
               }}
               onPress={() => {
                   
               }}> 寫作教室 </Text></View>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //批改作文
    MarkingEssay: { screen: MarkingEssay,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <View />,
        headerLeft: <TouchableOpacity 
                        onPress={() => navigation.navigate('LearningScreen')}
                        >
                        <View style={styles.headerLeft}>
                            <Icon 
                            name="angle-left" 
                            size={30} 
                            style={{marginRight: 5, marginLeft: 5}}
                            color={headerFontColor}>
                            </Icon>
                            <Text style={styles.headerLeftText}>返回</Text>
                        </View>
                    </TouchableOpacity>,
        headerTitle: 
        <View
            style={{
                flex: 1,
                alignItems: 'center'
            }}
        ><Text
               style={{
                   backgroundColor: 'white',
                   alignSelf: 'center',
                   textAlignVertical: 'center',
                   fontSize: 16, 
                   fontWeight: 'bold'
               }}
               onPress={() => {
                   
               }}> 批改作文 </Text></View>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //考前暖身
    WarmUp: { screen: WarmUp,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <View />,
        headerLeft: <TouchableOpacity 
                        onPress={() => navigation.navigate('LearningScreen')}
                        >
                        <View style={styles.headerLeft}>
                            <Icon 
                            name="angle-left" 
                            size={30} 
                            style={{marginRight: 5, marginLeft: 5}}
                            color={headerFontColor}>
                            </Icon>
                            <Text style={styles.headerLeftText}>返回</Text>
                        </View>
                    </TouchableOpacity>,
        headerTitle: 
        <View
            style={{
                flex: 1,
                alignItems: 'center'
            }}
        ><Text
               style={{
                   backgroundColor: 'white',
                   alignSelf: 'center',
                   textAlignVertical: 'center',
                   fontSize: 16, 
                   fontWeight: 'bold'
               }}
               onPress={() => {
                   
               }}> 考前暖身 </Text></View>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //閱讀練功房
    LevelUp: { screen: LevelUp,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <View></View>,
        headerLeft: <TouchableOpacity 
                        onPress={() => navigation.navigate('LearningScreen')}
                        >
                        <View style={styles.headerLeft}>
                            <Icon 
                            name="angle-left" 
                            size={30} 
                            style={{marginRight: 5, marginLeft: 5}}
                            color={headerFontColor}>
                            </Icon>
                            <Text style={styles.headerLeftText}>返回</Text>
                        </View>
                    </TouchableOpacity>,
        headerTitle: 
        <View
            style={{
                flex: 1,
                alignItems: 'center'
            }}
        ><Text
               style={{
                   backgroundColor: 'white',
                   alignSelf: 'center',
                   textAlignVertical: 'center',
                   fontSize: 16, 
                   fontWeight: 'bold'
               }}
               onPress={() => {
                   
               }}> 閱讀練功房 </Text></View>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //校園民調
    Poll: { screen: Poll,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <View />,
        headerLeft: <TouchableOpacity 
                        onPress={() => navigation.navigate('LearningScreen')}
                        >
                        <View style={styles.headerLeft}>
                            <Icon 
                            name="angle-left" 
                            size={30} 
                            style={{marginRight: 5, marginLeft: 5}}
                            color={headerFontColor}>
                            </Icon>
                            <Text style={styles.headerLeftText}>返回</Text>
                        </View>
                    </TouchableOpacity>,
        headerTitle: 
        <View
            style={{
                flex: 1,
                alignItems: 'center'
            }}
        ><Text
               style={{
                   backgroundColor: 'white',
                   alignSelf: 'center',
                   textAlignVertical: 'center',
                   fontSize: 16, 
                   fontWeight: 'bold'
               }}
               onPress={() => {
                   
               }}> 校園民調 </Text></View>,
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
            headerLeft: (<View></View>), 
            headerRight: (<View></View>),
            headerTitle: <View
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}
                ><Text
               style={{
                   textAlignVertical: 'center',
                   fontSize: 16, 
                   fontWeight: 'bold'
               }}
               onPress={() => {
                   
               }}> 學習 </Text></View>,
            headerStyle: { 
              height: 50,
              width: '100%',
              backgroundColor: 'white'
            },
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center'
            }
        }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  });

/*
//Wrap the StackNavigator inside a class will cause tabBarVisible config. inactivate
class ActivityStack extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return <LearningStackComponent screenProps={this.props}/>;
    }

}
*/

export default LearningStackComponent;