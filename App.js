import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>Home screen</Text>
                <Button onPress={() => this.props.navigation.navigate('Details')} title="Go to details"/>
            </View>
        );
    }
}

class DetailsScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>Details screen</Text>
            </View>
        );
    }
} 

const RootStack = StackNavigator(
    {
        Home: {screen: HomeScreen},
        Details: {screen: DetailsScreen}
    },
    {
        initialRouteName: 'Home'
    }
);

export default class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}