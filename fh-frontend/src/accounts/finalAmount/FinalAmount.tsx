import React, {FC, ReactElement} from 'react';
import Paper from '@mui/material/Paper';

import './FinalAmount.scss';
import { Account } from 'accounts/accountsSlice';

interface FinalAmountProps {
    accounts: Account[],
    currencyRateMap: Map<string, number>
}

const getRubBalance = (account: Account, currencyRateMap: Map<string, number>) => {
    const rate = currencyRateMap.get(account.balance.currency) || 1;
    return rate * account.balance.amount;
}

const FinalAmount: FC<FinalAmountProps> = ({accounts, currencyRateMap}) : ReactElement => {

    const total = accounts.reduce((accumulator, account) => accumulator + getRubBalance(account, currencyRateMap), 0);
    const rateUsd = currencyRateMap.get('USD') || 1;
    const totalUsd = total / rateUsd;

    return (
        <Paper className='b-final-amount'>
            <div className='b-final-amount__label'>
                Total:
            </div>
            <div  className='b-final-amount__value'>
                {total.toFixed(0)} ₽
            </div>
            <div  className='b-final-amount__value b-final-amount__value_secondary'>
                {totalUsd.toFixed(0)} $
            </div>
        </Paper>
    );
}


export default FinalAmount;