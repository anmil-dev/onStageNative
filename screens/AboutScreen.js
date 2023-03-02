import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

const AboutScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle= {{ margin: 20 }}>
                <Card.Title>FAQs</Card.Title>
                <Card.Divider />
                <Text style= {{fontWeight: 'bold'}}>Q: Where is OnStage located?</Text>
                <Text style= {{marginBottom: 20 }}>A: OnStage is located at 1 Live Street Annapolis, MD in the Music & Arts District. It is at the bottom of Live Street on the waterfront.</Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: How can I purchase tickets for OnStage Events?</Text>
                <Text style= {{marginBottom: 20 }}>A: Advanced tickets can be purchased online, through the OnStage App, or at our venue Box Office. Box Office hours are 12pm-7pm daily, or until 8pm on show nights. </Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: What is your refund policy?</Text>
                <Text style= {{marginBottom: 20 }}>A: All sales are final. No refunds unless a show is cancelled.</Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: How old do you have to be to attend shows at OnStage?</Text>
                <Text style= {{marginBottom: 20 }}>A: Unless otherwise posted, shows at the venue are all ages. Anyone under the age of 18 must be accomanied by an adult. </Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: Do I need ID to enter the venue?</Text>
                <Text style= {{marginBottom: 20 }}>A: An ID is required for those planning to purchase and/or drink alcohol. In compliance with MD law, anyone 21 and older who plans on drinking alcohol will need to show a valid, non-expired, government-issued photo ID. Anyone without proper ID, regardless of age, will not be permitted to buy, hold, or drink alcohol. ID is also required for Will Call pick-up and for Fan Club ticket verification.</Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: Does OnStage offer food?</Text>
                <Text style= {{marginBottom: 20 }}>A: Yes, we offer food and snacks for sale inside the venue. Click "here" for the full menu. </Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: How about drinks??</Text>
                <Text style= {{marginBottom: 20 }}>A: We have a selection of beer and wine along with your favorite spirits and non-alcoholic beverages. </Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: Do you have a coat check?</Text>
                <Text style= {{marginBottom: 20 }}>A: Yes, we do. The main coat check is located on the Main Street side of the venue, on the first floor</Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: What are the audio/video recording policies?</Text>
                <Text style= {{marginBottom: 20 }}>A: Most artists do not permit professional cameras, video, or audio recording. Photo and recording policies are at the artists discretion and change night to night. You may bring your camera with the understanding that you will likely need to check it with us for the duration of the show. There is a charge to store items at Coat Check</Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: Can I bring outside food/beverage?</Text>
                <Text style= {{marginBottom: 20 }}>A: No, outside food and drinks will not be allowed inside the venue.</Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: What is your smoking policy?</Text>
                <Text style= {{marginBottom: 20 }}>A:There is no smoking or vaping allowed inside the venue.</Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: Is there reentry?</Text>
                <Text style= {{marginBottom: 20 }}>A: No, there is no reentry once you have entered the venue for a show. </Text>
                <Card.Divider/>
                <Text style= {{fontWeight: 'bold'}}>Q: I have a condition / injury / handicap that requires special consideration. Is OnStage handicap accessible? How do I purchase ADA seating? </Text>
                <Text style= {{marginBottom: 20 }}>A: We do provide ADA services. Please contact our box office at 1-410-555-1234 for more information.</Text>
                <Card.Divider/>
            </Card>
        </ScrollView>
    )
};

export default AboutScreen;