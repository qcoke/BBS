import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';

import "./MsgList.css";


class MsgList extends Component{
  render() {
    let listItems = this.props.dataList;
    return (
      <List>
        {listItems.map((item) => {
          return (
            <ListItem key={item.key} className={item.nickname === '张三' ? 'my-message' : 'people-message'}>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
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
