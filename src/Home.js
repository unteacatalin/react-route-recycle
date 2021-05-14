import React, { Component } from 'react';
import './Home.css';
import Plastic from './img/plastic-bin-t.png';
import Metal from './img/metal-bin-t.png';
import Organic from './img/organic-bin-t.png';
import Paper from './img/paper-bin-t.png';
import Glass from './img/glass-bin-t.png';
import EWaste from './img/e-waste-bin-t.png';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <form>
                    <NavLink exact activeClassName="Home-active-img" to="/MetalBin"><img className="Home-img Metal" src={Metal} alt="Metal bin" /></NavLink>
                    <NavLink exact activeClassName="Home-active-img" to="/OrganicBin"><img className="Home-img Organic" src={Organic} alt="Organic bin" /></NavLink>
                    <NavLink exact activeClassName="Home-active-img" to="/PlasticBin"><img className="Home-img Plastic" src={Plastic} alt="Plastic bin" /></NavLink>
                    <NavLink exact activeClassName="Home-active-img" to="/PaperBin"><img className="Home-img Paper" src={Paper} alt="Paper bin" /></NavLink>
                    <NavLink exact activeClassName="Home-active-img" to="/GlassBin"><img className="Home-img Glass" src={Glass} alt="Glass bin" /></NavLink>
                    <NavLink exact activeClassName="Home-active-img" to="/EWasteBin"><img className="Home-img EWaste" src={EWaste} alt="E-Waste bin" /></NavLink>
                </form>
            </div>
        );
    }
}

export default Home;