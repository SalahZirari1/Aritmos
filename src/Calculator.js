import React, { useEffect, useState } from "react";
import Buttons from "./Components/Buttons";

export default function Calculator() {

    const [inputText, setInputText] = useState("");
    const [history, setHistory] = useState([]);
    const [result, setResult] = useState(0);

    function handleClick(event) {
        const textContent = event.target.textContent;
        setInputText(prev => prev + textContent);

        const className = event.target.className;
        const test = result
        if (className === "operation-button") {
            switch (textContent) {
                case " + ":
                    console.log("inputtext:" +inputText)
                    setResult(prev => prev + parseFloat(inputText))
                    console.log(result)
                    setInputText(test);
                    break;
                case "C":
                    setResult(0);
                    setInputText("");
                    setHistory([]);
                    break
            }}
    }
    //console.log("result:" + result)
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