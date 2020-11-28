import React from 'react';
import '../App.scss';

export class Confirmation extends React.Component {
    
    render() {
        const {
            location
        } = this.props

        const confirmationDpt = (location.state.departure) !== undefined ? location.state.departure : "(VIDE)";
        const confirmationArvl = (location.state.arrival) !== undefined ? location.state.arrival : "(VIDE)";
        const driverName = (location.state.driver.driverName) !== undefined ? location.state.driver.driverName : "(VIDE)";

        console.log(confirmationDpt, confirmationArvl, driverName);

        return(
            <p>Je suis la confirmation !</p>
        )
    }
}
