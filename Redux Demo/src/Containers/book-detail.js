import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
    render() {
        if(!this.props.book)
        {
            return <div>Please select book get started.</div>;
        }
        return (
            <div>
                <h3>Details:- </h3>
                <div>title- {this.props.book.title}</div>
                <div>Pages- {this.props.book.page}</div>
                
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(MapStateToProps)(BookDetails);