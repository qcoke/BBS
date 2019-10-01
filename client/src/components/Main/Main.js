import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import MsgList from "../List/MsgList.js";

import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      listItems:[
        { key: '0', value: 'Photos', text: '就是可怜的肌肤阿拉山口将大幅拉升的' },
        { key: '1', value: 'Work', text: '就是可怜的肌肤阿拉山口将大幅拉升的' },
        { key: '2', value: 'Vacation', text: '阿克琉斯记得反馈啦技术的开发李建阿斯利康的肌肤脸上看对方' },
        { key: '3', value: 'Tokyo', text: '阿克苏的肌肤卢卡斯就打开了飞机阿斯利康的肌肤卢卡斯觉得浪费空间上来的咖啡机' },
        { key: '4', value: 'HK', text: '看见了卡技术的开发 i 欧文哦日 u 为儿女们，苏丹诺夫' },
        { key: '5', value: 'Photos', text: '就是可怜的肌肤阿拉山口将大幅拉升的' },
        { key: '6', value: 'Work', text: '就是可怜的肌肤阿拉山口将大幅拉升的' },
        { key: '7', value: 'Vacation', text: '阿克琉斯记得反馈啦技术的开发李建阿斯利康的肌肤脸上看对方' }
      ]
    }
  }
  enterText (event) {
    const val = event.target.value;
    const keyCode = event.which;
    
    if (keyCode === 13) {
      let newArray = this.state.listItems;
      let scrollHeight = document.querySelector(".contain-list").scrollHeight;
      let lastChild = document.querySelector(".MuiListItem-root:last-child");

      newArray.push({
        key: new Date().getTime(), 
        value: new Date().getTime(), 
        text: val
      });
      this.setState({listItems: newArray});
      event.target.value = "";
      setTimeout(() => {
        document.querySelector(".contain-list").scrollTop = 9999999;
      }, 500);
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container fixed className="main-container">
          <AppBar position="static" className="app-title">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">
                Hello 楽
              </Typography>
            </Toolbar>
          </AppBar>
          {/* 内容窗口 */}
          <div className="contain-list">
            <MsgList dataList={this.state.listItems}></MsgList>
          </div>
          {/* 底部输入框 */}
          <div className="footer">
            <TextField
              fullWidth
              id="outlined-bare"
              placeholder="请输入您的内容"
              margin="normal"
              variant="outlined"
              onKeyPress={(e) => {
                this.enterText(e);
              }}
            />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Main;