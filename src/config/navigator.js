import React from 'react';
import { StackNavigator } from 'react-navigator';

import ActiveBoard from '../components/ActiveBoard';

const RootNavigator = StackNavigator({
    ActiveBoard: { screen: ActiveBoard, title: 'Active Board' },
}, { headerMode: 'none' });

export default RootNavigator;