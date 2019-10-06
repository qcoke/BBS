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

import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      // 是否现实登录框
      showLogin: false,
      // 数据列表
      listItems:[
        { key: 1, nickname: '张三', value: 'Photos', text: '就是可怜的肌肤阿拉山口将大幅拉升的' },
        { key: 2, nickname: '张三', value: 'Work', text: '就是可怜的肌肤阿拉山口将大幅拉升的' },
        { key: 3, nickname: '张三', value: 'Vacation', text: '阿克琉斯记得反馈啦技术的开发李建阿斯利康的肌肤脸上看对方' },
        { key: 4, nickname: '李四', value: 'Tokyo', text: '阿克苏的肌肤卢卡斯就打开了飞机阿斯利康的肌肤卢卡斯觉得浪费空间上来的咖啡机' },
        { key: 5, nickname: '张三', value: 'HK', text: '看见了卡技术的开发 i 欧文哦日 u 为儿女们，苏丹诺夫' },
        { key: 6, nickname: '李四', value: 'Photos', text: '就是可怜的肌肤阿拉山口将大幅拉升的' },
        { key: 7, nickname: '张三', value: 'Work', text: '就是可怜的肌肤阿拉山口将大幅拉升的' },
        { key: 8, nickname: '张三', value: 'Vacation', text: '阿克琉斯记得反馈啦技术的开发李建阿斯利康的肌肤脸上看对方' }
      ]
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
      let newArray = this.state.listItems;
      
      newArray.push({
        key: new Date().getTime(), 
        nickname: '张三',
        value: new Date().getTime(), 
        text: val
      });
      this.setState({listItems: this.state.listItems});
      event.target.value = "";
      setTimeout(() => {
        // 在这里做一个动画效果比较好
        document.querySelector(".contain-list").scrollTop = 9999999;
      }, 500);
    }
  }
  // 界面初始化
  componentDidMount(){
    // 如果没有 session 那就等于用户下线了，需要重新登陆一次。
    this.refs['login'].handleShow();
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
              <Button color="inherit">在线人数：0</Button>
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
