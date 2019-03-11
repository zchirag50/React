import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectBook} from '../actions/index';

class BookList extends Component {
    RenderList() {
        return (
            this.props.Books.map(book => {
                return (
                <li key={book.title} 
                    className='list-group-item '
                    onClick={ () =>  this.props.selectBook(book)}> {book.title} </li>)
            })
        )}
    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.RenderList()}
            </ul>
        );
    }
};

function mapStateToProp(state){
    return {
        Books: state.books
    }
}

function mapDispatchToProp(dispatch){
    return bindActionCreators({selectBook: selectBook} , dispatch);
}
export default connect(mapStateToProp, mapDispatchToProp)(BookList);