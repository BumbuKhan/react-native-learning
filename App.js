import React, {Component} from 'react';
import {Text, FlatList, View} from 'react-native';

export default class FlatListBasic extends Component {
    render() {
        return (
            <View>
                <FlatList data={[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'Mike'},
                    {key: 'Bob'},
                ]} renderItem={({item}) => <Text>{item.key}</Text>} />
            </View>
        );
    }
}