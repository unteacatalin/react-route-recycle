import React, { Component } from 'react';
import './PaperBin.css';

class PlasticBin extends Component {
    render() {
        let pozColor = "green";
        return (
            <div className="Paper-bin">
                <div className="Paper-text">
                    <ul className="Paper-first-ul">
                        <li><strong style={{color:pozColor}}>What is accepted in your bin?</strong><br/>
                        These items can go in your recycling bin, as long as they're clean and dry.<br/>
                        <ul>
                            <li>
                            <u><strong style={{color:pozColor}}>Paper</strong></u><br/>
                            Paper, newspaper and magazines are good to recycle.<br/>
                            If paper is soiled or wet, compost it.<br/>
                            </li>
                            <li>
                            <u><strong style={{color:pozColor}}>Flattened Cardboard & Paperboard</strong></u><br/>
                            Flatten and recycle all cardboard and paperboard.<br/>
                            Cardboard pizza delivery boxes without leftovers or liners should be recycled; but leftover crusts, cheese and other food should not.<br/>
                            </li>
                            <li>
                            <u><strong style={{color:pozColor}}>Food & Beverage Containers</strong></u><br/>
                            Rules for recycling milk cartons, juice boxes and food cartons vary by material composition.<br/>
                            Make sure containers are completely empty to avoid contamination.<br/>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PlasticBin;