import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    background: '#333333',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar} style={{ boxShadow: '0px 3px 5px black' }}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Tanner Johnson Music
            </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="/" className={classes.link}>
            About Me
              </Link>
          <Link variant="button" color="textPrimary" href="/mymusic" className={classes.link}>
            My Music
              </Link>
          <Link variant="button" color="textPrimary" href="/events" className={classes.link}>
            Upcoming Events
              </Link>
          <Link variant="button" color="textPrimary" href="/contact" className={classes.link}>
            Contact
              </Link>
        </nav>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar;