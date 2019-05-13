import { FETCH_POSTS, NEW_POSTS } from './types';

export const fetchPosts = () => dispatch => {
    //same as  return function(dispatch){

    //thunk allows us to call the dispatch function directly
    //so we can make asyncronous request

    //whenever we want to send data, we call dispatch
    //it will contain type and payload

    //action is plain javascript with type and optional payload, error and meta
    /*
    {
        type: string;
        payload?: any;
        meta?: any;
        error?: boolean;
    }
    */

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
            type: NEW_POSTS,
            payload: post
        }));
}