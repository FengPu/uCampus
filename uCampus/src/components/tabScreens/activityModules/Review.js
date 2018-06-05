import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import TitleBar from '../tabDecorators/TitleBar';
import LevelSelector from './utilities/LevelSelector';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLevel } from '../../../actions/index';
import ListItem from './utilities/ListItem';


const grayBackground = '#F1F1F1';
const styles = {
    content: {
        flex: 1,
        backgroundColor: grayBackground
    },
    levels: {
        flex: 1.2,
        backgroundColor: grayBackground
    },
    regions: {
        flex: 4,
        backgroundColor: '#F1F1F1'
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
class Review extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let container = [];
        let commonTitle = '常見問題';
        let configObjs=[
            [
            {
                section: '國小中年級(第十屆聯合盃作文大賽-初賽題目)',
                data: [{
                    title: commonTitle,
                    back: 'Review',
                    itemTitle: '台北市初賽',
                    pageUrl: 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'
                },{
                    title: commonTitle,
                    back: 'Review',
                    itemTitle: '新竹市初賽',
                    pageUrl: 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'
                },{
                    title: commonTitle,
                    back: 'Review',
                    itemTitle: '台東市初賽',
                    pageUrl: 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'
                }]
            },
            {
                section: '國小中年級(第十屆聯合盃作文大賽-決賽題目)',
                data: [{
                    title: commonTitle,
                    back: 'Review',
                    itemTitle: '台中市決賽',
                    pageUrl: 'https://www.google.com'
                },{
                    title: commonTitle,
                    back: 'Review',
                    itemTitle: '宜蘭市決賽',
                    pageUrl: 'https://www.yahoo.com'
                },{
                    title: commonTitle,
                    back: 'Review',
                    itemTitle: '彰化市決賽',
                    pageUrl: 'https://www.bing.com'
                }]
            }
    ],
    [
        {
            section: '國小高年級(第十屆聯合盃作文大賽-初賽題目)',
            data: [{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台北市初賽',
                pageUrl: 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'
            },{
                title: commonTitle,
                back: 'Review',
                itemTitle: '高雄市初賽',
                pageUrl: 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'
            },{
                title: commonTitle,
                back: 'Review',
                itemTitle: '新竹市初賽',
                pageUrl: 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'
            }]
        },
        {
            section: '國小高年級(第十屆聯合盃作文大賽-決賽題目)',
            data: [{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台中市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            },{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台南市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            },{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台北市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            }]
        }
    ],
    [
        {
            section: '國七(第十屆聯合盃作文大賽-初賽題目)',
            data: [{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台北市初賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            },{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台南市初賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            }]
        },
        {
            section: '國七(第十屆聯合盃作文大賽-決賽題目)',
            data: [{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台北市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            },{
                title: commonTitle,
                back: 'Review',
                itemTitle: '新北市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            }]
        }
    ],
    [
        {
            section: '國八(第十屆聯合盃作文大賽-初賽題目)',
            data: [{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台北市初賽',
                pageUrl: 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'
            }]
        },
        {
            section: '國八(第十屆聯合盃作文大賽-決賽題目)',
            data: [{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台北市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            },{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台中市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            }]
        }
    ],
    [
        {
            section: '國九(第十屆聯合盃作文大賽-初賽題目)',
            data: [{
                title: '台北市初賽',
                back: 'Review',
                itemTitle: '台北市初賽',
                pageUrl: 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'
            }]
        },
        {
            section: '國九(第十屆聯合盃作文大賽-決賽題目)',
            data: [{
                title: commonTitle,
                back: 'Review',
                itemTitle: '花蓮市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            },{
                title: commonTitle,
                back: 'Review',
                itemTitle: '高雄市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            }]
        }
    ],
    [
        {
            section: '高中(第十屆聯合盃作文大賽-初賽題目)',
            data: [{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台北市初賽',
                pageUrl: 'https://blog.mozilla.org/security/files/2015/05/HTTPS-FAQ.pdf'
            }]
        },
        {
            section: '高中(第十屆聯合盃作文大賽-決賽題目)',
            data: [{
                title: commonTitle,
                back: 'Review',
                itemTitle: '台南市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            },{
                title: commonTitle,
                back: 'Review',
                itemTitle: '高雄市決賽',
                pageUrl: 'https://publish.get.com.tw/BookPre_pdf/51MG000320-2.pdf'
            }]
        }
    ]
    ]

    configObjs[Number(this.props.selectedLevel.awardLevel)-1].map(
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

        if("awardLevel" in this.props.selectedLevel){
            //pass
        }else{
            
        }
        return(
        <View style={{flex: 1}}>
            <View style={styles.content}>
                <View style={styles.levels}>
                  <LevelSelector />
                </View>
                
                <View style={styles.regions}>   
                <ScrollView>               
                  { container }
                  </ScrollView>
                </View>
                
            </View>
            
        </View>);
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ selectLevel }, dispatch);
  }
  
  
function mapStateToProps(state) {
    return {
        selectedLevel: state.awardLevel
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Review);

  