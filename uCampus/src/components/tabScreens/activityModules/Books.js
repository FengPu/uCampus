import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TitleBar from '../tabDecorators/TitleBar';
import LinkItem from './utilities/LinkItem';

const styles = {
    content: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    }
}
class Books extends Component{
    
    render(){
        let configObjs=[
            {
                imgSrc: '../../../../images/books/9.jpg',
                pageUrl: 'http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cargxuid_0=U010041698',
                itemTitle: '趨勢寫作圖表搞什麼',
                itemAuthor: '作者: 第九屆聯合盃 全國作文優勝同學',
                itemPublisher: '出版社: 聯合報股份有限公司'
            },
            {
                imgSrc: '../../../../../../../images/books/8.jpg',
                pageUrl: 'http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cateid_0=L_020_001_011_003&dc_cargxuid_0=U010200547&kdid=search',
                itemTitle: '自命不凡 寫作好手',
                itemAuthor: '作者: 第八屆聯合盃 全國作文優勝同學',
                itemPublisher: '出版社: 聯合報股份有限公司'
            },
            {
                imgSrc: '../../../../../images/books/7.jpg',
                pageUrl: 'http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cateid_0=L_018_004_008&dc_cargxuid_0=U007385112&kdid=search',
                itemTitle: '翻轉寫作大圖破',
                itemAuthor: '作者: 第七屆聯合盃 全國作文優勝同學',
                itemPublisher: '出版社: 聯合報股份有限公司'
            },
            {
                imgSrc: '../../../images/books/6.jpg',
                pageUrl: 'http://shopping.udn.com/mall/cus/cat/Cc1c02.do?dc_cateid_0=L_018_004_008&dc_cargxuid_0=U007385115&kdid=search',
                itemTitle: '進擊的寫手',
                itemAuthor: '作者: 第六屆聯合盃 全國作文優勝同學',
                itemPublisher: '出版社: 聯合報股份有限公司'
            }
    ]
        return(
        <View style={{flex: 1}}>
            <View style={styles.content}>
              {
                  configObjs.map((configObj, index)=>{
                      return(
                        <LinkItem{...configObj} key={index} />
                      );
                  })
              }
            </View>
        </View>);
    }
}

export { Books };