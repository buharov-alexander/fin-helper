import React, {FC, ReactElement} from 'react';
import Paper from '@mui/material/Paper';

import { Account } from 'accounts/accountsSlice'

interface FinalAmountProps {
    accounts: Account[],
    currencyRateMap: Map<string, number>
}

const getRubBalance = (account: Account, currencyRateMap: Map<string, number>) => {
    const rate = currencyRateMap.get(account.balance.currency) || 1;
    return rate * account.balance.amount;
}

const FinalAmount: FC<FinalAmountProps> = ({accounts, currencyRateMap}) : ReactElement => {

    const total = accounts.reduce((accumulator, account) => accumulator + getRubBalance(account, currencyRateMap), 0)

    return (
        <Paper>
            Total: {total}
        </Paper>
    );
}


export default FinalAmount;