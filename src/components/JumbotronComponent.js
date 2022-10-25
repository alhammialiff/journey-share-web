import React, { useState } from 'react';
import { Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { Carousel, CarouselCaption, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import store from './../redux/configureStore';

// Get store state
const state = store.getState();

export const JumbotronComponent = ({ isLoggedIn }) => {

    var [activeIndex, setActiveIndex] = useState(0);
    var [animating, isAnimating] = useState(false);
    // const items = jumbotronHeader == undefined ? jumbotronHeader.WELCOME : jumbotronHeader.promotions;
    // console.log("In JumbotronComponent - jumbotronHeader", jumbotronHeader);
    // console.log("In JumbotronComponent - this.props.promotions", state.promotions);
    // console.log("In JumbotronComponent - this.props.welcome", state.welcome);
    const promoJumbotron = state.promotions.promotions;
    const welcomeJumbotron = state.welcome.WELCOME;
    const items = isLoggedIn? promoJumbotron: welcomeJumbotron;



    const onExiting = () => {
        // [Debug]
        // console.log("onExiting - before isAnimating", animating)
        isAnimating({ animating: true });
        // [Debug]
        // console.log("onExiting - after isAnimating", animating)
    };

    const onExited = () => {
        // [Debug]
        // console.log("onExit - before isAnimating", animating)
        isAnimating({ animating: false });
        // [Debug]
        // console.log("onExit - after isAnimating", animating)
    };

    const next = () => {

        const nextIndex = activeIndex == items.length - 1 ? 0 : activeIndex + 1;

        setActiveIndex(activeIndex = nextIndex);

    };

    const previous = () => {

        const nextIndex = activeIndex == 0 ? items.length - 1 : activeIndex - 1;

        setActiveIndex(activeIndex = nextIndex);


    };

    const goToIndex = (newIndex) => {

        setActiveIndex(activeIndex = newIndex);

    };

    // [Debug]
;
    // console.log("In JumbotronComponent - jumbotronHeader", jumbotronHeader.promotions);
    // console.log("In JumbotronComponent - promoJumbotron", promoJumbotron);
    // console.log("In JumbotronComponent - promoJumbotron & jumbotronHeader equal? ", promoJumbotron === jumbotronHeader.promotions);
    
    // console.log("In JumbotronComponent - items", items);


    const carouselItems = items.map((item) => {

        return (

            <CarouselItem key={item.id} onExiting={() => onExiting()} onExited={() => onExited()}>

                <picture>
                    <source media="(max-width:575px)" srcSet={item.secondarySrc} />
                    <img className="img-fluid jumbotron-image" src={item.primarySrc} alt={item.altText} />
                </picture>

                <CarouselCaption id={item.cssId} className="carousel-caption" captionText={item.description} captionHeader={item.caption}>
                    <p className='lead'>
                        <strong>{item.caption}</strong> <br />
                        {item.description} <br />
                        {item.trekkingDate}
                    </p>
                </CarouselCaption>

            </CarouselItem>

        );
    });


    return (
        // Carousel Component
        // If statement to display diff carousel between index and home page
        <Carousel activeIndex={Number(activeIndex)} previous={() => previous()} next={() => next()}>
            <CarouselIndicators items={carouselItems} activeIndex={Number(activeIndex)} onClickHandler={(e) => goToIndex(e)} />
            {carouselItems}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => previous()} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={() => next()} />
        </Carousel>
    )
}

const mapStateToProps = state => ({

    promotions: state.promotions,
    welcome: state.welcome,
    comments: state.comments

});

export default connect(mapStateToProps)(JumbotronComponent);