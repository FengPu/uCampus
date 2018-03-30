import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectLevel } from '../../../../actions/index';

const grayBackground = 'gray';
const styles = {
    levels: {
        flex: 1,
        backgroundColor: grayBackground
    },
    levelTop: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: grayBackground,
      margin: 2,
      marginBottom: 1
    },
    levelBottom: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: grayBackground,
      margin: 2,
      marginTop: 1
    },
    level01:{
        flex: 1,
        backgroundColor: 'white',
        marginRight: 2
    },
    level02:{
        flex: 1,
        backgroundColor: 'white',
        marginRight: 2
    },
    level03:{
        flex: 1,
        backgroundColor: 'white'
    },
    level04:{
        flex: 1,
        backgroundColor: 'white',
        marginRight: 2
    },
    level05:{
        flex: 1,
        backgroundColor: 'white',
        marginRight: 2
    },
    level06:{
        flex: 1,
        backgroundColor: 'white'
    },
    regions: {
        flex: 4,
        backgroundColor: 'green'
    }
}

class LevelSelector extends Component{

    constructor(props){

        super(props);
        this.props.selectLevel('1');

    }

    render(){
        return(
            <View style={styles.levels}>
                  <View style={styles.levelTop}>
                    <TouchableOpacity 
                        style={styles.level01}
                        onPress={()=>{this.props.selectLevel('1')}}>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.level02}
                        onPress={()=>{this.props.selectLevel('2')}}>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.level03}
                        onPress={()=>{this.props.selectLevel('3')}}>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.levelBottom}>
                    <TouchableOpacity 
                        style={styles.level04}
                        onPress={()=>{this.props.selectLevel('4')}}>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.level05}
                        onPress={()=>{this.props.selectLevel('5')}}>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.level06}
                        onPress={()=>{this.props.selectLevel('6')}}>
                    </TouchableOpacity>
                  </View>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({ selectLevel }, dispatch);
  }
  
function mapStateToProps(state) {

    return {
        selectedLevel: state.selectedLevel
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(LevelSelector);