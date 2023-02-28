import RenderEvent from '../features/events/RenderEvent';

const EventInfoScreen = ({route}) => {
    const { events } = route.params;

    return <RenderEvent events={events} />;
};

export default EventInfoScreen;