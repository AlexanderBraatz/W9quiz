import React, { Component } from "react";

class HideMe extends Component {

    constructor( props) {
        super( props);

        this.state = {
          hidden: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
         hidden: true,
        });
    }

    render(){
            return(  
                this.state.hidden ?
                    null 
                :
                <p className = "lead card mb-3 bg-secondary" onClick= { this.handleClick } >
                { this.props.children }
                </p>
            )
    }
}


export default HideMe ; 