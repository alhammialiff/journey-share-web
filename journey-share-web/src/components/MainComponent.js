import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import JumbotronComponent from './JumbotronComponent';
import { HomePage } from './HomeComponent';
import { Socials } from './SocialsComponent';
import { postSearchQuery, toggleSocialTab } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        promotions: state.promotions,
        treks: state.treks.TREKS,
        search: state.search,
        activeSocialTab: state.activeSocialTab,
        users: state.users
    }

}

const mapDispatchToProps = dispatch => ({

    // Thunk function to update search state in redux store
    postSearchQuery: (location, trekType, pax, country, region, dateFrom, dateTo) => dispatch(postSearchQuery(location, trekType, pax, country, region, dateFrom, dateTo)),
    
    // Stores currently-active Social Tab in Socials page
    toggleSocialTab: (tabNum) => dispatch(toggleSocialTab(tabNum))

})

class MainComponent extends Component {
    constructor(props) {
        super(props);
    }

    // Controls re-rendering of Main Component on child component changes
    shouldComponentUpdate(nextProps){

        // [Debug]
        // console.log("shouldComponentUpdate- this.props.search.location",this.props.search.location);
        // console.log("shouldComponentUpdate- nextProps.search.location",nextProps.search.location);
        
        // If previous search state is not equal to current search state, do not render
        return this.props.search.location != nextProps.search.location? false: true;
        

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

        // [Debug]
        // console.log("Checking state.search - ", this.props.search);
        // console.log("Checking state.activeSocialTab - ", this.props.activeSocialTab);
        console.log("Checking state.users - ", this.props.users);

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={() => <HomePage promos={this.props.promotions} treks={this.props.treks} search={this.props.search} postSearchQuery={this.props.postSearchQuery} />} />
                    <Route path="/socials" component={() => <Socials activeSocialTab = { this.props.activeSocialTab } toggleSocialTab = {this.props.toggleSocialTab} users = {this.props.users} />} />
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>


        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));