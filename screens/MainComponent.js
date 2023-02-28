import EventScreen from './EventScreen';
import EventInfoScreen from './EventInfoScreen';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

const EventNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName= 'Directory'
            screenOptions= {{
                headerStyle: {
                    backgroundColor: '#5637DD'
                },
                headerTintColor: '#fff'
            }}
        >
            <Stack.Screen 
                name= 'Directory'
                component= {EventScreen}
                options= {{ title: 'Events'}}
            />
            <Stack.Screen 
                name='EventInfo'
                component= {EventInfoScreen}
                options= {({route}) => ({
                    title: route.params.events.name
                })}
            />
        </Stack.Navigator>
    );
}

const Main = () => {
    return (
        <View 
            style={{ 
                flex: 1, 
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
            }}
        >
            <EventNavigator />
        </View>
    );
};

export default Main;
