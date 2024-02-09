import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function StockData() {
    var nalcoPrice = usePrice("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC");
    var sbiPrice = usePrice("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI");
    var myTime = useTime();
    return (
        <>
            <h1>Latest Time: {myTime}</h1>
            <h1>The SBi Stock Price is: {sbiPrice}</h1>
            <h1>The NALCO Stock Price is: {nalcoPrice}</h1>
        </>
    ) 
}

function usePrice(stockUrl) {
    var [stockPrice, setStockPrice] = useState(0);
    var stockOldValue = useRef(0);
    useEffect(() => {
        setInterval(() => {
            axios.get(stockUrl).then((response) => {
                if (stockOldValue.current != response.data.data.pricecurrent) {
                    stockOldValue.current = response.data.data.pricecurrent;
                    setStockPrice(response.data.data.pricecurrent);
                }
            })
        }, 1000)
    }, [])
    
    return stockPrice;
}


function useTime() {
    var [currentTime, setCurrentTime] = useState(returnCurrentTime());
    
    function returnCurrentTime() {
        return `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
    }
    
    useEffect(() => {
        setInterval(() => {
            setCurrentTime(returnCurrentTime());
        }, 1000)
    }, [])
    
    return currentTime;
}
