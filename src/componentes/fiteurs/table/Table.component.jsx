import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useContext} from 'react'
import {studentesContext} from "../../contexes/StudentsContext" 

function createData(firstName,lastName,perantscellPhone) {
  return { firstName,lastName,perantscellPhone };
}

const teachers = [
  createData(),
];

export default function BasicTable() {
  const {teachers} = useContext(studentesContext)
  console.log(teachers);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Kids-Ditails</TableCell>
            <TableCell align="right">firstName</TableCell>
            <TableCell align="right">lastName</TableCell>
            <TableCell align="right">perantscellPhone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentes.map((studentItem) => (
            <TableRow
              key={studentItem.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="teachers">
                {row.name}
              </TableCell>
              <TableCell align="right">{studentItemItem.Students.name}</TableCell>
              <TableCell align="right">{studentItemItem.Students.lastName}</TableCell>
              <TableCell align="right">{studentItemItem.Students.perentsPhonenumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
