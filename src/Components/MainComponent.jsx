import React from 'react';
import { Container } from 'react-bootstrap';
import MyFooter from './MyFooter';
import MyNav from './MyNav';
import Welcome from './Welcome';
import BooksSection from './BooksSection';
import BookCategoryNav from './BookCategoryNav';


class MainComponent extends React.Component {
    
    state = {}
    render() {
        
        return (
            
            <Container>
                <MyNav />
                <Welcome />
                <BookCategoryNav />
                <BooksSection />
                <MyFooter />
            </Container>
        )
    }
}

export default MainComponent;