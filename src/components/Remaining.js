import React, { useContext, useEffect} from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);   
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    const remaining = budget - totalExpenses;

    useEffect(() => {
        if (remaining < 0) {
            alert('You cannot reduce the budget value lower than the spending');
        }
    }, [remaining]);

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
