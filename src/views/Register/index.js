import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { sendCodeToEmail } from '../../redux/actions/user';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    invalidfeedback:{
      display:"block",
      color:'red'
    },
    fields:{
      width:"100%",
      height:"50px",
      padding: "18.5px 14px",
      font: "inherit",
    },
    btnSend:{
      padding:"15px"
    }
  }));


const RegisterPage = props => {

    const dispatch=useDispatch();
   
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [code,setCode]=useState("");
     /* State Password*/
     const [fullname,setFullname]=useState("");
    /* State Password*/
    const [gender,setGender]=useState(true);
    /* State RePassword*/
    const [confirmpassword,setConfirmpassword]=useState(false);

    const onSendCode = ()=>{
      if(validateEmail(email) ===  null){
        console.log(email)
        dispatch(sendCodeToEmail({email:email}));
      }
    }
   /*Check email validation*/
    const validateEmail = (checkingText) => {
      const regexp =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regexp.exec(checkingText) !== null) {
          return null;
          ;
      } else {
          return 'Email invalid(abc@vn.com)';
      }
    }

   const classes = useStyles();
    
    const handleChangeInput = event =>{
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      switch (name){
        case "email":
          setEmail(value);
          validateEmail(value);
        case "code":
          setCode(value)
        case "fullname":
          setFullname(value)
        case "password":
          setPassword(value);
        case "confirmpassword":
          setConfirmpassword(value);
      }

    }

    const onSubmit = (fields)=>{
      console.log("submit");
    }

    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                
                name="email"
                variant="outlined"
                required
                fullWidth
                label="Email"
                onChange={handleChangeInput}
                autoFocus
               
              />
              {validateEmail(email)}
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.btnSend}
                onClick={onSendCode}
                
              >
                Send Code
              </Button>
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                label="Code"
                name="code"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Full Name"
                name="fullname"
                autoComplete="lname"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
                onChange={handleChangeInput}
              />
            </Grid>

            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>  */}
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign Up
          </Button>
        </form>
      </div>
     
    </Container>
    );
};

RegisterPage.propTypes = {
    
};

export default RegisterPage;