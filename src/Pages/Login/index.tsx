import React from 'react';
import { connect } from 'react-redux';

const Login = (props: any) => {
    const { REACT_APP_API_URL } = process.env;

    return (
        <div>
            Login Page <br/>
            {REACT_APP_API_URL}
            {JSON.stringify(props.auth)}
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    auth: state.Auth
});

export default connect(mapStateToProps) (Login);