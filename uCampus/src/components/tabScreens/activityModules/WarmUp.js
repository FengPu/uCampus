import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SubjectItem from './utilities/SubjectItem';

class WarmUp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let config = {
            title: 'google', 
            back: 'WarmUp',
            pageUrl: 'https://www.google.com'
        }
        return(
            <View>
                <SubjectItem {...this.props} {...config}/>
                <Text>WarmUp</Text>
            </View>
        )
    }
}

export default WarmUp;