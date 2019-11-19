import React from 'react';
import SingleBook from './SingleBook';
import { Row } from 'react-bootstrap';
import HorrorBooks from "../data/horror.json"


class BooksSection extends React.Component {
    state = {}
    render() {
        return (
            <>
                <h3>Horror</h3>
                <Row className="justify-content-center">
                    {HorrorBooks.map((Book, index) => <SingleBook book = {Book} key={index}/>)};
                </Row>
                
            </>
        )
    }
}

export default BooksSection;
