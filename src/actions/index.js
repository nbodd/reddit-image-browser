
const fetchImagesHelper = (url, fetchSuccessCb) => {
    fetch(url)
        .then(response => response.json())
        .then(json => json.data.children.map(child => child.data))
        .then(posts => posts.filter(post => post.post_hint==="image" || post.post_hint==="link"))
        .then(image_posts => fetchSuccessCb(image_posts))
        .catch(error => console.log('An error occurred while fetching subreddit %s data. ', url, error))
}


export function fetchImages(subreddit="aww", cb = f => f) {
    let url = "https://www.reddit.com/r/" + subreddit + ".json?limit=50";
    fetchImagesHelper(url, cb);
}

export function fetchAdditionalSubredditImages(subreddit = "aww", cb = f => f, lastPost) {
    if (lastPost !== null && 'name' in lastPost) {
        let url = "https://www.reddit.com/r/" + subreddit + ".json?after=" + lastPost.name
        fetchImagesHelper(url, cb);
        return;
    }

    fetchImages(subreddit, cb);
}

export function fetchUserImagePosts(user, fetchSuccessCb = f => f) {
    let url = 'https://www.reddit.com/user/' + user + '.json?limit=100';
    fetchImagesHelper(url, fetchSuccessCb);
}
