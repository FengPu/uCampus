import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TitleBar from '../tabDecorators/TitleBar';
import LevelSelector from './utilities/LevelSelector';
import ListItem from './utilities/ListItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLevel } from '../../../actions/index';

const grayBackground = 'gray';
const styles = {
    content: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    levels: {
        flex: 1.2,
        backgroundColor: grayBackground
    },
    regions: {
        flex: 4,
        backgroundColor: 'green'
    }
}
class Award extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if("awardLevel" in this.props.selectdLevel){
            //pass
        }else{
            
        }
        /*
        Using Spread Operator to propogate this.props to child component
        (We need this.props.navigate to operate stackNavigator)
        */
        return(
        <View style={{flex: 1}}>
            <View style={styles.content}>
                <View style={styles.levels}>
                  <LevelSelector />
                </View>
                <View style={styles.regions}>                
                  <Text>{JSON.stringify(this.props.selectdLevel.awardLevel)}</Text>
                  <ListItem {...this.props}/>
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
        selectdLevel: state.awardLevel
    };
  }
  
  export default connect(mapStateToProps, selectLevel)(Award);

  