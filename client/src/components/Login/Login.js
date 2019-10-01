import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './login.css'

class Login extends Component {
  render() {
    return (
      <div className="components-login">
        <Button variant="contained" color="primary">登陆</Button>
      </div>
    )
  }
}

export default Login;
