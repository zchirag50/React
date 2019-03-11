import React, { Component } from 'react';
import BookList from '../Containers/book-list'
import BookDetail from '../Containers/book-detail';

export default class App extends Component {
    render() {
        return (
            <div>
                <BookList />
                <BookDetail/>
            </div>
        );
    }
}