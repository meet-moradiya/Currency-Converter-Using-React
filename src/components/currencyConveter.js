import React, { useEffect, useState } from "react";
import "./currency.css";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function CurrencyConveter() {
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const currencyInfo = useCurrencyInfo(from);
    const currencyOptions = Object.keys(currencyInfo);

    function swap() {
        setFrom(to);
        setTo(from);
    }

    useEffect(() => {
        setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }, [from, to, amount, currencyInfo]);

    return (
        <div class="mainDiv">
            <h1>Currency Conveter</h1>
            <div class="from">
                <div class="detail">
                    <h3>From</h3>
                    <h3>Currency Type</h3>
                </div>
                <div class="value">
                    <input type="number" placeholder="enter value" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <select value={from} onChange={(e) => setFrom(e.target.value)}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <center>
                <button class="swap" onClick={swap}>
                    SWAP
                </button>
            </center>

            <div class="to">
                <div class="detail">
                    <h3>To</h3>
                    <h3>Currency Type</h3>
                </div>
                <div class="value">
                    <input type={"text"} placeholder="0" value={convertedAmount} disabled />
                    <select value={to} onChange={(e) => setTo(e.target.value)}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default CurrencyConveter;
