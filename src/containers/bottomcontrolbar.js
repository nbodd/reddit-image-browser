import { connect } from 'react-redux'
import ControlBar from '../components/bottomcontrolbar'
import { fetchAdditionalSubredditImages } from '../actions';

const mapPropsToDispatch = (dispatch) => ({
    onFetch : (subreddit) => dispatch(fetchAdditionalSubredditImages(subreddit)),
})

export default connect(null, mapPropsToDispatch)(ControlBar)
