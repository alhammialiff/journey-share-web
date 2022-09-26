import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import JumbotronComponent from './JumbotronComponent';
import { HomePage } from './HomeComponent';
import { postSearchQuery } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        promotions: state.promotions,
        treks: state.treks.TREKS,
        search: state.search
    }

}

const mapDispatchToProps = dispatch => ({
    // To add dispatchers along the way
    postSearchQuery: (location, trekType, pax, country, region, dateFrom, dateTo) => dispatch(postSearchQuery(location, trekType, pax, country, region, dateFrom, dateTo))
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

        console.log("Checking state.search - ", this.props.search);

        return (
            <div>
                <Header />
                <HomePage promos={this.props.promotions} treks={this.props.treks} search={this.props.search} postSearchQuery={this.props.postSearchQuery} />
                {/* <Route path="/home" component={}></Route> */}
                {/* <Route path="/socials" component={}></Route> */}
                <Footer />
            </div>


        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));