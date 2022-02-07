import React from "react";
const Option = (props) => { // we cant declear a function inside the stateless function to support your code insted of that we can write inside the jsx

    return (
        <div className="option" id={props.optionText}>
            <p className="option_text">{props.count}. {props.optionText}</p>
            
            <button className="button button--link" onClick={() => {
                props.deltetOption(props.optionText)
            }}>remove</button>
        </div>)
}
export default Option