
import { useState } from "react";
import { EVENTS } from '../shared/events';
import EventScreen from './EventScreen';


const Main = () => {
    const [events, setEvents] = useState(EVENTS);

    return <EventScreen events={events} />
};

export default Main;
