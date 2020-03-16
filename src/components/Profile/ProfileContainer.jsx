import React from 'react'
import Profile from './Profile'
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile} from '../../redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        // this.props.setFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).
            then(response => {
                // this.props.addPostCreator(response.data.profilePage);
                // this.props.setTotalUsers(response.data.totalCount);
                this.props.setUserProfile(response.data);
                // this.props.setFetching(false);
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

