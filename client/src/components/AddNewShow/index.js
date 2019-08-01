import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

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

export default function AddNewShow(props) {
  const classes = useStyles();
  // const [selectedDate, setSelectedDate] = React.useState();
  const [values, setValues] = React.useState({
    venueName: '',
    venueAddress: '',
    eventDate: '',
    eventTime: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });

  };

  // function handleDateChange(date) {
  //   setSelectedDate(date);
  // }

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          style={{ width: '90%', margin: '10px' }}
          id="venueName"
          label="Venue Name"
          className={classes.textField}
          value={values.venueName}
          onChange={handleChange('venueName')}
          margin="normal"
        />
        <TextField
          style={{ width: '90%', margin: '10px' }}
          id="venueAddress"
          label="Venue Address"
          placeholder="Venue Address"
          multiline
          value={values.venueAddress}
          onChange={handleChange('venueAddress')}
          className={classes.textField}
          margin="normal"
        />
      <TextField
       style={{ width: '90%', margin: '10px' }}
        id="date"
        label="Date"
        type="date"
        defaultValue=''
        onChange={handleChange('eventDate')}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
       <TextField
       style={{ width: '90%', margin: '10px' }}
        id="time"
        label="Alarm clock"
        type="time"
        defaultValue="07:30"
        onChange={handleChange('eventTime')}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>

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

        </MuiPickersUtilsProvider> */}
        <div>
          <Button onClick={event => props.addUpcomingEvent(event,
            {
              venueName: values.venueName,
              venueAddress: values.venueAddress,
              eventDate: values.eventDate,
              eventTime: values.eventTime
            }
            )}
            variant="contained" color="primary" style={{ margin: '10px', background: '#333333' }} className={classes.button}>
            Submit
          </Button>
        </div>
      </form >
    </div>
  );
}