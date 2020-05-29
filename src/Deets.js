import React, { Component } from 'react';
import Button from "./Button"

class Deets extends Component {

    renderPup = () => {
        if (this.props.bestBoy !== null) {
            return <img src={this.props.bestBoy.image} alt="pupper pic"/>
        };
    }     

    renderName = () => {
        if(this.props.bestBoy !== null) {
            return <h2> {this.props.bestBoy.name} </h2>
        };
    }

    renderGoodBoy = () => {
        if (this.props.bestBoy !== null) {
        return this.props.bestBoy.isGoodDog ? "Good Dog!" : "DingDong"  
        };
    }
    

    render() {
        return (
            <>
            {this.renderPup()}
            {this.renderName()}

            <Button handleClick={this.props.handleClick}  dogStatus={this.renderGoodBoy} dog={this.props.bestBoy} />
        
           

            </>
        );
    }
}

export default Deets;
