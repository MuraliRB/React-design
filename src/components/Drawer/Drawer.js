import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PrimarySearchAppBar from '../NavBar/NavBar';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';


import './Drawer.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <PrimarySearchAppBar/>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer} style={{overflow:'hidden'}}>
          <List className='general-div'>
          <div>
          <h5 className='gen-head'>General</h5>
          <div>
          
          <li><h6><AiIcons.AiOutlineAppstoreAdd className='icons'/><span className='icons-text'>App</span></h6></li>
          </div>
          <div>
          <li><h6><AiIcons.AiOutlineShoppingCart className='icons'/><span className='icons-text'>E-commerce</span></h6></li>
          </div>
          <div>
          <li><h6><SiIcons.SiGoogleanalytics className='icons'/><span className='icons-text'>Analytics</span></h6></li>
          </div>
          <div>
          <li><h6><AiIcons.AiFillBank className='icons'/><span className='icons-text'>Banking</span></h6></li>
          </div>
          <div>
          <li><h6><BsIcons.BsFillCalendarDateFill className='icons'/><span className='icons-text'>Booking</span></h6></li>
          </div>
          </div>
          
          </List>
          <Divider />
          <List className='management-div'>
          <div>
           <h5 className='man-head'>Management</h5>
           <div>
             <li><h6><FaIcons.FaUserAlt className='icons'/><span className='icons-text'>User</span></h6></li>
           </div> 
           <div>
             <li><h6><AiIcons.AiOutlineShoppingCart className='icons'/><span className='icons-text'>E-commerce</span></h6></li>
           </div> 
           <div>
             <li><h6><FaIcons.FaBlogger className='icons'/><span className='icons-text'>Blog</span></h6></li>
           </div> 
           </div>  
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        
      </main>
    </div>
  );
}
