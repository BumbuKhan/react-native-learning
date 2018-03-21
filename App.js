import React, {Component} from 'react';
import {View, Button, Alert} from 'react-native';

export default class ButtonComponent extends Component {
    render() {
        return(
            <View style={{padding: 10}}>
                <Button onPress={() => {
                    Alert.alert('The button has been pressed');
                }} title="Press me" />
            </View>
        );
    }
}