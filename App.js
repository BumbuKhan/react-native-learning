import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>Home screen</Text>
            </View>
        );
    }
} 

const RootStack = StackNavigator({
    Home: {screen: HomeScreen}
});

export default class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}