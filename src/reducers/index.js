import {combineReducers} from 'redux'
import { POSTS_RECEIVED, SUBREDDIT_SELECTED } from '../actions'

//TODO

function activesub(state="aww", action) {
    switch (action.type) {
        case SUBREDDIT_SELECTED : 
            return action.subreddit
    }
    
    return state
}

function subredditdata(state={
                                "aww" : {
                                    posts : []
                                }
                            },
                       action) {
    switch(action.type) {
        case POSTS_RECEIVED : {
            return {
                        ...state,
                        [action.subreddit] : {
                            posts : action.posts,
                            last : action.last
                        },
                    }
        }
    }

    return state
}

const rootReducer = combineReducers({
    activesub,
    subredditdata,
})


export default rootReducer
