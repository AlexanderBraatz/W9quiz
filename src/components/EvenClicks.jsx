import React, { Component } from "react";

class EvenClicks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            initial : true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            initial: ! this.state.initial,
        });
    }

    render(){

        let result = this.state.initial ? "even" : "odd";

        return(
            <>
                <button onClick= { this.handleClick } className="btn btn-secondary mb-3">
                    Click Me!
                </button>
                <p className = "lead card">
                    { result }
                </p>
            </>
        )
    }
}


export default EvenClicks; 