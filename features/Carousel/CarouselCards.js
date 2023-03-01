import React from 'react'
import { View } from "react-native"
import Carousel from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';
import EVENTS from '../../shared/events';

const CarouselCards = () => {
    const isCarousel = React.useRef(null)

    return (
        <View>
        <Carousel
            loop
            layout= {'default'}
            autoplay
            ref={isCarousel}
            data={EVENTS}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            useScrollView={true}
        />
        </View>
    )
    }

export default CarouselCards;