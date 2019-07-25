import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    <div>
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

        <TextField
          style={{ width: '100%' }}
          id="date"
          label="Date"
          type="date"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br />
        <TextField
          style={{ width: '100%' }}
          id="time"
          label="Time"
          type="time"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min 
          }}
        />
      </form >
      <Button variant="contained" color="primary" style={{ margin: '10px', background: '#333333' }} className={classes.button}>
        Submit
     </Button>
    </div>
  );
}