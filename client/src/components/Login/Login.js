import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      value: '1',
      nickname: '张三',
      headImgStr: '',
      headerArr: [
        {key:'1',value:'/imgs/head_1.jpeg'},
        {key:'2',value:'/imgs/head_2.jpeg'},
        {key:'3',value:'/imgs/head_3.jpeg'},
        {key:'4',value:'/imgs/head_4.jpeg'},
        {key:'5',value:'/imgs/head_5.jpeg'},
        {key:'6',value:'/imgs/head_6.jpeg'}
      ]
    }
  }
  demo = () => {
    alert('Login demo method caller');
  }
  handleClose = () => {
    this.setState({ show: false });
  }
  handleShow = () => {
    this.setState({ show: true });
  }
  handleChange = () => {
    alert('handleChange');
  }
  render() {
    return (
      <Dialog
        open={this.state.show}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">{"请输入您的资料"}</DialogTitle>
        <DialogContent>
          <Grid>
            <FormControl>
              <RadioGroup label="头像" value={this.state.value}>
                <FormControlLabel
                  value="female"
                  control={<Radio color="primary" />}
                  label="Female"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid>
            <FormControl>
              <TextField
                label="昵称："
                value={this.state.nickname}
              />
            </FormControl>
          </Grid>
        </DialogContent>
        <DialogActions>
        <Button variant="contained">
            取消
          </Button>
          <Button variant="contained" color="primary">
            提交
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default Login;
