import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class LotsOfStyle extends Component {
    render() {
        return(
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.blue}>just blue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    red: {
        color: 'red',
    },
    blue: {
      color: 'blue',
    },
    bigblue: {
        color: 'blue',
        fontSize: 30,
        fontWeight: 'bold'
    }
});