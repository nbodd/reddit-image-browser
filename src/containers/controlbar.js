import { connect } from 'react-redux'
import ControlBar from '../components/controlbar'
import { fetchSubredditImages } from '../actions';

const mapPropsToDispatch = (dispatch) => ({
    onFetch : (subreddit) => dispatch(fetchSubredditImages(subreddit)),
    onRefresh : (subreddit) => dispatch(fetchSubredditImages(subreddit))
})

export default connect(null, mapPropsToDispatch)(ControlBar)
