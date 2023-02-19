import { useState } from "react";
import { BANDS } from '../shared/bands';
import EventScreen from './EventScreen';

const Main = () => {
    const [bands, setBands] = useState(BANDS);

    return <EventScreen bands={bands} />
};

export default Main;
