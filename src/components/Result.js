import React from 'react';
import '../App.scss';
import { Link } from 'react-router-dom';
import { Header } from "./Header";
import { Footer } from "./Footer";
import illustration from '../assets/alone.png';

function onSearchDriver(departure, arrival) {
    return function(driver) {
      const driverDeparture = driver.departureFrom.toLowerCase();
      const driverArrival = driver.arrivalTo.toLowerCase();
      const userDeparture = departure.toLowerCase();
      const userArrival = arrival.toLowerCase();
      const driverStops = driver.stops.map(str => str.toLowerCase())
  
      const isShared = driverDeparture === userDeparture || driverArrival === userArrival;
      const isSame = driverDeparture === userDeparture && driverArrival === userArrival;
  
      const isArrivalInSegment = driverStops.includes(userArrival);
      
      const isDepartureInSegment = driverStops.includes(userDeparture);
      
      return isSame || 
      (isShared && (isArrivalInSegment || isDepartureInSegment)) || 
      (isArrivalInSegment && isDepartureInSegment);
    };
}

export class Result extends React.Component {

    render() {
        const {
            location
        } = this.props

        const departure = (location.state.departure) !== undefined ? location.state.departure : "(VIDE)";
        const arrival = (location.state.arrival) !== undefined ? location.state.arrival : "(VIDE)";
        const filteredDrivers = location.state.list.filter(onSearchDriver(departure, arrival));

        return (
            <div className="main">
                <Header></Header>
            
                <div className="wrapper">
                    
                    <div className="searchResultat">
                        {/* <div className="backBtn">
                            <span>Retour</span>
                        </div> */}
                    
                        <div className="searchResultat-recap">
                            <h2 className="searchResultat-recap-cities">
                                <span className="city-departure">{departure}</span> <span className="city-arrival">{arrival}</span>
                            </h2>
                            
                            <p className="searchResultat-recap-hrsDate">
                                <span className="date">Ven. 15/10/2019</span> à <span className="hours">18:00</span> - <span className="traveler">2 personnes</span>
                            </p>
                        </div>

                        <div className="searchResultat-foundPath">
                            <span>{filteredDrivers.length} trajet(s) trouvé(s)</span>
                        </div>

                        <div className="searchResultat-drivers">          
                            <ul className="driverContainer">
                                {filteredDrivers.map((driver, index) =>
                                    {

                                    return <li className="driverElement" key={driver.id}>
                                        <Link to={{
                                            pathname:'/confirmation',
                                            state: {
                                                departure: departure,
                                                arrival : arrival,
                                                driver : driver
                                            }
                                        }}>                          
                                        
                                        <div className="driverElement-card">
                                            <div className="driverElement-additional">
                                                <div className="driverElement-userCard">
                                                    <div className="level center">
                                                        {driver.note} / 5
                                                    </div>
                                                    <div className="mycircle"></div>
                                                    <div className="points center">
                                                        {driver.avis} Avis
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="driverElement-general">
                                                <h3>{driver.name}</h3>
                                                <p className="general-fromTo">{driver.departureFrom}</p>
                                                <div className="general-stop">
                                                    {/* <div className="general-stopMore" onClick={onShowMoreStops} >Voir plus</div> */}
                                                    <div className="showMore">
                                                        {driver.stops.map((stop, i) =>
                                                            <p key={i} className="general-stopCity">{stop}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="general-goTo">{driver.arrivalTo}</p>
                                                <div className="bottom-left general-price">{driver.price}€</div>
                                            </div>
                                        </div>
                                        
                                        </Link>
                                    </li>
                                    }
                                )}
                            </ul>
                        </div>

                        {!filteredDrivers.length && 
                            <div className="driversNotFound">
                                <img src={illustration} alt="illustration" />
                                <p>Aucun voyage n'est prévu <br/>entre ces villes...</p>
                            </div>
                        }
                        
                        {/* <div className="result-right">
                            <h2>Recap voyage</h2>
                            <div className="moreInformation-container">
                                <div className="moreInformation-driverPix"></div>
                                <div className="moreInformation-name">Greg</div>
                                <div className="moreInformation-driverNoteAvis">
                                    <div className="driverNoteAvis">
                                        <p><span>4,5/5</span> - <span>140</span> avis</p>
                                    </div>
                                    <div className="driverAvis-container">
                                        <div className="driverAvis-element">
                                            <p className="commentName">Jason</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam ligula, lobortis in volutpat quis, consequat et nisl. Integer at leo ac elit suscipit tempus. Donec quis felis a tortor sollicitudin sollicitudin. Nunc iaculis dolor ipsum, quis finibus augue ornare quis.</p>
                                        </div>
                                        <div className="driverAvis-element">
                                            <p className="commentName">Jason</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quam ligula, lobortis in volutpat quis, consequat et nisl. Integer at leo ac elit suscipit tempus. Donec quis felis a tortor sollicitudin sollicitudin. Nunc iaculis dolor ipsum, quis finibus augue ornare quis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div> */}
                    </div>

                    {/* <div className="maps-container">
                        <img src="google-map-itineraire.jpg" alt=""/>

                        <p className="maps-trigger">Votre trajet</p>
                    </div> */}
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
