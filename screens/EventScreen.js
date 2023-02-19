import { FlatList } from "react-native";
import { Avatar, ListItem } from 'react-native-elements';

const EventScreen = (props) => {
    const renderEventItem = ({ item: band }) => {
        return (
            <ListItem>
                <Avatar source={band.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{band.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {band.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };

    return (
        <FlatList 
            data={props.bands}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default EventScreen;