import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

class MyNav extends React.Component {
    state = {}
    render() {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="#home">Books app on React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.props.searchFunc}/>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MyNav;
