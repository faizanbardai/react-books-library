import React from 'react'
import { Jumbotron } from 'react-bootstrap';

class Welcome extends React.Component {
    state = {}
    render() {
        return (
            <Jumbotron>
                <h1>Books</h1>
                <p>
                    Fill your appetite today with a new book!
                </p>
            </Jumbotron>
        )
    }
}

export default Welcome;