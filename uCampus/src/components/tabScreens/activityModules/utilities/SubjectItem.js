import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = {
    content: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    item: {
        height: 56,// / PixelRatio.get(),
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        padding: 8,// / PixelRatio.get(),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 1,// / PixelRatio.get(),
        marginBottom: 1,// / PixelRatio.get(),
    },
    itemTitle: {
        fontSize: 14
    }
}

class SubjectItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let content = <Text>作文</Text>
        return(
            <TouchableOpacity 
                onPress={
                    ()=>{
                    this.props.navigation.navigate('Leaf', { 
                        title: this.props.title, 
                        back: this.props.back,
                        pageUrl: this.props.pageUrl
                        })
                    }
                    }
                >
                <View style={styles.item}>
                    { content }
                    <Icon name='angle-right' size={30} color='gray' />
                </View>
            </TouchableOpacity>
        )
    }
}

export default SubjectItem;