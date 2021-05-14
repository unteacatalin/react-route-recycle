import React, { Component } from 'react';
import './MetalBin.css';

class MetalBin extends Component {
    render() {
        let pozColor = "green";
        return (
            <div className="Metal-bin">
                <div className="Metal-text">
                    <ul className="Metal-first-ul">
                        <li><strong style={{color:pozColor}}>What is accepted in your bin?</strong><br/>
                        These items can go in your recycling bin, as long as they're clean and dry.<br/>
                        <ul>
                            <li>
                            <u><strong style={{color:pozColor}}>Food & Beverage Cans</strong></u><br/>
                            Recycle empty tin, aluminum and steel cans.<br/>
                            Empty aerosol cans are also recyclable. If the can has a plastic lid, remove it before recycling.<br/>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MetalBin;