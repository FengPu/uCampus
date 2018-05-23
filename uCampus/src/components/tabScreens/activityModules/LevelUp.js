import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LevelUpItem from './utilities/LevelUpItem';

class LevelUp extends Component{
    constructor(props){
        super(props);
        this.getLevelUpData = this.getLevelUpData.bind(this);
    }
    getLevelUpData(){
       return[
                {
                    title: '如廁女權'

                },
                {
                    title: '南海新島...'

                }
            ]
    }
    render(){
        return(
            <View>
              { this.getLevelUpData().map(
                  (value, index) => {
                    return(<LevelUpItem {...this.props} title={value.title} key={index}/>)
                  }
              ) }
            </View>
        )
    }
}

export { LevelUp };