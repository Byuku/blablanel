import React from "react";
//import ReactDOM from "react-dom";

export class FromToGoToForm extends React.Component {
    
    
    render() {
        const {
            onDepartureChange,
            onArrivalChange,
        } = this.props;

        return(
            <div className="search">
                <h1 className="labelSearch">Où souhaitez vous allez ?</h1>

                <div className="text-center">
                    <div className="pdgbtm">
                        <input type="text" className="inputSearchDeparture" placeholder="Départ" onChange={ onDepartureChange }/> 
                    </div>
                    
                    <div className="pdgbtm">
                        <input type="text" className="inputSearchArrival" placeholder="Destination" onChange={ onArrivalChange }/>   
                    </div>
                </div>
            </div>
        )
    }
}