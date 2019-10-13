import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import Avatar from '@material-ui/core/Avatar';

import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      showError: false,
      headerValue: '1',
      nickName: ""
    };
  }
  // 为什么要这样写才能正常被调用？？？
  handleClose = () => {
    this.setState({ openDialog: false });
    this.initSocket();
  }
  handleOpen = () => {
    this.setState({ openDialog: true });
  }
  handleChange = (event) => {
    const val = event.target.value;
    this.setState({ headerValue: val });
  }
  /** 
   * 初始化 socket 连接
   * @method      initSocket
   * @return      {void}
   */
  initSocket = () => {
    this.props.initSocket();
  }
  // 保存数据
  saveData = () => {
    if (this.state.nickName.length === 0) {
      this.setState({ showError: true });
    } else {
      this.setState({ showError: false });
      // 保存在用户本地
      window.sessionStorage.setItem("nickName", this.state.nickName);
      window.sessionStorage.setItem("headerValue", this.state.headerValue);
      this.handleClose();
    }
  }

  render() {
    const headerArr = [
      { key: '1', value: '/imgs/head_1.jpeg' },
      { key: '2', value: '/imgs/head_2.jpeg' },
      { key: '3', value: '/imgs/head_3.jpeg' },
      { key: '4', value: '/imgs/head_4.jpeg' },
      { key: '5', value: '/imgs/head_5.jpeg' },
      { key: '6', value: '/imgs/head_6.jpeg' }
    ]
    return (
      <div>
        <Dialog open={this.state.openDialog} aria-labelledby="form-dialog-title" className="dialog-login">
          <DialogTitle id="form-dialog-title">初始设置</DialogTitle>
          <DialogContent>
            <DialogContentText>
              请选择您的头像.
            </DialogContentText>
            <table border="0">
              <tbody>
                <tr>
                  {headerArr.map((item) => {
                    return (
                      <td key={item.key}>
                        <Radio
                          checked={this.state.headerValue === item.key}
                          onChange={this.handleChange}
                          value={item.key}
                          name="radio-button-demo" />
                        <Avatar alt="" src={item.value} />
                      </td>
                    )
                  })}
                </tr>
              </tbody>
            </table>
            <FormControl fullWidth={true}>
              <TextField
                required
                fullWidth
                label="昵称"
                name="nickName"
                ref="nickName"
                defaultValue={this.state.nickName}
                error={this.state.showError}
                onChange={(event) => {
                  this.setState({ nickName: event.target.value })
                }}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose}>
              取消
            </Button>
            <Button color="primary" onClick={this.saveData}>
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default Login;
