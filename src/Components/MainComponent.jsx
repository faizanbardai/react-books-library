import React from 'react';
import { Container } from 'react-bootstrap';
import MyFooter from './MyFooter';
import MyNav from './MyNav';
import Welcome from './Welcome';
import BooksSection from './BooksSection';
// import BookCategoryNav from './BookCategoryNav';
import HorrorBooks from "../data/horror.json"


class MainComponent extends React.Component {
    search = (e) => {
        console.log(e.target.value)
        this.setState({ searchKeyword: e.target.value })
    }
    state = {
        searchKeyword: ""
    }
    render() {

        return (

            <Container>
                <MyNav searchFunc={this.search}/>
                <Welcome />
                {/* <BookCategoryNav /> */}
                <BooksSection section={HorrorBooks.filter(Book => Book.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase()))} />
                <MyFooter />
            </Container>
        )
    }
}

export default MainComponent;