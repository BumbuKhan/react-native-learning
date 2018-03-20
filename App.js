import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeteng extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}</Text>
        );
    }
}

export default class LotsOfGreeteng extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeteng name="Gurban"/>
                <Greeteng name="Famil"/>
                <Greeteng name="Nurik"/>
            </View>
        );
    }
}