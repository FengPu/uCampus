import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import TitleBar from '../tabDecorators/TitleBar';
import ListItem from './utilities/ListItem';

const styles = {
    content: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    sectionStyle: {
        height: 36,
        padding: 7,
        justifyContent: 'center'
    },
    sectionText: {
        fontWeight: 'bold',
        color: 'gray'
    }
}
class QA extends Component{
    
    render(){
        let container = [];
        let commonTitle = '常見問題';
        let configObjs=[
            {
                section: '報名',
                data: [
                    {
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q1:報名簡章如何索取？',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q1.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q2:報名截止日期？',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q2.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q3:如何報名？',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q3.html'
                    },
                    {
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q4: 為何要收報名費',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q4.html'
                    },
                    {
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q5:報名費用多少？',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q5.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q6:比賽分哪些區域？',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q6.html'
                    },
                    {
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q7: 請問網路報名一定得加入會員嗎？',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q7.html'
                    },
                    {
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q8:如何知道報名成功？',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q8.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q9:各區考試日期及時間為何？',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q9.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q10:是否可跨區報名？',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q10.html'
                    },
                    {
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q11：總決賽是否需要報名?',
                        pageUrl: 'https://ucampusapp.weebly.com/Apply_Q11.html'
                    }
            ]
            },
            {
                section: '試務',
                data: [
                    {
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q1：入場證（准考證）什麼時候寄發？',
                        pageUrl: 'https://ucampusapp.weebly.com/Test_Q1.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q2：如果未收到入場證怎麼辦？',
                        pageUrl: 'https://ucampusapp.weebly.com/Test_Q2.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q3：考試時未攜帶入場證怎麼辦？',
                        pageUrl: 'https://ucampusapp.weebly.com/Test_Q3.html'
                    },
                    {
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q4：成績單何時寄發？',
                        pageUrl: 'https://ucampusapp.weebly.com/Test_Q4.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q5：沒收到成績單怎麼辦？',
                        pageUrl: 'https://ucampusapp.weebly.com/Test_Q5.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q6：成績還會在哪裡公佈？',
                        pageUrl: 'https://ucampusapp.weebly.com/Test_Q6.html'
                    },
                    {
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q7：得獎作品著作權歸屬？',
                        pageUrl: 'https://ucampusapp.weebly.com/Test_Q7.html'
                    },{
                        title: commonTitle,
                        back: 'QA',
                        itemTitle: 'Q8：索取參賽作品?',
                        pageUrl: 'https://ucampusapp.weebly.com/Test_Q8.html'
                    }
            ]
            }
    ]

    configObjs.map(
        (configObj, index)=>{
            container.push(<View style={styles.sectionStyle} key={'section'+index}>
                <Text style={styles.sectionText}>{configObj.section}</Text></View>);
            configObj.data.map(
              (configObjData, index)=>{
                  container.push(<ListItem {...this.props} {...configObjData} key={configObj.section+index}/>);
              }
          )
        }
    )

        return(
        <View style={{flex: 1}}>
            <ScrollView style={styles.content}>
            { container }
            </ScrollView>
        </View>);
    }
}

export { QA };