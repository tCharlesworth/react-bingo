import React, { Component } from 'react';

import { View } from 'react-native';
import BingoBoard from './BingoBoard';

class ActiveBoard extends Component {
    render() {
        return (
            <View>
                <BingoBoard />
            </View>
        );
    }
}

export default ActiveBoard;