import React from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends React.Component {
    state = {}
    render() {
        return (
            <Card className="m-2" style={{ width: '10rem' }}>
                
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                
                </Card.Body>
                <Card.Footer className="text-muted">ASIN: {this.props.book.asin}</Card.Footer>
            </Card>
        )
    }
}

export default SingleBook;