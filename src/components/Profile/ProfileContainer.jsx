import React from 'react'
import Profile from './Profile'
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile, setUserId} from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        // this.props.setFetching(true);
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
        }
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).
            then(response => {
                this.props.setUserProfile(response.data);
            })
    }
    

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlContainerComponent)

