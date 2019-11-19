import React from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends React.Component {
    state = {}
    render() {
        return (
            <Card className="m-2" style={{ width: '15rem' }}>
                <Card.Header as="h5">Price: ${this.props.book.price}</Card.Header>
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted">ASIN: {this.props.book.asin}</Card.Footer>
            </Card>
        )
    }
}

export default SingleBook;