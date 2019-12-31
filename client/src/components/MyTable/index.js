import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography } from '@material-ui/core';


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


export default function MyTable(props) {
  const classes = useStyles();
  let cellNum = 0
  let rowNum = 0

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
        <Typography style={{ textAlign: 'center', fontWeight: 'bold' }} variant="span">{props.title}</Typography>
          <TableRow>
            {props.headers.map(header => (
              <TableCell key={header}>{header}</TableCell>
            )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(array => {
          rowNum++
            return <TableRow key={rowNum}>
              {array.map((rowItem, index) => {
                cellNum++
                return <TableCell key={cellNum}>{rowItem}</TableCell>
              })
              }
            </TableRow>
          }
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}