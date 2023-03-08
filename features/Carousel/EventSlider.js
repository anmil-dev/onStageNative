

import { View, Image, Text, StyleSheet } from 'react-native';

const EventSlider = ({ data }) => {

    return (
        <View>
            <Image source={data.image} style={styles.eventCard} />
            <Text style={styles.header}>{data.name}</Text>
            <Text style={styles.body}>{data.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    eventCard: {
        height: 400,
        width: 815,
        borderRadius: 10,
        marginTop: 15
    },
    header: {
        textAlign: 'center',
        color: "#222",
        fontSize: 28,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20
    },
    body: {
        textAlign: 'center',
        color: "#222",
        fontSize: 18,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20
    }
    })

export default EventSlider;