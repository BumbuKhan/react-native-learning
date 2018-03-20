import React, {Component} from 'react';
import {View} from 'react-native';

export default class FixedDimentions extends Component {
    render() {
        return(
            <View>
                <View style={{width: 100, height: 100, backgroundColor: 'blue'}}></View>
                <View style={{width: 150, height: 150, backgroundColor: 'red'}}></View>
                <View style={{width: 200, height: 200, backgroundColor: 'green'}}></View>
            </View>
        );
    }
}