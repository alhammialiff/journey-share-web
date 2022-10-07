import React, { Component, useEffect } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import JumbotronComponent from './JumbotronComponent';
import { HomePage } from './HomeComponent';
import { Socials } from './SocialsComponent';
import { storeWindowSize, postSearchQuery, toggleSocialTab } from '../redux/ActionCreators';
import WelcomePage from './WelcomePageComponent';


const mapStateToProps = state => {
    return {
        welcome: state.welcome,
        promotions: state.promotions,
        treks: state.treks.TREKS,
        search: state.search,
        activeSocialTab: state.activeSocialTab,
        users: state.users,
        windowSize: state.windowSize
    }

}

const mapDispatchToProps = dispatch => ({

    // Thunk function to update search state in redux store
    postSearchQuery: (location, trekType, pax, country, region, dateFrom, dateTo) => dispatch(postSearchQuery(location, trekType, pax, country, region, dateFrom, dateTo)),

    // Stores currently-active Social Tab in Socials page
    toggleSocialTab: (tabNum) => dispatch(toggleSocialTab(tabNum)),

    // Store window size
    storeWindowSize: (windowSize) => dispatch(storeWindowSize(windowSize))

})

const WindowSizeObserver = ({ storeWindowSize }) => {

    useEffect(() => {
        console.log("useEffect - ", window.innerWidth);
        function handleResize() {
            console.log(window.innerWidth);
            storeWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);

    }, [window.innerWidth]);

    const checkWidth = () => {
        var vw = window.innerWidth;
        console.log('width ' + vw);

        // Hide username from navbar
        // if (vw < 765) {
        //     $('#my-account-username').hide();
        // } else {
        //     $('#my-account-username').show();
        // }

    }
}

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    }

    // Controls re-rendering of Main Component on child component changes
    shouldComponentUpdate(nextProps) {

        // [Debug]
        // console.log("shouldComponentUpdate- this.props.search.location",this.props.search.location);
        // console.log("shouldComponentUpdate- nextProps.search.location",nextProps.search.location);

        // If previous search state is not equal to current search state, do not render
        return this.props.search.location != nextProps.search.location ? false : true;

    }



    componentDidMount() {
        console.log(window.innerWidth);
        console.log(document.readyState);
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
        // console.log("Checking state.users - ", this.props.users);
        // console.log("Checking state.windowSize - ", this.props.windowSize);
        console.log("Checking state.windowSize - ", this.props.promotions);

        return (
            <div>
                {this.state.isLoggedIn ?
                    <>
                        <Header />
                        <Switch>
                            <Route path="/home" component={() => <HomePage jumbotronHeader={this.props.promotions} treks={this.props.treks} search={this.props.search} postSearchQuery={this.props.postSearchQuery} windowSize={this.props.windowSize} />} />
                            <Route path="/socials" component={() => <Socials activeSocialTab={this.props.activeSocialTab} toggleSocialTab={this.props.toggleSocialTab} users={this.props.users} windowSize={this.props.windowSize} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </>
                    :
                    <>
                        <Header />
                        <Switch>
                            <Route path="/signin" component={() => <WelcomePage jumbotronHeader={this.props.welcome} />} />
                            <Redirect to="/signin" />
                        </Switch>
                    </>
                }
                <Footer />
                <WindowSizeObserver storeWindowSize={this.props.storeWindowSize} />
            </div>


        );
    }
}





export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));