import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { bindActionCreators } from 'redux';
import { setLevelUpHamburgerState } from '../../../../actions/index';
import LevelUpQuestionItem from './LevelUpQuestionItem';

const identationLeft = 20;
const styles = {
    page: {
        display: 'flex',
        flex: 1
    },
    scoreBar: {

    },
    contentArea: {
        backgroundColor: 'white'
    },
    statisticsBar: {
        height: 56,
        width: '100%',
        backgroundColor: '#F1F1F1',
        display: 'flex',
        alignItems: 'flex-start',
        paddingLeft: identationLeft,
        justifyContent: 'center'
    },
    statisticsText: {
        fontWeight: 'bold',
        color: 'gray'
    },
    questionTitleArea: {
       margin: identationLeft
    },
    questionTitle: {
       fontWeight: 'bold'
    },
    questionContentArea: {
        marginLeft: identationLeft,
        marginRight: identationLeft,
        marginBottom: identationLeft
    },
    questionContent: {

    },
    questionItem: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionSubmit: {
        width: 150,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#2D82C6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    questionSubmitText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    questionSubmitArea: {

        height: 150,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    }
}
const ansN = 3;
const rightN = 0;
const mockAnsweredData = [
    {
        question: '本文稱小光是星星的孩子, 是因為小光患有:',
        options: ['恐慌症','強迫症','自閉症','憂鬱症'],
        correctAnswer: 1,
        userAnswer: 2,
        answered: true
    },
    {
        question: '星星的孩子會有以下哪些情況,所以需要大家的體諒與關心?(1)懂的察言觀色(2)口語表達不清楚(3)很容易有安全感(4)害怕與陌生人接觸(5)對自己的習慣相當堅持',
        options: ['(1)(2)(3)', '(1)(2)(4)', '(2)(4)(5)', '(3)(4)(5)'],
        correctAnswer: 2,
        userAnswer: 2,
        answered: true
    },
    {
        question: '下列何者不是本文的寫作目的',
        options: ['A','B','C','D'],
        correctAnswer: 3,
        userAnswer: 0,
        answered: true
    }
];
const mockUnansweredData = [
    {
        question: '本文稱小光是星星的孩子, 是因為小光患有:',
        options: ['恐慌症','強迫症','自閉症','憂鬱症'],
        correctAnswer: 1,
        userAnswer: 2,
        answered: false
    },
    {
        question: '星星的孩子會有以下哪些情況,所以需要大家的體諒與關心?(1)懂的察言觀色(2)口語表達不清楚(3)很容易有安全感(4)害怕與陌生人接觸(5)對自己的習慣相當堅持',
        options: ['(1)(2)(3)', '(1)(2)(4)', '(2)(4)(5)', '(3)(4)(5)'],
        correctAnswer: 2,
        userAnswer: 2,
        answered: false
    },
    {
        question: '下列何者不是本文的寫作目的',
        options: ['A','B','C','D'],
        correctAnswer: 3,
        userAnswer: 0,
        answered: false
    }
];
class LevelUpAnsweredQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }
    render(){
        return (
            <View style={styles.page}>
                <View style={styles.statisticsBar}>
                <Text style={styles.statisticsText}> 題數: {ansN} {'  '} 答對: {rightN} </Text>
                </View>
                <ScrollView style={styles.contentArea}>
                
                <View style={styles.questionTitleArea}>
                    <Text style={styles.questionTitle}>title</Text>
                </View>

                <View style={styles.questionContentArea}>

                    <Text>  Apple Online Store
                            你可前往 Apple Online Store 購買 Apple 硬體、軟體與第三方配件產品。若要透過電話購買，請於週一至週五上午 9 時至晚上 9 時，週六及週日上午 10 時至晚上 9 時，致電 Apple Store 客戶服務中心 0800-020-021。

                            若要查看訂單最新狀態及變更你的 Apple Online Store 訂單，請瀏覽訂單狀態網頁。你也可於週一至週五上午 9 時至晚上 9 時，週六及週日上午 10 時至晚上 9 時，致電 Apple Store 客戶服務中心 0800-020-021，或瀏覽線上輔助說明，以取得進一步資訊。

                            Apple 直營店
                            到臨近的 Apple 直營店體驗數位生活方式，並查詢直營店的營業時間及聯絡資訊。

                            尋找 Apple 授權經銷商
                            使用我們的經銷商查詢器，來尋找台灣的 Apple 授權經銷商。

                            Apple 授權經銷商為各種組織團體提供業界專業知識、多平台服務，與以 Mac 為基礎的解決方案。
                            Apple Online Store
                            你可前往 Apple Online Store 購買 Apple 硬體、軟體與第三方配件產品。若要透過電話購買，請於週一至週五上午 9 時至晚上 9 時，週六及週日上午 10 時至晚上 9 時，致電 Apple Store 客戶服務中心 0800-020-021。

                            若要查看訂單最新狀態及變更你的 Apple Online Store 訂單，請瀏覽訂單狀態網頁。你也可於週一至週五上午 9 時至晚上 9 時，週六及週日上午 10 時至晚上 9 時，致電 Apple Store 客戶服務中心 0800-020-021，或瀏覽線上輔助說明，以取得進一步資訊。

                            Apple 直營店
                            到臨近的 Apple 直營店體驗數位生活方式，並查詢直營店的營業時間及聯絡資訊。

                            尋找 Apple 授權經銷商
                            使用我們的經銷商查詢器，來尋找台灣的 Apple 授權經銷商。

                            Apple 授權經銷商為各種組織團體提供業界專業知識、多平台服務，與以 Mac 為基礎的解決方案。
                            Apple Online Store
                            你可前往 Apple Online Store 購買 Apple 硬體、軟體與第三方配件產品。若要透過電話購買，請於週一至週五上午 9 時至晚上 9 時，週六及週日上午 10 時至晚上 9 時，致電 Apple Store 客戶服務中心 0800-020-021。

                            若要查看訂單最新狀態及變更你的 Apple Online Store 訂單，請瀏覽訂單狀態網頁。你也可於週一至週五上午 9 時至晚上 9 時，週六及週日上午 10 時至晚上 9 時，致電 Apple Store 客戶服務中心 0800-020-021，或瀏覽線上輔助說明，以取得進一步資訊。

                            Apple 直營店
                            到臨近的 Apple 直營店體驗數位生活方式，並查詢直營店的營業時間及聯絡資訊。

                            尋找 Apple 授權經銷商
                            使用我們的經銷商查詢器，來尋找台灣的 Apple 授權經銷商。

                            Apple 授權經銷商為各種組織團體提供業界專業知識、多平台服務，與以 Mac 為基礎的解決方案。
                            Apple Online Store
                            你可前往 Apple Online Store 購買 Apple 硬體、軟體與第三方配件產品。若要透過電話購買，請於週一至週五上午 9 時至晚上 9 時，週六及週日上午 10 時至晚上 9 時，致電 Apple Store 客戶服務中心 0800-020-021。

                            若要查看訂單最新狀態及變更你的 Apple Online Store 訂單，請瀏覽訂單狀態網頁。你也可於週一至週五上午 9 時至晚上 9 時，週六及週日上午 10 時至晚上 9 時，致電 Apple Store 客戶服務中心 0800-020-021，或瀏覽線上輔助說明，以取得進一步資訊。

                            Apple 直營店
                            到臨近的 Apple 直營店體驗數位生活方式，並查詢直營店的營業時間及聯絡資訊。

                            尋找 Apple 授權經銷商
                            使用我們的經銷商查詢器，來尋找台灣的 Apple 授權經銷商。

                            Apple 授權經銷商為各種組織團體提供業界專業知識、多平台服務，與以 Mac 為基礎的解決方案。
                    </Text>
                
                </View>

                <View style={styles.questionItem}>

                   {mockAnsweredData.map(
                       function(question, index){
                           return <LevelUpQuestionItem key={index} {...question}></LevelUpQuestionItem>
                       }
                   )}

                
                </View>
                <View style={styles.questionSubmitArea}>
                    <TouchableOpacity style={styles.questionSubmit}
                    onPress={
                        ()=>{
                            Alert.alert(
                                '答案不對喔, 請再接再厲',
                                '',
                                [
                                  {text: '確定', onPress: () => console.log('OK Pressed')},
                                ],
                                { cancelable: false }
                              )
                        }
                    }>
                    <Text style={styles.questionSubmitText}>作答</Text>
                    </TouchableOpacity>
                </View>

                </ScrollView>
            </View>
        )
    }

}


function mapDispatchToProps(dispatch) {

    return bindActionCreators({ setLevelUpHamburgerState }, dispatch);
  }
  
  
function mapStateToProps(state) {
    return {
        writingContext: state.writingContext
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LevelUpAnsweredQuestion);