import React from 'react'
import Header from './Header';
import Axios from 'axios';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer'


class HeaderContainer extends React.Component {

    componentDidMount(){
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).
            then(response => {
                let isAuth = response.data.resultCode;
                if (isAuth === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }
    render(){
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);