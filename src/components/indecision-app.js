import React from "react";
import AddOption from "./add-option";
import Options from "./options";
import Action from "./action";
import Header from "./header";
import OptionModal from "./modal";

class IndecisionApp extends React.Component {
    state = {
        options: this.props.defaultOptions,
        modalState : undefined 
    }
    handleDeleteOptions =() => {
        this.setState(() => ({ options: [] }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState({
            modalState : option
        })
    }
    removeModal = () =>{
        this.setState({
            modalState:undefined
        })
    }
    componentDidMount() {
        const json = localStorage.getItem(`options`)
        const myoptions = JSON.parse(json)
        if (myoptions) {
            this.setState(() => {
                return {
                    options: myoptions
                }
            })
        }
    }

    handleAddOption = (option) => {
        console.log(`its working `);
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    deltetOption =(option) => {

        this.setState(() => {
            return {
                options: this.state.options.filter((myoption) => { //filter works if the elemt is true will return him 
                    return option != myoption
                })
            }
        })
    }
    

    render() {
        const title = `Indecision`
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div className="main">
                <Header title={title} subtitle={subtitle} />
                <div className="main_sub">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="option_list">
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        deltetOption={this.deltetOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                    </div>
                    <OptionModal modalState={this.state.modalState} removeModal={this.removeModal} />
                </div>
            </div>
        );
    }
    
    componentDidUpdate(prevProp, prevSate) { 
        if (this.state.options !== prevSate.options) {
            let json = JSON.stringify(this.state.options)
            localStorage.setItem(`options`, json)
            console.log(localStorage.getItem(`options`));
        }
    }

    componentWillUnmount() {
        console.log(`im out`); 
    }
}

IndecisionApp.defaultProps = {
    defaultOptions: [`ahmad`, `mohammad`]
}

export default IndecisionApp