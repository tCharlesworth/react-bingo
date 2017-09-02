import React from 'react';
import { View, Text } from 'react-native';

const BingoSquare = (props) => {
    return (
        <View style={styles.containerStyles}>
            <Text style={styles.textStyles}>
                { this.props.text || 'SQUARE' }
            </Text>
        </View>
    );
}

const styles = {
    containerStyles: {
        flex: 1
    },
    textStyles: {
        fontSize: 12
    }
};


export default BingoSquare;