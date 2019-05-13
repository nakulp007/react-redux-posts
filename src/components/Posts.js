import React, { Component } from 'react';

import PropTypes from 'prop-types';

//connects redux store to component
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        //this will run when it receives property from state
        if(nextProps.newPost){
            //doing this straignt in reducer
            //this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

//get state from redux store and map it to props of this component
const mapStateToProps = state => ({
    //state.posts... posts is the name we have given to postReducer in combineReducers
    //after this the compnent should have a prop named posts that contains items
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);