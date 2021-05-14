import React, { Component } from 'react';
import './EWasteBin.css';

class EWasteBin extends Component {
    render() {
        let pozColor = "green";
        return (
            <div className="EWaste-bin">
                <div className="EWaste-text">
                    <ul className="EWaste-first-ul">
                        <li><strong style={{color:pozColor}}>What is accepted in your bin?</strong><br/>
                        These items can go in your recycling bin, as long as they're clean and dry.<br/>
                        <ul>
                            <li>
                            <u><strong style={{color:pozColor}}>Discarded electrical or electronic devices.</strong></u><br/>
                            E-Waste is classified in ten categories: Large household appliances (including cooling and freezing appliances), Small household appliances, IT equipment (including monitors), Consumer electronics (including TVs), Lamps and Luminaires, Toys, Tools, Medical devices, Monitoring and control instruments and Automatic dispensers. These include used electronics which are destined for reuse, resale, salvage, recycling, or disposal as well as re-usables (working and repairable electronics) and secondary raw materials (copper, steel, plastic, etc.). The term "waste" is reserved for residue or material which is dumped by the buyer rather than recycled, including residue from reuse and recycling operations, because loads of surplus electronics are frequently commingled (good, recyclable, and non-recyclable).
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default EWasteBin;