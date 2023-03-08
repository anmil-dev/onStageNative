import EventScreen from './EventScreen';
import EventInfoScreen from './EventInfoScreen';
import { Platform, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#000000' }
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions= {screenOptions}>
            <Stack.Screen
                name='home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    )
}

const EventNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            initialRouteName= 'Events'
            screenOptions= { screenOptions }
        >
            <Stack.Screen 
                name= 'Events'
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

const AboutNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions= {screenOptions}>
            <Stack.Screen
                name='about'
                component={AboutScreen}
                options={{title: 'FAQs'}}
            />
        </Stack.Navigator>
    )
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions= {screenOptions}>
            <Stack.Screen
                name='contact'
                component={ContactScreen}
                options={{title: 'Contact & Directions'}}
            />
        </Stack.Navigator>
    )
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
                />
                <Drawer.Screen 
                    name= 'FAQs'
                    component= {AboutNavigator}
                />
                <Drawer.Screen 
                name= 'Contact & Directions'
                component= {ContactNavigator}
                />
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    },
    // drawerHeader: {
    //     backgroundColor: '#5637DD',
    //     height: 140,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     flex: 1,
    //     flexDirection: 'row'
    // },
    // drawerHeaderText: {
    //     color: '#fff',
    //     fontSize: 24,
    //     fontWeight: 'bold'
    // },
    // drawerImage: {
    //     margin: 10,
    //     height: 60,
    //     width: 60
    // }
});

export default Main;
