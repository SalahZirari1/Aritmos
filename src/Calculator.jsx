import React, {useState } from "react";
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
        
        setCurrentNumebr(prev => className !== "operation-button" ? parseFloat(prev+textContent) : prev) //find a way to get the whole numgber not just latest digit
        
        setNumbersEnteredArray(prev => className === "operation-button" ? [...prev, currentNumber] : [...prev])
        setLastClickedClass(className)
        setMemory([className, textContent, currentNumber]);
        firstNumRendering()
    }
    console.log(currentNumber)
    function firstNumRendering(){
        if(numbersEnteredArray.length<2) console.log("in") //setResult(parseFloat(currentNumber===""?0:currentNumber))
    }
    
    if (numbersEnteredArray.length > 1 && memory[0] === "operation-button") calculate(memory[1])

    function calculate(operation) {
        switch (operation) {
            case " + ":
                console.log(numbersEnteredArray.length)
                var newNum = parseFloat(memory[2])
                setResult(prev => prev + newNum)
                numbersEnteredArray.length>1?setInputText(result+newNum+" + ") : setInputText(result+newNum)
                setMemory([])
                if(numbersEnteredArray.length>1)
                
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