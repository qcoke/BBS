/**
 * author:        liucan
 * email:         33370733@qq.com
 * description:   主界面，用于聚合登陆组件、发送消息组件
 */
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import io from 'socket.io-client';
import MsgList from "../List/MsgList.js";
import Login from "../Login/Login.js";
import Notice from "../../Notice";

import './Main.css';

window.socket = io('/');

class Main extends Component {
  // 初始化组件
  constructor(props){
    super(props);
    this.state = {
      // 用户数卡拉库姆，，，，，，tgghg
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
  /** 
   * 发送消息
   * @method      sendMessage
   * @params      {String}    val     输入框中的值，发送之后给服务器发一条消息。
   * @return      {void}
   */
  sendMessage = (val) => {
    const MsgObj = {
      key: new Date().getTime(), 
      headerValue: window.sessionStorage.getItem("headerValue"),
      nickname: window.sessionStorage.getItem("nickName"),
      text: val
    }
    window.socket.emit("sentToServer", JSON.stringify(MsgObj));
  }
  /** 
   * 添加消息到列表
   * @method      addMessageToList
   * @params      {Object}    MsgObject     消息对象
   * @return      {void}
   */
  addMessageToList = (MsgObject) => {
    let newArray = this.state.listItems;
    const options = {
      dir: 'auto',
      body: MsgObject.value,
      requireInteraction: true
    }

    newArray.push(MsgObject);
    this.setState({listItems: newArray});
    setTimeout(() => {
      // 在这里做一个动画效果比较好
      document.querySelector(".contain-list").scrollTop = 9999999;
    }, 500);
    // 桌面推送

    Notice.show("Leebbs", options);
  }
  /** 
   * 初始化 socket 连接
   * @method      initSocket
   * @return      {void}
   */
  initSocket = () => {
    let _this = this;
    window.socket.on('sendToClient', function(msg){
      console.log('发送信息');
      _this.addMessageToList(JSON.parse(msg));
    });

    window.socket.on('addUserCount', function(msg){
      console.log('用户上线了');
      let userCount = _this.state.userCount + 1;
      _this.setState({userCount: userCount});
    });

    window.socket.on('subUserCount', function(msg){
      console.log('用户下线了');
      let userCount = _this.state.userCount - 1;
      _this.setState({userCount: userCount < 0 ? 0 : userCount});
    });
    window.socket.emit("addUserCount", 1);
  }
  /** 
   * 界面初始化
   * @method      componentDidMount
   * @return      {void}
   */
  componentDidMount(){
    // 如果没有 session 那就等于用户下线了，需要重新登陆一次。
    this.refs['login'].handleOpen();
  }
  /** 
   * 界面渲染
   * @method      render
   * @return      {void}
   */
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
        <Login ref="login" initSocket={this.initSocket}></Login>
      </React.Fragment>
    );
  }
}

export default Main;
