import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const AddAccountRow = () => {
    return (
        <TableRow className="b-add-account-row">
            <TableCell colSpan={5}>Add New Account</TableCell>
        </TableRow>
    );
}

export default AddAccountRow;