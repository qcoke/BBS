import React from 'react';

import './Main.css';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import MsgList from "../List/MsgList.js";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container fixed className="main-container">
          <AppBar position="static" className="app-title">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Hello 楽
              </Typography>
            </Toolbar>
          </AppBar>
          {/* 内容窗口 */}
          <div className="contain-list">
            <MsgList></MsgList>
          </div>
          {/* 底部输入框 */}
          <div className="footer">
            <TextField
              fullWidth
              id="outlined-bare"
              className={classes.textField}
              placeholder="请输入您的内容"
              margin="normal"
              variant="outlined"
            />
          </div>
      </Container>
    </React.Fragment>
  );
}