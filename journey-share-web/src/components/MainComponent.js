import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import JumbotronComponent from './JumbotronComponent';
import { HomePage } from './HomeComponent';

const mapStateToProps = state => {
    return {
        promotions: state.promotions
    }

}

const mapDispatchToProps = dispatch => ({
    // To add dispatchers along the way
    placeholder: "In mapDispatchToProps - "
})

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        //Header Component
        //Jumbotron Component
        //Switch
        //Route: Home
        //Route: Socials
        //Route: Trekking (TBD)
        //Route: Itinerary (TBD)
        //Footer



        return (
            <div>
                <Header />
                <HomePage promos = {this.props.promotions} />
                {/* <Route path="/home" component={}></Route> */}
                {/* <Route path="/socials" component={}></Route> */}
                <Footer />
            </div>


        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));