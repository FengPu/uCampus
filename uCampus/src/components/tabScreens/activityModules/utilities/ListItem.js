import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLevel } from '../../../../actions/index';

const styles = {
    content: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    levels: {
        flex: 1.2,
        backgroundColor: 'gray'
    },
    regions: {
        flex: 4,
        backgroundColor: 'green'
    }
}
class ListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let content = (<Text>123</Text>);
        if("awardLevel" in this.props.selectdLevel){
            //pass
        }else{
            
        }
        //this.props.selectdLevel.awardLevel
        return(
        <TouchableOpacity 
          onPress={()=>{this.props.navigation.navigate('Leaf', { title: 'alf', back: 'Award'})}}
        >
        <View>
            { content }
        </View>
        </TouchableOpacity>
        );
    }
}
function mapDispatchToProps(dispatch) {

    return bindActionCreators({ selectLevel }, dispatch);
  }
  
  
function mapStateToProps(state) {
    return {
        selectdLevel: state.awardLevel
    };
  }
  
  export default connect(mapStateToProps, selectLevel)(ListItem);

  