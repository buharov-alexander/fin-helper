import React, { useState } from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';

const AddAccountHistoryRow = () => {
    const [_amount, setAmount] = useState("0");
    const [_isEdit, setIsEdit] = useState(false);

    const updateEditMode = (value: boolean) => {
        if (value === _isEdit) {
            return;
        }
        setIsEdit(value);
    }

    const renderContent = () => {
        if (_isEdit) {
            return (
                <React.Fragment>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left">
                        <TextField
                            id="account-amount"
                            variant="standard"
                            error={isNaN(Number(_amount))}
                            value={_amount}
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    </TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="right">
                    </TableCell>
                </ React.Fragment>
            );
        }
        return <TableCell colSpan={5}>Add Account State</TableCell>;
    }

    return (
        <TableRow
            className="b-add-account-row"
            onClick={() => updateEditMode(true)}
        >
            {renderContent()}
        </TableRow>
    );
}

export default AddAccountHistoryRow;