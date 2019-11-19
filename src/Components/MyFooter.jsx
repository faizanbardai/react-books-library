import React from 'react';
import { Navbar } from 'react-bootstrap';

class MyFooter extends React.Component {
    state = {}
    render() {
        return (
            <Navbar bg="light" fixed="bottom" expand="lg">
                <Navbar.Brand href="#home">&copy;2019</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="https://github.com/faizanbardai">FayJu</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MyFooter;