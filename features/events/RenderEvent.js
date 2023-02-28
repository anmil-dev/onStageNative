import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderEvent = ({ events }) => {
    if (events) {
        return (
        <Card containerStyle={{ padding: 0 }}>
            <Card.Image source={events.image}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 20
                        }}
                    >
                        {events.name}
                    </Text>
                </View>
            </Card.Image>
            <Text style={{ margin: 20}}>
                {events.description}
            </Text>
        </Card>
        );
    };
    return <View />;
};

export default RenderEvent;