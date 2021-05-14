import React, { Component } from 'react';
import './OrganicBin.css';

class OrganicBin extends Component {
    render() {
        let pozColor = "green";
        return (
            <div className="Organic-bin">
                <div className="Organic-text">
                    <ul className="Organic-first-ul">
                        <li><strong style={{color:pozColor}}>What is Organics Recycling?</strong><br/>
                        Organics recycling is the recycling of <strong>organic material</strong> - anything that was once alive - <strong>into compost</strong>, a special soil amendment. Composting happens naturally and requires very little energy input.
                        </li>
                        <li><strong style={{color:pozColor}}>What can go in the organics bin?</strong><br/>
                        About 30% of what we usually throw away is actually organics including food scraps and food-soiled paper products.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default OrganicBin;