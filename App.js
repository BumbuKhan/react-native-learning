import React, {Component} from 'react';
import {View} from 'react-native';

export default class FixedDimentions extends Component {
    render() {
        return(
            // we could also set {width: 500} for the parent View
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'blue'}}></View>
                <View style={{flex: 2, backgroundColor: 'red'}}></View>
                <View style={{flex: 3, height: 200, backgroundColor: 'green'}}></View>
            </View>
        );
    }
}