import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import "./MsgList.css";

class MsgList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: window.sessionStorage.getItem("nickName")
    }
  }
  getHeader = (headerValue) => {
    let str = '';
    console.log('头像:',headerValue);
    switch (headerValue) {
      case "1":
        str = '/imgs/head_1.jpeg';
        break;
      case "2":
        str = '/imgs/head_2.jpeg';
        break;
      case "3":
        str = '/imgs/head_3.jpeg';
        break;
      case "4":
        str = '/imgs/head_4.jpeg';
        break; 
      case "5":
        str = '/imgs/head_5.jpeg';
        break;
      default:
        str = '/imgs/head_6.jpeg';
    }
    return str;
  }
  render() {
    let listItems = this.props.dataList;
    return (
      <List>
        {listItems.map((item) => {
          return (
            <ListItem key={item.key} className={item.nickname === window.sessionStorage.getItem("nickName") ? 'my-message' : 'people-message'}>
              <ListItemAvatar>
                <Avatar src={this.getHeader(item.headerValue)}>
                  <ImageIcon />
                </Avatar>
                <span class="nick-name">{this.state.nickname}</span>
              </ListItemAvatar>
              <ListItemText secondary={item.text} />
            </ListItem>
          )
        })}
      </List>
    );
  }
}

export default MsgList;
