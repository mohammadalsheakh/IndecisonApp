import React from "react";
const Header = (props) => {
    return (
        <div className="header">
            <div className="main_sub">
            <h1 className="header_title">{props.title}</h1>
            <h2 className="header_subtitle">{props.subtitle}</h2>
        </div>
        </div >
    )
}
Header.defaultProps = {
    title: `this is default `
}

export default Header