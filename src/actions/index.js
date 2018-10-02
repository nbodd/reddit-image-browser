
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


export function fetchSubredditImages(subreddit="aww", refresh=false) {
    return (dispatch, getState) => {
        if (!refresh && getState().subredditdata[subreddit] && 
                getState().subredditdata[subreddit].posts.length !== 0)
        {
            dispatch(subredditSelected(subreddit))
            dispatch(postsReceived(subreddit, getState().subredditdata[subreddit].posts))
            return
        }

        let url = "https://www.reddit.com/r/" + subreddit + ".json"
        dispatch(fetchImages(url, subreddit))
    }
}

export function fetchAdditionalSubredditImages() {
    return (dispatch, getState) => {
        let subreddit = getState().activesub
        if (getState().subredditdata[subreddit])
        {
            let subdata = getState().subredditdata[subreddit]
            if (subdata.last)
            {
                let lastPostId = subdata.last
                let url = "https://www.reddit.com/r/" + subreddit + ".json?after=" + lastPostId
                dispatch(fetchImages(url, subreddit, subdata.posts))
            }
        }
        else
        {
            dispatch(fetchSubredditImages(subreddit))
        }
    }
}

export function fetchImages(url, subreddit="aww", prefixPosts=[]) {
    return (dispatch) => {
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
            image_posts.map(post => ({ url : post.url,
                                       title : post.title, 
                                       hint : post.post_hint,
                                       name : post.name,
                                       permalink : post.permalink }))
        )
        .then(image_data => {
                dispatch(subredditSelected(subreddit))

                let posts = [...prefixPosts, ...image_data]
                dispatch(postsReceived(subreddit, posts))
            }
        )
    }
}

