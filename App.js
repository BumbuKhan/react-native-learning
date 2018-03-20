import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowingText: false
        };

        setInterval(() => {
            this.setState((prevState) => {
                return {isShowingText: !prevState.isShowingText};
            });
        }, 1000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';

        return (
            <Text>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='Blinking string 1'/>
                <Blink text='Blinking string 2'/>
                <Blink text='Blinking string 3'/>
            </View>
        );
    }
}