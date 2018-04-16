import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
                data: [{
                    title: commonTitle,
                    back: 'QA',
                    itemTitle: 'Q1',
                    pageUrl: 'https://www.google.com'
                },{
                    title: commonTitle,
                    back: 'QA',
                    itemTitle: 'Q2',
                    pageUrl: 'https://www.yahoo.com'
                },{
                    title: commonTitle,
                    back: 'QA',
                    itemTitle: 'Q3',
                    pageUrl: 'https://www.bing.com'
                },
                {
                    title: commonTitle,
                    back: 'QA',
                    itemTitle: 'Q4: 為何要收報名費',
                    pageUrl: 'https://ucampusapp.weebly.com/Apply_Q4.html'
                }
            ]
            },
            {
                section: '試務',
                data: [{
                    title: commonTitle,
                    back: 'QA',
                    itemTitle: 'QA4',
                    pageUrl: 'https://www.google.com'
                },{
                    title: commonTitle,
                    back: 'QA',
                    itemTitle: 'QA5',
                    pageUrl: 'https://www.yahoo.com'
                },{
                    title: commonTitle,
                    back: 'QA',
                    itemTitle: 'Q4: 成績單何時寄發?',
                    pageUrl: 'https://ucampusapp.weebly.com/Test_Q4.html'
                }]
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
            <View style={styles.content}>
            { container }
            </View>
        </View>);
    }
}

export { QA };