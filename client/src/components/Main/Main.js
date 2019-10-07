import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import MsgList from "../List/MsgList.js";
import Login from "../Login/Login.js";
import io from 'socket.io-client';

import './Main.css';

window.socket = io('http://127.0.0.1:3001');

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      // 用户数
      userCount: 0,
      // 是否现实登录框
      showLogin: false,
      // 数据列表
      listItems:[]
    }
  }
  /** 
   * 输入文本的监听事件
   * @method    enterText
   * @params    {Object}    event     原生 JavaScript 事件对象
   * @return    {void}
   */
  enterText (event) {
    const val = event.target.value;
    const keyCode = event.which;
    
    if (keyCode === 13) {
      this.sendMessage(val);
      event.target.value = "";
    }
  }
  sendMessage = (val) => {
    const MsgObj = {
      key: new Date().getTime(), 
      nickname: window.sessionStorage.getItem("nickName"),
      text: val
    }
    // this.addMessageToList(MsgObj);
    // 发送一条到服务器
    window.socket.emit("sentToServer", JSON.stringify(MsgObj)); 
  }
  addMessageToList = (MsgObject) => {
    let newArray = this.state.listItems;
    newArray.push(MsgObject);
    this.setState({listItems: newArray});
    setTimeout(() => {
      // 在这里做一个动画效果比较好
      document.querySelector(".contain-list").scrollTop = 9999999;
    }, 500);
  }
  // 界面初始化
  componentDidMount(){
    let _this = this;
    // 如果没有 session 那就等于用户下线了，需要重新登陆一次。
    this.refs['login'].handleOpen();
    // 监听服务器的消息
    window.socket.on('sendToClient', function(msg){
      _this.addMessageToList(JSON.parse(msg));
    });

    // window.socket.on('addUserCount', function(msg){
    //   console.log(this);
    // });

    // window.socket.on('subUserCount', function(msg){
    //   let userCount = _this.state.userCount;
    //   _this.setState({listItems: userCount--});
    // });
  }
  // 界面渲染
  render() {
    return (
      <React.Fragment>
        <Container fixed className="main-container">
          <AppBar position="static" className="app-title">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className="typo-title">
                Hello 楽
              </Typography>
              <Button color="inherit">在线人数：{this.state.userCount}</Button>
            </Toolbar>
          </AppBar>
          <div className="contain-list">
            <MsgList dataList={this.state.listItems}></MsgList>
          </div>
          <div className="footer">
            <TextField
              fullWidth
              placeholder="请输入您的内容"
              multiline
              rows="1"
              margin="none"
              variant="outlined"
              onKeyPress={(e) => {
                this.enterText(e);
              }}
            />
          </div>
        </Container>
        <Login ref="login"></Login>
      </React.Fragment>
    );
  }
}

export default Main;
