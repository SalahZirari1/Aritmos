import React from "react";



export default function Button(props) {

   
    return (
        <div className="keypad-div">
                <div onClick={props.onClick} id="c" className="operation-button">C</div>
                <div onClick={props.onClick} id="del" className="operation-button">Del</div>
                <div onClick={props.onClick} id="division" className="operation-button"> / </div> 
                <div onClick={props.onClick} id="logo" className="button"></div>
                <div onClick={props.onClick} id="n7" className="button">7</div>
                <div onClick={props.onClick} id="n8" className="button">8</div>
                <div onClick={props.onClick} id="n9" className="button">9</div>
                <div onClick={props.onClick} id="multiplication" className="operation-button"> x </div>
                <div onClick={props.onClick} id="n4" className="button">4</div>
                <div onClick={props.onClick} id="n5" className="button">5</div>
                <div onClick={props.onClick} id="n6" className="button">6</div>
                <div onClick={props.onClick} id="minus" className="operation-button"> - </div>
                <div onClick={props.onClick} id="n1" className="button">1</div>
                <div onClick={props.onClick} id="n2" className="button">2</div>
                <div onClick={props.onClick} id="n3" className="button">3</div>
                <div onClick={props.onClick} id="plus" className="operation-button"> + </div>
                <div onClick={props.onClick} id="n0" className="button">0</div>
                <div onClick={props.onClick} id="dot" className="button">.</div>
                <div onClick={props.onClick} id="equal" className="operation-button">=</div>
        </div>
    )
}