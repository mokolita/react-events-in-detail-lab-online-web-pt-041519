import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    constructor(props){
        super(props)
    }

    handleClick = (e) => {
        const clickData = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(clickData)
    }

    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}