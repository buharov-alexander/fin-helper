import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { loadAccounts, selectAccounts } from 'accounts/accountsSlice'

export default function BasicTable() {
  const dispatch = useAppDispatch();
  const accounts = useAppSelector(selectAccounts);

  useEffect(() => {
    dispatch(loadAccounts());
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right">Currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {accounts.map((account) => (
            <TableRow
              key={account.id}
            >
              <TableCell component="th" scope="row">
                {account.id}
              </TableCell>
              <TableCell align="right">{account.name}</TableCell>
              <TableCell align="right">{account.balance.amount}</TableCell>
              <TableCell align="right">{account.balance.currency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
