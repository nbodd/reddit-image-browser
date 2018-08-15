
export const SUBREDDIT_SELECTED = "SUBREDDIT_SELECTED"
export const subredditSelected = (subreddit) => ({
    type : SUBREDDIT_SELECTED,
    subreddit
})


export const POSTS_RECEIVED = "POSTS_RECEIVED"
export const postsReceived = (subreddit, posts) => ({
    type : POSTS_RECEIVED,
    subreddit,
    posts,
    last : posts && posts.length !== 0 ? posts[posts.length - 1].name : null
})


export function fetchSubredditImages(subreddit="aww") {
    return (dispatch, getState) => {
        
        if (getState().subredditdata[subreddit] && 
                getState().subredditdata[subreddit].posts.length !== 0)
        {
            dispatch(postsReceived(subreddit, getState().subredditdata[subreddit].posts))
            return
        }

        let url = "https://www.reddit.com/r/" + subreddit + ".json"
        dispatch(fetchImages(url, subreddit))
    }
}

export function fetchAdditionalSubredditImages(subreddit) {
    return (dispatch, getState) => {
        if (getState().subredditdata[subreddit])
        {
            if (getState().subreddit[subreddit].last)
            {
               let lastPostId = getState().subredditdata[subreddit].last
               let url = "https://www.reddit.com/r/" + subreddit + ".json?after=" + lastPostId
               dispatch(fetchImages(url, subreddit))
            }
        }
        else
        {
            dispatch(fetchSubredditImages(subreddit))
        }
    }
}


export function fetchImages(url, subreddit="aww") {
    return (dispatch, getState) => {
        return fetch(url)
        .then(
            response => response.json(),
            // Do not use catch, because that will also catch
            // any errors in the dispatch and resulting render,
            // causing a loop of 'Unexpected batch number' errors.
            // https://github.com/facebook/react/issues/6895
            error => console.log('An error occurred while fetching subreddit %s data. ', subreddit, error)
        )
        .then(json =>
            json.data.children.map(child => child.data)
        )
        .then(posts => 
            posts.filter(post => post.post_hint==="image" || post.post_hint==="link")
        )
        .then(image_posts => 
            image_posts.map(post => ({ url : post.url, hint : post.post_hint, name : post.name, permalink : post.permalink }))
        )
        .then(image_data => {
                dispatch(subredditSelected(subreddit))
                dispatch(postsReceived(subreddit, image_data))
            }
        )
    }
}

