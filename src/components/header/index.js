import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';



import { useSelector } from 'react-redux';


//Css style MaterialUI
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Header = () => {
    const classes = useStyles();
    const user=useSelector(state => state);
    const isAuthen =localStorage.getItem("ssUser");
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
  
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          {
            isAuthen?(
              <div>
                 <Button color="inherit" onClick={handleClick}>
                  Acount Name
                  </Button>
                  <Popper id={id} open={open} anchorEl={anchorEl}>
                      <div  className={classes.paper}>
                        <Button href="/home/login">
                          <AccountCircleIcon/>
                              Profile
                        </Button><br/>
                        <Button onClick={()=> console.log("logout")}>
                          <ExitToAppIcon/>
                              Logout
                        </Button>
                      </div>
                      
                  </Popper>
              </div>
                     
            ):(
              <div>
                  <Button color="inherit" href="/home/login">
                    LOGIN
                  </Button>
                  <Button color="inherit" href="/home/register">SIGNUP</Button>
              </div>
            )
          }
        </Toolbar>
      </AppBar>
        </div>
    );
};


Header.prototype={
    
}
export default Header;