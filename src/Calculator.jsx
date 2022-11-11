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
        setCurrentNumebr(prev => className !== "operation-button" ? parseFloat(prev+textContent) : "") 
        setNumbersEnteredArray(prev => className === "operation-button" ? [...prev, currentNumber] : [...prev])
        setLastClickedClass(className)
        setMemory([className, textContent, currentNumber]);
        
    }
    
    //DONT TOUCH THIS 
    //without this the first num entered doesnt count i.e 2+3=3
    if (memory[0] === "operation-button" && numbersEnteredArray.length==1) {setResult(numbersEnteredArray[0]);setMemory([]);}
    
    //triggers the calculation method when there are two numbers
    if (numbersEnteredArray.length > 1 && memory[0] === "operation-button") calculate(memory[1])

    //console.log("NumbersEntered:"+numbersEnteredArray)
    //console.log("prevResult:"+result)
/*     console.log("currentNumber:"+memory[2]) 
 */
    function calculate(operation) {
        switch (operation) {
            case " + ":
                
                var newNum = parseFloat(memory[2])
                setResult(prev => prev + newNum)
                numbersEnteredArray.length>1 ? setInputText(result+newNum+" + ") : setInputText(result+newNum)
                setMemory([])                
                break;
            
            case " - ":
                var newNum = parseFloat(memory[2])
                setResult(prev => prev - newNum)
                numbersEnteredArray.length>1 ? setInputText(result-newNum+" - ") : setInputText(result-newNum)
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
{/*             {console.log("low res:"+result)}
 */}            <div id="display-div">
                <div id="operation-div">{isNaN(result)?0:result}</div>
                <div id="result-div">{inputText}</div>
            </div>
            <Buttons onClick={handleClick} />
        </div>
    )
}