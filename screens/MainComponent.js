
import { useState } from 'react';
import { EVENTS } from '../shared/events';
import EventScreen from './EventScreen';
import { View } from 'react-native';
import EventInfoScreen from './EventInfoScreen';


const Main = () => {
    const [events, setEvents] = useState(EVENTS);
    const [selectedEventId, setSelectedEventId] = useState();

    return (
        <View style={{ flex: 1 }}>
            <EventScreen 
                events={events}
                onPress={(eventId) => setSelectedEventId(eventId)}
                />
            <EventInfoScreen
                event={
                    events.filter(
                        (event) => event.id === selectedEventId
                    )[0]
                }
            />
        </View>
    );
};

export default Main;
