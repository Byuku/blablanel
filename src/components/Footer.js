import React from 'react';
import '../App.scss';
import illustration from '../assets/illus-voiture.png';

export class Footer extends React.Component {
    
    render() {

        return(
            <footer>
                <img src={illustration} alt="illustration" />
            </footer>
        )
    }
}
