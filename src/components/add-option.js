import React from "react";

class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error };
        });
        e.target.elements.option.value = ``
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option_error">{this.state.error}</p>}
                <form onSubmit={this.handleAddOption} className="add-option_form">
                    <input type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}
export default AddOption