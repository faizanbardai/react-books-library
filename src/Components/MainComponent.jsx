import React from 'react';
import { Container } from 'react-bootstrap';
import MyFooter from './MyFooter';
import MyNav from './MyNav';
import Welcome from './Welcome';
import BooksSection from './BooksSection';


class MainComponent extends React.Component {
    var booksCategory = []
    state = {}
    render() {
        return (
            <Container>
                <MyNav />
                <Welcome />
                <BooksSection />
                <MyFooter />
            </Container>
        )
    }
}

export default MainComponent;