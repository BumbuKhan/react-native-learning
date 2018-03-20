import React, {Component} from 'react';
import {View} from 'react-native';

export default class MyComponent extends Component {
    render() {
        return (
            // flexDirection is defaulted by 'column'
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
                <View style={{width: 50, height: 50, backgroundColor: 'green'}}></View>
            </View>
        );
    }
}