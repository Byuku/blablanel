import React from 'react';
import '../App.scss';
import { FromToGoToForm } from "./FromToGoToForm";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from 'react-router-dom';

const drivers = [
  {
    id: "1",
    name : "Jessica",
    departureFrom : "Nice",
    arrivalTo : "Paris",
    stops: [],
    price: "35",
    note: "4,5",
    avis: "38"
  },
  {
    id: "2",
    name : "Pablo",
    departureFrom : "Paris",
    arrivalTo : "Amsterdam",
    stops: ["Belgique", "Rotterdam"],
    price: "52",
    note: "4,3",
    avis: "95"
  },
  {
    id: "3",
    name : "Marie",
    departureFrom : "Toulouse",
    arrivalTo : "Orlean",
    stops: [],
    price: "25",
    note: "3",
    avis: "68"
  },
  {
    id: "4",
    name : "Mona",
    departureFrom : "Limoges",
    arrivalTo : "Toulouse",
    stops: ["Cahors"],
    price: "45",
    note: "4",
    avis: "122"
  },
  {
    id: "5",
    name : "Kathy",
    departureFrom : "Paris",
    arrivalTo : "Reims",
    stops: [],
    price: "20",
    note: "3,8",
    avis: "93"
  },
  {
    id: "6",
    name : "Vicky",
    departureFrom : "Metz",
    arrivalTo : "Bruxelles",
    stops: [],
    price: "58",
    note: "4,1",
    avis: "29"
  },
  {
    id: "7",
    name : "Louis",
    departureFrom : "Paris",
    arrivalTo : "Mouroux",
    stops: [],
    price: "52",
    note: "4,3",
    avis: "95"
  },
  {
    id: "8",
    name : "Quentin",
    departureFrom : "Paris",
    arrivalTo : "Belgique",
    stops: ["Aulnay", "Aeroport CDG"],
    price: "130",
    note: "4,3",
    avis: "102"
  },
  {
    id: "9",
    name : "Melicia",
    departureFrom : "Paris",
    arrivalTo : "Amsterdam",
    stops: [],
    price: "65",
    note: "3,5",
    avis: "120"
  }
];

export class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drivers: drivers,
            fromTo: "",
            goTo: ""
        }

        this.onDepartureChange = this.onDepartureChange.bind(this);
        this.onArrivalChange = this.onArrivalChange.bind(this);
    }
    
    onDepartureChange(event) {
        this.setState({ fromTo : event.target.value });
    }

    onArrivalChange(event) {
        this.setState({ goTo : event.target.value });
    }
    
    render() {
        return(
            <div className="main">
                <Header></Header>

                <div className="wrapper">

                    <FromToGoToForm onDepartureChange={this.onDepartureChange} onArrivalChange={this.onArrivalChange}/>

                    <div className="text-center">
                        <Link to={{
                            pathname:'/result',
                            state: {
                                arrival: this.state.goTo,
                                departure : this.state.fromTo,
                                list : this.state.drivers
                            }
                        }}>
                        <button type="button" className="btn-search">Let's go!</button>
                        </Link>
                    </div>
                </div>

                <Footer></Footer>
            </div>
        )
    }
}
