import React, { Component } from 'react';

class Dog extends Component {
    
    render() {
        return (
                <span onClick={() => this.props.handleClick(this.props.dogInfo)}> 
                    {this.props.dogInfo.name}
                </span>
        );
    }
}

export default Dog;
