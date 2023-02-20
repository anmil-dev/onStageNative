import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderEvent = ({ event }) => {
    if (event) {
        return (
        <Card containerStyle={{ padding: 0 }}>
            <Card.Image source={event.image}>
                <View style={{ justifyContent: 'center', flex: 1 }}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 20
                        }}
                    >
                        {event.name}
                    </Text>
                </View>
            </Card.Image>
            <Text style={{ margin: 20}}>
                {event.description}
            </Text>
        </Card>
        );
    };
    return <View />;
};

export default RenderEvent;