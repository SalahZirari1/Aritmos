import { type } from "@testing-library/user-event/dist/type";
import React, { memo, useState } from "react";
import { useEffect } from "react";
import Buttons from "./Components/Buttons";

export default function Calculator() {

    const [inputText, setInputText] = useState("");
    const [numberEntered, setNumberEntered] = useState([]);
    const [lastClicked, setLastClicked] = useState("");
    const [currentNumber, setCurrentNumebr] = useState("");
    const [result, setResult] = useState(2);
    const [memory,setMemory]=useState([]);

    
    
    function handleClick(event) {  //update display/add nums/decide next operation
        const textContent = event.target.textContent;
        const className = event.target.className;

        if (lastClicked === "operation-button" && className === "operation-button") return;

        
        setInputText(prev => prev + textContent);
        setCurrentNumebr(prev => className !== "operation-button" ? prev + textContent : "")
        setNumberEntered(prev => className === "operation-button" ? [...prev,currentNumber] : [...prev]) 
        setLastClicked(className)
        setMemory([className,textContent,currentNumber])
        
    }
    console.log(numberEntered)
    console.log(memory)
    if (numberEntered.length > 1 && memory[0] === "operation-button") calculate(memory[1])

    function calculate(operation) {
          /* console.log("in")
        console.log(operation) */
        switch (operation) {
            case " + ":
                console.log('in')
                var newNum = parseFloat(memory[2])

                useEffect(
                    //setResult(prev=> prev + newNum),[] 
                )
                console.log(result)
                
                break;
        }

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