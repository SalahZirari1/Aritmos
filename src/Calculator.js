import { prettyDOM } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Buttons from "./Components/Buttons";

export default function Calculator() {

    const [inputText, setInputText] = useState("");
    const [history, setHistory] = useState([]);
    const [result, setResult] = useState(0);
    const [currentNumber, setCurrentNumebr] = useState("");

    function handleClick(event) {  //update display/add nums/decide next operation
        const textContent = event.target.textContent;
        const className = event.target.className;
        
        setInputText(prev => prev + textContent); 
        setCurrentNumebr(prev => className !== "operation-button" ?  prev+textContent :null)
        setHistory(prev => className === "operation-button" ? [...prev,currentNumber]:[...prev] )
    }

    console.log(inputText)
    console.log(currentNumber)
    console.log(history)
    function calculate(operation) {
    }










    return (
        <div className="calculator-div">

            <div id="display-div">
                <div id="operation-div">{inputText}</div>
                <div id="result-div">{result}</div>
            </div>
            <Buttons onClick={handleClick} />
        </div>
    )
}