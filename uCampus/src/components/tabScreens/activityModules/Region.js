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
    }
}
class Region extends Component{
    render(){
        let container = [];
        let commonTitle = '常見問題';
        let configObjs=[
            {
                section: '北區',
                data: [{
                    title: '台北市初賽',
                    back: 'Region',
                    itemTitle: '台北市初賽',
                    pageUrl: 'https://ucampusapp.weebly.com/tryout_taipei.html'
                },{
                    title: '新北市初賽',
                    back: 'Region',
                    itemTitle: '新北市初賽',
                    pageUrl: 'https://www.yahoo.com'
                },{
                    title: '桃園初賽',
                    back: 'Region',
                    itemTitle: '桃園初賽',
                    pageUrl: 'https://www.bing.com'
                },{
                    title: '新竹初賽',
                    back: 'Region',
                    itemTitle: '新竹初賽',
                    pageUrl: 'https://www.bing.com'
                }]
            },
            {
                section: '中部',
                data: [{
                    title: '台中初賽',
                    back: 'Region',
                    itemTitle: '台中初賽',
                    pageUrl: 'https://www.google.com'
                },{
                    title: '南投初賽',
                    back: 'Region',
                    itemTitle: '南投初賽',
                    pageUrl: 'https://www.yahoo.com'
                },{
                    title: '雲林初賽',
                    back: 'Region',
                    itemTitle: '雲林初賽',
                    pageUrl: 'https://www.bing.com'
                },{
                    title: '嘉義初賽',
                    back: 'Region',
                    itemTitle: '嘉義初賽',
                    pageUrl: 'https://www.bing.com'
                }]
            },
            {
                section: '南部',
                data: [{
                    title: '台南初賽',
                    back: 'Region',
                    itemTitle: '台南初賽',
                    pageUrl: 'https://www.google.com'
                },{
                    title: '高雄初賽',
                    back: 'Region',
                    itemTitle: '高雄初賽',
                    pageUrl: 'https://www.yahoo.com'
                }]
            },
            {
                section: '東部',
                data: [{
                    title: '宜蘭初賽',
                    back: 'Region',
                    itemTitle: '宜蘭初賽',
                    pageUrl: 'https://www.google.com'
                },{
                    title: '花蓮初賽',
                    back: 'Region',
                    itemTitle: '花蓮初賽',
                    pageUrl: 'https://www.yahoo.com'
                }]
            }
    ]

    configObjs.map(
        (configObj, index)=>{
            container.push(<View style={styles.sectionStyle} key={'section'+index}>
                <Text>{configObj.section}</Text></View>);
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

export { Region };