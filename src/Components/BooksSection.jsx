import React from 'react';
import SingleBook from './SingleBook';
import { Row } from 'react-bootstrap';



class BooksSection extends React.Component {
    state = {}
    render() {
        return (            
            <Row className="justify-content-center">
                {this.props.section.map((Book, index) => <SingleBook book={Book} key={index} />)};
            </Row>
        )
    }
}

export default BooksSection;
