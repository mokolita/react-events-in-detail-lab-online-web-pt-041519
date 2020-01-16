import React, { Component } from 'react'

export default class DelayedButton extends Component {

    constructor(props){
        super(props)
    }

    handleClick = (e) => {
        setTimeout(() => {
            e.persist(); 
            this.props.onDelayedClick(e, this.props.delay)}
            )}
    

    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}