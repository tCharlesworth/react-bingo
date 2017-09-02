import React, { Component } from 'react';

import { View, Text } from 'react-native';
import BingoSquare from './BingoSquare';

class BingoBoard extends Component {
    render() {
        const { squareStyles, rowStyles } = styles;
        return (
            <View>
                <View style={rowStyles}>
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                </View>
                <View style={rowStyles}>
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                </View>
                <View style={rowStyles}>
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                </View>
                <View style={rowStyles}>
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                </View>
                <View style={rowStyles}>
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                    <BingoSquare />
                </View>
            </View>
        );
    }
}

const styles = {
    squareStyles: {
        flex: 1
    },
    rowStyles: {
        flexDirection: 'row'
    }
};

export default BingoBoard;