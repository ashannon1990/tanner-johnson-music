import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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
  const [selectedDate, setSelectedDate] = React.useState();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    multiline: 'Controlled',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <div>
      <form className={classes.container} noValidate>
        <TextField
          style={{ width: '90%', margin: '10px' }}
          id="venueName"
          label="Venue Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          style={{ width: '90%', margin: '10px' }}
          id="venueAddress"
          label="Venue Address"
          placeholder="Venue Address"
          multiline
          className={classes.textField}
          margin="normal"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
         
            <KeyboardDatePicker
              style={{ width: '90%', margin: '10px' }}
              margin="normal"
              id="eventDate"
              label="Date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <KeyboardTimePicker
              style={{ width: '90%', margin: '10px' }}
              margin="normal"
              id="eventTime"
              label="Time"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change time',
              }}
            />
         
        </MuiPickersUtilsProvider>
      </form >
      <Button variant="contained" color="primary" style={{ margin: '10px', background: '#333333' }} className={classes.button}>
        Submit
     </Button>
    </div>
  );
}