import React from "react";
import Option from "./option"
const Options = (props) => {
    return (
        <div id="options">
            <div className="options_wedget">
                <h3>Your Options</h3>
                <button onClick={props.handleDeleteOptions} className="button button--link">Remove All</button>
            </div>
            <div>
                {props.options == 0 && <p className="options_massege">Pleas add an Option </p>}
                {
                    props.options.map((option,index) => <Option key={option} optionText={option}
                    count={index +1}
                        deltetOption={props.deltetOption} />)
                }
            </div>
        </div>
    );
}
export default Options