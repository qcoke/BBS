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
    console.log("listItems:",listItems);
    return (
      <List>
        {listItems.map((item) => {
          return (
            <ListItem key={item.key}>
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

/*export default function SimpleContainer() {
  const classes = useStyles();
  console.log("this.props:", this);
  let listItems = []; 
  
  return (
    <List>
      {listItems.map((item) => {
        return (
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.bigAvatar}>
                <ImageIcon />
              </Avatar>
              <span className="nick-name">昵称</span>
            </ListItemAvatar>
            <ListItemText secondary={item.text} />
          </ListItem>
        )
      })}
    </List>
  )
}
*/