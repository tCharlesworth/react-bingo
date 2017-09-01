import React, { Component } from 'react';
import { Provider, connect } from 'react-native';
import { createStore, applyMiddleware } from  'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import { addNavigationHelpers } from 'react-navigation';

import reducers from './reducers';
import Navigator from './config/navigator';

import { FirebaseConfig } from './config/config';
firebase.initializeApp(FirebaseConfig);


const Router = ({dispatch, nav}) => {
    <Navigator 
        navigation={addNavigationHelpers({
            dispatch, state: nav
        })} />
};

const mapStateToProps = (state) => {
    return { nav: state.nav };
};

const RouterWithNav = connect(mapStateToProps)(Router);



class App extends Component() {
    render() {
        const reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={ reduxStore }>
                <RouterWithNav />
            </Provider>
        );
    }
}

export default App;