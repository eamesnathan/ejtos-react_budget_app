import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { currency: selectedCurrency, dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState(selectedCurrency);

    const handleCurrencyChange = (newCurrency) => {
        setCurrency(newCurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    const currencySymbols = {
        USD: '$', // US Dollar
        GBP: '£', // British Pound
        EUR: '€', // Euro
        INR: '₹', // Indian Rupee
    };

    const currencyOptions = {
        USD: { symbol: '$', name: 'Dollar' },
        GBP: { symbol: '£', name: 'Pound' },
        EUR: { symbol: '€', name: 'Euro' },
        INR: { symbol: '₹', name: 'Rupee' },
    };

    const { symbol, name } = currencyOptions[currency] || {};


    return (
        <div className="btn-group">
            <button type="button" className="btn btn-success">
                Currency ({symbol} {name})
            </button>
            <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul className="dropdown-menu">
                {Object.entries(currencySymbols).map(([code, symbol]) => (
                    <li key={code}>
                        <button className="dropdown-item" type="button" onClick={() => handleCurrencyChange(code)}>
                            {symbol} {code}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChangeCurrency;
