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
import { About, Admission, Books, Grade, 
         Guess, QA, Region, RegionFinal
          } from './activityModules';
import DataList from './activityModules/DataList';
import Award from './activityModules/Award';
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
    ActivityScreen: { screen: LearningScreen,
        navigationOptions: {
            headerLeft: <Button
                             title=""
                             onPress={ () => {} } />,
        }
     },
     WinnerList: {  screen: WinnerList,             
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                             title=""
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
    Leaf: { screen: Leaf,             
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                             title=""
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
    DataList: { screen: DataList,             
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <FinalButton context={navigation.state.params.context} {...{navigation}}/>,
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
                             title=""
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
    //得獎名單 初賽
    Award: { screen: Award,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                        title="決賽"
                        onPress={ () => {
                            navigation.navigate('AwardFinal')
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
                   
               }}> 初賽得獎名單 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //得獎名單 決賽
    AwardFinal: { screen: AwardFinal,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                        title="初賽"
                        onPress={ () => {
                            navigation.navigate('Award')
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
                   
               }}> 決賽得獎名單 </Text>,
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
                             title=""
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
    //常見問題 
    AI: { screen: QA,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                             title=""
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
                   
               }}> 考前暖身 </Text>,
            headerStyle: { 
              height: 50,
              backgroundColor: 'white'
            },
            headerTitleStyle: {
               alignSelf: 'center'
            }
        }) 
    },
    //賽區資訊 初賽
    Region: { screen: Region,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                             title="決賽"
                             onPress={ () => {
                                navigation.navigate('RegionFinal')
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
    //賽區資訊 決賽
    RegionFinal: { screen: RegionFinal,                 
        navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        headerRight: <Button
                             title="初賽"
                             onPress={ () => {
                                navigation.navigate('Region')
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
                             title=""
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
                            <Text style={styles.headerLeftText}>返回</Text>
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
                   
               }}> 學習 </Text>,
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


export default LearningStackComponent;