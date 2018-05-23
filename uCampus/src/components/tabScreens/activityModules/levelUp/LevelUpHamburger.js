import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hamburger from 'react-native-hamburger';
import { bindActionCreators } from 'redux';
import { setLevelUpHamburgerState } from '../../../../actions/index';


class LevelUpHamburger extends Component{
    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }
    render(){
        return (
        <Hamburger
            type="cross" 
            active={this.state.active}
            onPress={()=>{
                this.setState({active: !this.state.active})
                this.props.navigation.navigate('LevelUpRanking', { 
                    title: '排行榜', 
                    back: 'LevelUp'
                })
            }}/>
        )
    }

}


function mapDispatchToProps(dispatch) {

    return bindActionCreators({ setLevelUpHamburgerState }, dispatch);
  }
  
  
function mapStateToProps(state) {
    return {
        writingContext: state.writingContext
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LevelUpHamburger);