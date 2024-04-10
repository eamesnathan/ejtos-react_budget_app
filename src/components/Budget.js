import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, totalExpenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimit = 20000;
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    
    }
    const handleBlur = () => {
        if (newBudget > upperLimit) {
            alert("The budget cannot exceed £20,000."); // Alert the user
            setNewBudget(budget); // Reset to the last valid budget
            return; // Exit without updating the global state
        }
        else if (newBudget < totalExpenses) {
            // Alert if the budget is less than the total expenses
            alert("The budget cannot be less than the total expenses.");
            setNewBudget(budget); // Optionally reset to the last valid budget
            return;
        }
        // Dispatch action to update global state when input loses focus
        dispatch({
            type: 'SET_BUDGET',
            payload: parseFloat(newBudget),
        });
    };
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange} onBlur={handleBlur}></input>
</div>
    );
};
export default Budget;
