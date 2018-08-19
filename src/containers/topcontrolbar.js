import { connect } from 'react-redux'
import ControlBar from '../components/topcontrolbar'
import { fetchSubredditImages } from '../actions';

let isRefresh = true;

const mapPropsToDispatch = (dispatch) => ({
    onFetch : (subreddit) => dispatch(fetchSubredditImages(subreddit)),
    onRefresh : (subreddit) => dispatch(fetchSubredditImages(subreddit, isRefresh))
})

export default connect(null, mapPropsToDispatch)(ControlBar)
