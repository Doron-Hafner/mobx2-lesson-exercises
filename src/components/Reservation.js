import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

//inject your store here
@inject("RestaurantStore")
@observer
class Reservation extends Component{
    completeRes = e => {
        this.props.RestaurantStore.completeRes(e.target.value)
    }
    seatRes  = e => {
        this.props.RestaurantStore.seatRes(e.target.value)
    }
    render () {
        return (
            <div className={this.props.res.completed&&'conditional'}>
                <h5>{this.props.res.name}: {this.props.res.numPeople}</h5>
                <button onClick={this.seatRes} value={this.props.res.id} >seat reservation</button>
                <br/>
                (<button onClick={this.completeRes} value={this.props.res.id} >complete reservation</button>)
            </div>
        )
    }
}

export default Reservation