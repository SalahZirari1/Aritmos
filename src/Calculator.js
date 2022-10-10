import React, { useState } from "react";
import Buttons from "./Components/Buttons";

export default function Calculator() {

    const [inputText, setInputText] = useState("");
    const [history, setHistory] = useState([]);
    const [lastEntered, setLastEntered] = useState("");
    const [currentNumber, setCurrentNumebr] = useState("");

    function handleClick(event) {  //update display/add nums/decide next operation
        const textContent = event.target.textContent;
        const className = event.target.className;
        
        if(lastEntered === "operation-button" && className==="operation-button") return;
        console.log(history.length)
        if(history.length>1 && className === "operation-button") console.log("calculate")

        setInputText(prev => prev + textContent);
        setCurrentNumebr(prev => className !== "operation-button" ? prev + textContent :"")
        setHistory(prev => className === "operation-button" ? [...prev, currentNumber] : [...prev])
        setLastEntered(className)
    }

    
   /* console.log(inputText)
    console.log(currentNumber)
    console.log(history) */
 
    function calculate(operation) {

    }




    return (
        <div className="calculator-div">

            <div id="display-div">
                <div id="operation-div">{inputText}</div>
                <div id="result-div"></div>
            </div>
            <Buttons onClick={handleClick} />
        </div>
    )
}