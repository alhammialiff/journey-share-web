import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Footer from './FooterComponent';

class MainComponent extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            //Header Component
            //Jumbotron Component
            //Switch
                //Route: Home
                //Route: Socials
                //Route: Trekking (TBD)
                //Route: Itinerary (TBD)
            //Footer
            <Footer/>
            
        );
    }
}

export default MainComponent;