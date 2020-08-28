import React, { Component } from "react";

class MinimumLength extends Component {
    constructor(props) {
        super(props);

        this.state= {
            input: "" ,
        }

    }

    handleChange(e) {
        this.setState({
            input: e.currentTarget.value,
        })
    }

    render(){

        let test = this.state.input.length < this.props.length ? "Too short!" : "Much better.";
        return(
            <div 
            className="input-group mb-3"> 
                <div 
                className="input-group-prepend">
                    <span 
                    className="input-group-text">
                        { test }
                    </span>
                </div>
                <input
                    type= "text"
                    onChange= {(e) => this.handleChange(e)}
                    className= "form-control"
                    value= { this.state.input }
                    placeholder= "type here" 
                />
            </div>

        )
    }


    
}
export default MinimumLength;