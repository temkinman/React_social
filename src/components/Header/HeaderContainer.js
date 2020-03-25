import React from 'react'
import Header from './Header';
import Axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/auth-reducer'
// import {loginUser} from '../'


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.loginUser();
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { loginUser })(HeaderContainer);