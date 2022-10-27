import { type } from "@testing-library/user-event/dist/type";
import React, {useState } from "react";
import { useEffect } from "react";
import Buttons from "./Components/Buttons";

export default function Calculator() {

    const [inputText, setInputText] = useState("");
    const [numbersEnteredArray, setNumbersEnteredArray] = useState([]);
    const [lastClickedClass, setLastClickedClass] = useState("");
    const [currentNumber, setCurrentNumebr] = useState("");
    const [result, setResult] = useState(0);
    const [memory, setMemory] = useState([]);


    function handleClick(event) { 
        const textContent = event.target.textContent;
        const className = event.target.className;

        if (lastClickedClass === "operation-button" && className === "operation-button" && textContent !=="C") return;
        if (textContent==="C") {reset();return;}


        setInputText(prev => prev + textContent);
        setCurrentNumebr(prev => className !== "operation-button" ? parseFloat(textContent) : prev)
        setNumbersEnteredArray(prev => className === "operation-button" ? [...prev, currentNumber] : [...prev])
        setLastClickedClass(className)
        setMemory([className, textContent, currentNumber]);
        firstNumRendering()
    }
    function firstNumRendering(){
        if(numbersEnteredArray.length<2) setResult(parseFloat(currentNumber===""?0:currentNumber))
    }
    
    console.log(memory[2])
    if (numbersEnteredArray.length > 1 && memory[0] === "operation-button") calculate(memory[1])

    function calculate(operation) {
        switch (operation) {
            case " + ":
                
                var newNum = parseFloat(memory[2])
                setResult(prev => prev + newNum)
                setMemory([])
                
                break;
            }
    }

    function reset(){
        setInputText("")
        setNumbersEnteredArray([])
        setLastClickedClass("")
        setCurrentNumebr("")
        setResult(0)
        setMemory([])
}
    return (
        <div className="calculator-div">

            <div id="display-div">
                <div id="operation-div">{isNaN(result)?0:result}</div>
                <div id="result-div">{inputText}</div>
            </div>
            <Buttons onClick={handleClick} />
        </div>
    )
}