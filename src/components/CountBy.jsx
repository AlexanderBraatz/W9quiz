import React, { Component } from "react";

class CountBy extends Component {

    constructor( props ) {
        super( props );

        this.state = {
          count: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
         count: this.state.count + +this.props.step,
        });
    }

    render(){
        return(
            <p className = "lead card mb-3" onClick= { this.handleClick } >
            { this.state.count }
            </p>
        )
    }
}


export default CountBy ; 