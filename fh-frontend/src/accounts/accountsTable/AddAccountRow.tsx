import React, { useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';

const AddAccountRow = () => {
    const [_name, setName] = useState("");
    const [_isEdit, setIsEdit] = useState(false);

    const rowView = _isEdit ? (
        <TextField
            id="account-name"
            variant="standard"
            error={!_name}
            onChange={(event) => setName(event.target.value)}
            autoFocus
        />
    ) : "Add New Account";

    const updateEditMode = (value: boolean) => {
        if (value === _isEdit) {
            return;
        }
        setIsEdit(value);
    }

    return (
        <TableRow
            className="b-add-account-row"
            onClick={() => updateEditMode(true)}
            onBlur={() => updateEditMode(false)}
        >
            <TableCell colSpan={5}>{rowView}</TableCell>
        </TableRow>
    );
}

export default AddAccountRow;