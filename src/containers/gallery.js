import { connect } from 'react-redux'
import Gallery from '../components/gallery'

let postsForActiveSubreddit = (state) => {
    
    if (state.activesub && state.subredditdata[state.activesub])
    {
        if (state.subredditdata[state.activesub].posts)
        {
            return state.subredditdata[state.activesub].posts
        }
    }
    
    return []
}

const mapStateToProps = (state) => ({
    posts :  postsForActiveSubreddit(state) 
})

export default connect(mapStateToProps, null)(Gallery)
