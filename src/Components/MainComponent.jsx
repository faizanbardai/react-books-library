import React from 'react';
import MyFooter from './MyFooter';
import MyNav from './MyNav';
import Welcome from './Welcome';


class MainComponent extends React.Component {
    state = {}
    render() {
        return (
            <>
                <MyNav />
                <Welcome />
                <MyFooter />
            </>
        )
    }
}

export default MainComponent;