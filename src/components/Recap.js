import React from "react";
//import ReactDOM from "react-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export class Recap extends React.Component {
    
    
    render() {
        return (
            <div className="main">
                <Header></Header>
            
                <div className="wrapper">
                </div>

                <Footer></Footer>
            </div>
        )
    }
}