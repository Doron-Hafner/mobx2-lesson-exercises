import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import ResInput from './ResInput';
import { Reservation } from '../stores/ReservationStore';

@inject("GeneralStore", "RestaurantStore")

@observer
class Restaurant extends Component{
    addRes = () => {
        const name = this.props.GeneralStore.name
        const num = this.props.GeneralStore.numPeople
        this.props.RestaurantStore.addRes(name, num)
    }
    render () {
        return (
            <div>
                <span>You have {this.props.RestaurantStore.openTables} open tables</span>
                {/* Add in # of people in restaurant */}
                {/* Add in # of completed tables with id "completedTables*/}
                <div>You Have {this.props.RestaurantStore.restPopulation} People In Restaurant</div>
                <div>You Have {this.props.RestaurantStore.completedTables} Completed Tables</div>
                <ResInput/>
                <button id="addRes" onClick={this.addRes}>Add Reservation</button> 
                {/* Make the Add Reservation button work */}
                <div className = "reservations">
                {/* Map reservation data to Reservation components here */}
                {this.props.RestaurantStore.reservations.map((r, index) => <Reservation res={r} key={index}/>)}
                </div>
            </div>
        )
    }
}

export default Restaurant