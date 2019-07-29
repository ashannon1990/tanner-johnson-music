import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
      <div>
          
    <form className={classes.container} style={{marginLeft: "10px"}} noValidate autoComplete="off">
        <div>
      <TextField
        id="standard-full-width"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="filled"
        style={{width: '90%'}}
      />
      <TextField
        id="filled-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange('email')}
        autoComplete="email"
        margin="normal"
        variant="filled"
        style={{width: '90%'}}
      />
      <TextField
        id="standard-multiline-flexible"
        label="Message"
        multiline
        rowsMax="10"
        // defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="filled"
        style={{width: '90%'}}
      />
      </div>
      <div>
      <Button variant="contained" color="primary" display="block" style={{margin: "10px", background: '#333333'}} className={classes.button}>
          Submit
      </Button>
      </div>
    </form>
    </div>
  );
}