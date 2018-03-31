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
import { About, Admission, Books, Grade, Guess, QA, Region } from './activityModules';
import Award from './activityModules/Award';
import Review from './activityModules/Review';
import Leaf from './activityModules/Leaf';
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
    Leaf: { screen: Leaf,             
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                             title="123"
                             onPress={ () => {
                                } } />,
        headerLeft: <TouchableOpacity 
                        onPress={() => navigation.navigate(navigation.state.params.back)}
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
                   
               }}> {navigation.state.params.title} </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //關於比賽
    About: { screen: About,             
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                             title="123"
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
                   
               }}> 關於比賽 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //入場證 
    Admission: { screen: Admission,                 
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
                   
               }}> 入場證 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //得獎名單
    Award: { screen: Award,                 
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
                   
               }}> 得獎名單 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //作文專書
    Books: { screen: Books,                 
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
                   
               }}> 作文專書 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //成績
    Grade: { screen: Grade,                 
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
                   
               }}> 成績 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //考前猜猜
    Guess: { screen: Guess,                 
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
                   
               }}> 考前猜猜 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //常見問題 
    QA: { screen: QA,                 
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
                   
               }}> 常見問題 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //賽區資訊 
    Region: { screen: Region,                 
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
                   
               }}> 賽區資訊 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //題目回顧 
    Review: { screen: Review,                 
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
                   
               }}> 題目回顧 </Text>,
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

/*
//Wrap the StackNavigator inside a class will cause tabBarVisible config. inactivate
class ActivityStack extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return <ActivityStackComponent screenProps={this.props}/>;
    }

}
*/

export default ActivityStackComponent;