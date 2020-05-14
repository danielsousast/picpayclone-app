import React from 'react';
import { StatusBar } from 'react-native';

import Navigation from './navigation'

const App = () => {
    return (
        <>
            <Navigation />
            <StatusBar barStyle="light-content" backgroundColor="#000"/>
        </>
    )
}

export default App;