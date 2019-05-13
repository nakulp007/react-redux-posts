import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
    //all posts
    items: [],
    //single post that we get back when we submit
    item: {},
}


//action will always include a type
//if it has data then it will have a payload as well
export default function(state = initialState, action) {

    //for immutability we create new state
    //just ...state would spread and create new object
    //but if you have an array with objects inside it
    //it wouldn't spread inside objects, 
    //so need to create a new array and spread in the values manually
    let getCopyOfState = state => {
        return {
            ...state,
            items: [...state.items],
        }
    }

    switch(action.type){
        case FETCH_POSTS:
            //do something and then return
            state = getCopyOfState(state);
            state.items = action.payload;            
            return state;
        case NEW_POSTS:
            /*
            //can be added directly like this
            //but better to just use method for consistency and future compatibility
            state = {
                ...state,
                items: [action.payload, ...state.items],
                item: action.payload
            };
            */
            state = getCopyOfState(state);

            //add payload item to begining of array
            state.items.unshift(action.payload);
            state.item = action.payload;

            //console.log(state);
            return state;
        default: 
            return state;
    }
}