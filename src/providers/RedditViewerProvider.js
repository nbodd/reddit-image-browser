import React, { 
    useState,
    createContext, useContext,
    useEffect } from 'react'

import * as actions from '../actions/index'

const RedditViewerContext = createContext("RedditViewerContext");
export const useRedditViewer = () => useContext(RedditViewerContext);

export default function RedditViewerProvider({children}) {

    const [subReddit, setSubReddit] = useState("aww");
    const [posts, setPosts] = useState([]);
    
    const lastPost = (posts && posts.length !== 0) ? posts[posts.length - 1] : null;

    const replacePosts =  (newPosts = []) => {
        // console.log(newPosts);
        setPosts(newPosts);
    }

    const appendPosts = (newPosts = []) => setPosts([...posts, ...newPosts]);

    const getImagePosts = () => actions.fetchImages(subReddit, replacePosts);

    const fetchUserImagePosts = (user) => actions.fetchUserImagePosts(user, replacePosts);

    const providerValues = {
        subReddit,
        posts,
        changeSubReddit : (newSubReddit = "aww") => setSubReddit(newSubReddit),
        refreshSubReddit : getImagePosts,
        fetchMoreImages : () => actions.fetchAdditionalSubredditImages(subReddit, appendPosts, lastPost),
        fetchUserImagePosts,
    }

    useEffect(getImagePosts, [subReddit]);

    return <>
        <RedditViewerContext.Provider value={{...providerValues}}>
            {children}
        </RedditViewerContext.Provider>
    </>
};
