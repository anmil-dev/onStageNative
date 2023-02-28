import { FlatList, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useState } from 'react';
import { EVENTS } from '../shared/events'

const EventScreen = ({navigation}) => {
    const [events, setEvents] = useState(EVENTS);

    const renderEventItem = ({ item: events }) => {
        return (
            <ListItem onPress={() => navigation.navigate('EventInfo', {events})}>
                <Avatar source={events.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{events.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {events.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList 
            data={events}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default EventScreen;