import * as React from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { SLIDER_WIDTH, ITEM_WIDTH } from '../features/Carousel/CarouselDimensions';
import { EVENTS } from '../shared/events';
import EventSlider from '../features/Carousel/EventSlider';

const HomeScreen = () => {
    const isCarousel = React.useRef(null);

    const renderEvent = ({ item, index }) => {
        return (
            <EventSlider data={item} />
        );
    };

    return (
        <>
            <ScrollView>
                <Card>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{ margin: 15 }}>
                            Carousel
                        </Text>
                    </View>
                </Card>
                <Carousel
                    loop
                    autoplay
                    ref={isCarousel}
                    data={EVENTS}
                    renderItem={renderEvent}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                />
            
        
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
});

export default HomeScreen;