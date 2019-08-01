import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function displayMessage(name, email, message) {
  return { name, email, message };
}

const rows = [
  displayMessage('Name', 'Email', 'BLAH BLAH MESSAGE BLAH BLAH BLAH BLAH MESSAGE BLAH BLAH BLAH BLAH MESSAGE BLAH BLAH'),
  displayMessage('Name', 'Email', 'BLAH BLAH MESSAGE BLAH BLAH BLAH BLAH MESSAGE BLAH BLAH BLAH BLAH MESSAGE BLAH BLAH'),
  displayMessage('Name', 'Email', 'BLAH BLAH MESSAGE BLAH BLAH BLAH BLAH MESSAGE BLAH BLAH BLAH BLAH MESSAGE BLAH BLAH'),
  displayMessage('Name', 'Email', 'BLAH BLAH MESSAGE BLAH ')
]
export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.message}</TableCell>>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}