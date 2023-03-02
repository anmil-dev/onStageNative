import React from 'react'
import { View, StyleSheet } from 'react-native'
import CarouselCards from '../features/Carousel/CarouselCards'

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <CarouselCards />
        </View>
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