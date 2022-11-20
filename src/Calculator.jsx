import React, {memo, useState } from "react";
import Buttons from "./Components/Buttons";

export default function Calculator() {

    const [inputText, setInputText] = useState("");
    const [numbersEnteredArray, setNumbersEnteredArray] = useState([]);
    const [lastClickedClass, setLastClickedClass] = useState(); 
    const [currentNumber, setCurrentNumebr] = useState("");
    const [result, setResult] = useState(0);
    const [memory, setMemory] = useState([]);
    const [operationsEntered,setOperationsEntered] = useState([]);



    // needs to remember last operation entered
    function handleClick(event) { 

        const textContent = event.target.textContent;
        const className = event.target.className;
        
        
        //console.log(lastClickedClass)        
        //if (memory[0] === "operation-button" && className === "operation-button" && textContent !=="C") return; //need to fix subsequent operaion buttons
        if (textContent==="C") {reset();return;}
        
        setInputText(prev => prev + textContent);
        setCurrentNumebr(prev => className !== "operation-button" ? parseFloat(prev+textContent) : "") 
        setNumbersEnteredArray(prev => className === "operation-button" ? [...prev, currentNumber] : [...prev])
        setOperationsEntered(prev=> {
            if(className==="operation-button" && prev.length>0)
            {
                if(prev.length>1) return prev=[prev[1],textContent]
                else return [prev[0],textContent]
            }
            else if(className==="operation-button") return [textContent]
            else if(className!=="operation-button") return prev
            else return []
        })
        setLastClickedClass(className)
        setMemory([className, textContent, currentNumber]); 
    }
    

    //without this the first num entered doesnt count i.e 2+3=3
    if (memory[0] === "operation-button" && numbersEnteredArray.length===1) {setResult(numbersEnteredArray[0]);setMemory([]);}
    
    //triggers the calculation method when there are two numbers
    if (numbersEnteredArray.length > 1 && memory[0] === "operation-button") calculate(operationsEntered[0],operationsEntered[1])

    
    function calculate(operation,displayOp) {
        switch (operation) {
            case " + ":
                
                var newNum = parseFloat(memory[2])
                setResult(prev => prev + newNum)
                numbersEnteredArray.length>1 ? setInputText(result+newNum+displayOp) : setInputText(result+newNum)
                setMemory([])                
                break;
            
            case " - ":
                var newNum = parseFloat(memory[2])
                setResult(prev => prev - newNum)
                numbersEnteredArray.length>1 ? setInputText(result-newNum+displayOp) : setInputText(result-newNum)
                setMemory([])                
                break;
            default:
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

//todo:
// line 52: refractor switches into functions
// line 8:  refractor hook
