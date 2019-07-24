import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function AddNewShow() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    multiline: 'Controlled',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate>
      <TextField
        style={{ width: '100%' }}
        id="standard-name"
        label="Venue Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
      <TextField
        style={{ width: '100%' }}
        id="standard-textarea"
        label="Venue Address"
        placeholder="Venue Address"
        multiline
        className={classes.textField}
        margin="normal"
      />
      <br/>
      <TextField
        style={{ width: '100%' }}
        id="datetime-local"
        label="Date and time"
        type="datetime-local"
        // defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}