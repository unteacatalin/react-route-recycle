import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav className="Header-nav">
                    <NavLink exact className="Header-link" activeClassName="Header-active-link" to="/">Home</NavLink>
                    <NavLink exact className="Header-link" activeClassName="Header-active-link" to="/EWasteBin">E-Waste</NavLink>
                    <NavLink exact className="Header-link" activeClassName="Header-active-link" to="/GlassBin">Glass</NavLink>
                    <NavLink exact className="Header-link" activeClassName="Header-active-link" to="/MetalBin">Metal</NavLink>                    
                    <NavLink exact className="Header-link" activeClassName="Header-active-link" to="/OrganicBin">Organic</NavLink>
                    <NavLink exact className="Header-link" activeClassName="Header-active-link" to="/PaperBin">Paper</NavLink>
                    <NavLink exact className="Header-link" activeClassName="Header-active-link" to="/PlasticBin">Plastic</NavLink>
                </nav>
            </div>
        );
    }
}

export default Header;