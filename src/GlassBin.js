import React, { Component } from 'react';
import './GlassBin.css';

class GlassBin extends Component {
    render() {
        let pozColor = "green";
        return (
            <div className="Glass-bin">
                <div className="Glass-text">
                    <ul className="Glass-first-ul">
                        <li><strong style={{color:pozColor}}>What is accepted in your bin?</strong><br/>
                        These items can go in your recycling bin, as long as they're clean and dry.<br/>
                        <ul>
                            <li>
                            <u><strong style={{color:pozColor}}>Glass Bottles & Containers</strong></u><br/>
                            To be recycled, glass waste needs to be purified and cleaned of contamination. Then, depending on the end use and local processing capabilities, it might also have to be separated into different colors. Many recyclers collect different colors of glass separately since glass retains its color after recycling. The most common colours used for consumer containers are clear (flint) glass, green glass, and brown (amber) glass. Glass is ideal for recycling since none of the material is degraded by normal use.<br/>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default GlassBin;