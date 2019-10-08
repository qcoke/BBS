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
import io from 'socket.io-client';

import "./login.css";

window.socket = io('/');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      showError: false,
      headerValue: 'a',
      nickName: ""
    };
  }
  // 为什么要这样写才能正常被调用？？？
  handleClose = () => {
    this.setState({ openDialog: false });
  }
  handleOpen = () => {
    this.setState({ openDialog: true });
  }
  handleChange = (event) => {
    const val = event.target.value;
    this.setState({ headerValue: val });
  }
  // 保存数据
  saveData = () => {
    let _this = this;

    if (this.state.nickName.length === 0) {
      console.log("请输入昵称");
      this.setState({ showError: true });
    } else {
      this.setState({ showError: false });
      // 保存在用户本地
      window.sessionStorage.setItem("nickName", this.state.nickName);
      window.sessionStorage.setItem("headerValue", this.state.headerValue);
      this.handleClose();

      console.log(io);
      // 监听服务器的消息
      window.socket.on('sendToClient', function(msg){
        _this.addMessageToList(JSON.parse(msg));
      });

      window.socket.on('addUserCount', function(msg){
        console.log('用户上线了');
      });

      window.socket.on('subUserCount', function(msg){
        console.log('用户下线了');
        let userCount = _this.state.userCount;
        _this.setState({listItems: userCount--});
      });
    }
  }

  render() {
    const headerArr = [
      { key: 'a', value: '/imgs/head_1.jpeg' },
      { key: 'b', value: '/imgs/head_2.jpeg' },
      { key: 'c', value: '/imgs/head_3.jpeg' },
      { key: 'd', value: '/imgs/head_4.jpeg' },
      { key: 'f', value: '/imgs/head_6.jpeg' }
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
