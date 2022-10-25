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
import { storeWindowSize, postSearchQuery, toggleSocialTab, postComment, getThisUser, fetchPromos } from '../redux/ActionCreators';
import WelcomePage from './WelcomePageComponent';
import { timeoutsShape } from 'reactstrap';

// Temporary fix to replicate authenticated user (i.e John Doe)
const dummyUserName = { userName: 'johndoe93' };

const mapStateToProps = state => {
    return {
        welcome: state.welcome,
        promotions: state.promotions,
        treks: state.treks.TREKS,
        search: state.search,
        activeSocialTab: state.activeSocialTab,
        users: state.users,
        windowSize: state.windowSize,
        comments: state.comments
    }

}

const mapDispatchToProps = dispatch => ({

    // Thunk function to update search state in redux store
    postSearchQuery: (location, trekType, pax, country, region, dateFrom, dateTo) => dispatch(postSearchQuery(location, trekType, pax, country, region, dateFrom, dateTo)),

    // Stores currently-active Social Tab in Socials page
    toggleSocialTab: (tabNum) => dispatch(toggleSocialTab(tabNum)),

    // Store window size
    storeWindowSize: (windowSize) => dispatch(storeWindowSize(windowSize)),

    postComment: (author, profilePic, commentDate, reactions, text) => dispatch(postComment(author, profilePic, commentDate, reactions, text)),

    getThisUser: (dummyUserName) => dispatch(getThisUser(dummyUserName)),

    fetchPromos: () => { dispatch(fetchPromos()) }

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

}

const FetchDataRoutine = ({fetchPromos, getThisUser}) => {
    useEffect(()=>{
        fetchPromos();
        getThisUser(dummyUserName);
    },[]);
}

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
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
        // console.log(window.innerWidth);
        // console.log(document.readyState);
        // console.log(dummyUserName);
        // this.props.fetchPromos();
        // console.log("thisUser",this.props.users);
        // console.log("Checking state.promotion - ", this.props.promotions);

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
        console.log("Checking state.comments - ", this.props.comments);
        console.log("Checking state.promotions - ", this.props.promotions.promotions);
        console.log("Checking state.users - ", this.props.users);

        return (
            <div>
                <FetchDataRoutine fetchPromos = {this.props.fetchPromos} getThisUser ={this.props.getThisUser} />
                <Header windowSize={this.props.windowSize} isLoggedIn={this.state.isLoggedIn} />
                {this.state.isLoggedIn ?
                    <>
                        <Switch>
                            <Route path="/home" component={() =>
                                <HomePage isLoggedIn={this.state.isLoggedIn}
                                    treks={this.props.treks}
                                    search={this.props.search}
                                    postSearchQuery={this.props.postSearchQuery}
                                    windowSize={this.props.windowSize} />} />
                            <Route path="/socials" component={() =>
                                <Socials activeSocialTab={this.props.activeSocialTab}
                                    toggleSocialTab={this.props.toggleSocialTab}
                                    users={this.props.users}
                                    windowSize={this.props.windowSize}
                                    postComment={this.props.postComment}
                                    thisUser={this.props.users.thisUser} />} />
                            <Route path="/signin" component={() =>
                                <WelcomePage isLoggedIn={this.state.isLoggedIn} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </>
                    :
                    <>
                        <Switch>
                            <Route path="/signin" component={() => <WelcomePage isLoggedIn={this.state.isLoggedIn} />} />
                            <Route path="/home" component={() => <HomePage isLoggedIn={this.state.isLoggedIn} treks={this.props.treks} search={this.props.search} postSearchQuery={this.props.postSearchQuery} windowSize={this.props.windowSize} />} />
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