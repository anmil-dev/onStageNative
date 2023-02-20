import { FlatList, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const EventScreen = (props) => {
    const renderEventItem = ({ item: event }) => {
        return (
            <ListItem onPress={() => props.onPress(event.id)}>
                <Avatar source={event.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{event.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {event.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
    return (
        <FlatList 
            data={props.events}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default EventScreen;