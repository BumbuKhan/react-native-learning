import React, {Component} from 'react';
import {Image} from 'react-native';

export default class App extends Component {
    render() {
        let picture = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

        return (
            <Image source={picture} style={{width: '100%', height: 200}}/>
        )
    }
}