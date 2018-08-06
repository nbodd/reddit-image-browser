

const fetchSubredditImages = (subreddit="aww", cb) => {
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occurred.', error)
    )
    .then(json =>
        json.data.children.map(child => child.data)
    )
    .then(posts => 
        posts.filter(post => post.post_hint==="image")
    )
    .then(image_posts => 
        image_posts.map(post => post.url)
    )
    .then(urls =>
        cb(urls)
    )
}

export default fetchSubredditImages