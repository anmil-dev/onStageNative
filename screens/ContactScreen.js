import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle= {{ margin: 20 }}>
                <Card.Title>Contact Information</Card.Title>
                <Card.Divider />
                <Text>1 Live Street</Text>
                <Text>Annapolis, MD 21401</Text>
                <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                <Text>Phone: 1-410-555-1234</Text>
                <Text>Email: events@OnStage.co</Text>
            </Card>
            <Card wrapperStyle= {{ margin: 20 }}>
                <Card.Title>Directions</Card.Title>
                <Card.Divider />
                <Text> Map API Here </Text>
            </Card>
        </ScrollView>
    )
};

export default ContactScreen;