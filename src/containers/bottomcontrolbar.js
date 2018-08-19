import { connect } from 'react-redux'
import ControlBar from '../components/bottomcontrolbar'
import { fetchAdditionalSubredditImages } from '../actions';

const mapPropsToDispatch = (dispatch) => ({    
    onFetch : () => dispatch(fetchAdditionalSubredditImages()),
})

export default connect(null, mapPropsToDispatch)(ControlBar)
