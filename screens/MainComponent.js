import EventScreen from './EventScreen';
import EventInfoScreen from './EventInfoScreen';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#000000' }
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions= {screenOptions}>
            <Stack.Screen
                name='home'
                component={HomeScreen}
                options={{title: 'Home'}}
            />
        </Stack.Navigator>
    )
}

const EventNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName= 'Directory'
            screenOptions= { screenOptions }
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
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen 
                    name= 'Home'
                    component= {HomeNavigator}
                    options={{title: 'Home' }}
                />
                <Drawer.Screen 
                    name= 'Events'
                    component= {EventNavigator}
                    options={{title: 'Events' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;
