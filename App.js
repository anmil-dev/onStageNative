import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet } from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <Main />
        </NavigationContainer>
);
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
});

