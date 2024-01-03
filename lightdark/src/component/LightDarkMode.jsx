import React, { Component } from "react";

class LightDarkMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateData: "State Value",
            backgroundColor: "white", //Initial background color
        };
    }

    btnClickMethodInClassArrow = () => {
        //Toggle the background color between "red" and "white"
        const newColor =
            this.state.backgroundColor === "white" ? "palevioletred" : "white";

        //Update the background color
        this.setState({ backgroundColor: newColor });

        //Apply the background color to the body element
        document.body.style.backgroundColor = newColor;
    };

    render() {
        const { backgroundColor } = this.state;

        return (
            <>
                <div style={{ backgroundColor }}>
                    <button onClick={this.btnClickMethodInClassArrow}>
                        <i className="fa-solid fa-circle-half-stroke"></i>
                    </button>
                </div>
            </>
        );
    }
}

export default LightDarkMode;
