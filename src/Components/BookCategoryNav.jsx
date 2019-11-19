import React from 'react';
import { Nav } from 'react-bootstrap';

class BookCategoryNav extends React.Component {

    state = {}
    render() {
        var booksCategory = [
            { name: "Horror", id: "1" },
            { name: "History", id: "2" },
            { name: "Fantasy", id: "3" },
            { name: "Romance", id: "4" },
            { name: "Sci-Fi", id: "5" }
        ]
        return (
            <Nav justify variant="pills" defaultActiveKey="1">
                {booksCategory.map((category) =>
                    <Nav.Item category={category} key={category.id}>
                        <Nav.Link href={category.id}>{category.name}</Nav.Link>
                    </Nav.Item>
                )}              
            </Nav>
        )
    }
}

export default BookCategoryNav;