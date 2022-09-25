import React, { useState } from 'react';
import { Jumbotron } from 'reactstrap';
import { Carousel, CarouselCaption, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

export const JumbotronComponent = () => {

    var [activeIndex, setActiveIndex] = useState(0);
    var [animating, isAnimating] = useState(false);

    const onExiting = () => {
        console.log("onExiting - before isAnimating", animating)
        isAnimating({animating: true});
        console.log("onExiting - after isAnimating", animating)
    };

    const onExited = () => {
        console.log("onExit - before isAnimating", animating)
        isAnimating({animating: false});
        console.log("onExit - after isAnimating", animating)
    };

    const next = () => {
        // if (animating) {
        //     return;
        // }
        const nextIndex = activeIndex == items.length - 1 ? 0 : activeIndex + 1;
        // setActiveIndex({ activeIndex: nextIndex });
        setActiveIndex( activeIndex = nextIndex );
        console.log("In Next - " + activeIndex);
    };

    const previous = () => {
        // if (animating) {
        //     return;
        // }
        const nextIndex = activeIndex == 0 ? items.length - 1 : activeIndex - 1;
        // setActiveIndex({ activeIndex: nextIndex });
        setActiveIndex( activeIndex = nextIndex );
        console.log("in previous - nextIndex", nextIndex)
        
    };

    const goToIndex = (newIndex) => {
        // if (animating) {
        //     return;
        // }

        // setActiveIndex({ activeIndex: newIndex });
        setActiveIndex( activeIndex = newIndex );
    };




    const items = [
        {
            id: 0,
            caption: 'Mount Kinabalu',
            description: 'Malaysia | 8 pax',
            trekkingDate: '08.10.2022 - 13.10.2022',
            primarySrc: '/assets/images/mount-kinabalu.jpeg',
            secondarySrc: '/assets/images/mount-kinabalu-mobile.jpeg',
            cssId: 'carousel-caption-1',
            altText: 'Mount Kinabalu Promo'
        },
        {
            id: 1,
            caption: 'Rinjani National Park',
            description: 'Indonesia | 6 pax',
            trekkingDate: '08.12.2022 - 13.12.2022',
            primarySrc: '/assets/images/rinjani-national-park.jpg',
            secondarySrc: '/assets/images/rinjani-national-park-mobile.jpg',
            cssId: 'carousel-caption-2',
            altText: 'Mount Kinabalu Promo'
        }
    ]

    const carouselItems = items.map((item) => {
        console.log(item)
        return (
            <CarouselItem key={item.id}
                onExiting={() => onExiting()}
                onExited={() => onExited()}>
                <picture>
                    <source media="(max-width:575px)" srcSet={item.secondarySrc} />
                    <img className="img-fluid jumbotron-image" src={item.primarySrc} alt={item.altText} />
                </picture>
                <CarouselCaption id={item.cssId} className="carousel-caption" captionText={item.description} captionHeader={item.caption}>
                    <p>
                        <strong>{item.caption}</strong> <br/>
                        {item.description} <br/>
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
            <CarouselIndicators items={carouselItems} activeIndex={Number(activeIndex)} onClickHandler={() => goToIndex()} />
            {carouselItems}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => previous()} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={() => next()} />
        </Carousel>
    )
}

export default JumbotronComponent;