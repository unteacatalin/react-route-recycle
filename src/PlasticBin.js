import React, { Component } from 'react';
import './PlasticBin.css';

class PlasticBin extends Component {
    render() {
        let pozColor = "green";
        let negColor = "red";
        return (
            <div className="Plastic-bin">
                <div className="Plastic-text">
                    <ul className="Plastic-first-ul">
                        <li><strong style={{color:pozColor}}>What is accepted in your bin?</strong><br/>
                        These items can go in your recycling bin, as long as they're clean and dry.<br/>
                        <ul>
                            <li>
                            <u><strong style={{color:pozColor}}>Plastic Bottles & Containers</strong></u><br/>
                            Recycle plastics by shape: bottles, jars, jugs and tubs. The "chasing arrows" symbol doesn't necessarily mean it's recyclable.<br/>
                            Clean and dry containers, then put the cap back on before tossing in the bin.<br/>
                            <u><strong style={{color:pozColor}}>Food & Beverage Containers</strong></u><br/>
                            Make sure containers are completely empty to avoid contamination.
                            </li>
                        </ul>
                        </li>
                        <li><strong style={{color:negColor}}>What isn't accepted in your bin?</strong><br/>
                        Try to reduce and reuse these items instead of putting them in the trash.
                        <ul>
                            <li>
                            <u><strong style={{color:negColor}}>No Bagged Recyclables</strong></u><br/>
                            Do not bag recyclables. They must be loose in the bin.<br/>
                            If you collect your recyclables in a bag, empty them directly into your cart and reuse the bag!<br/>
                            </li>
                            <li>
                            <u><strong style={{color:negColor}}>No Plastic Bags</strong></u><br/>
                            Do not bag recyclables as materials inside may not get recycled. Reuse plastic bags.
                            </li>
                            <li>
                            <u><strong style={{color:negColor}}>No Plastic Wrap & Film</strong></u><br/>
                            Plastic wrap, bubble wrap, sandwich bags and freezer bags should not go in the recycle bin.<br/>
                            Reuse whenever possible for presents, moving, or storage of similar items.
                            </li>
                            <li>
                            <u><strong style={{color:negColor}}>No Cups with Wax or Plastic Coatings</strong></u><br/>
                            Cups with plastic or waxed coatings are not recyclable. The plastic lids should be trashed as well.
                            </li>
                            <li>
                            <u><strong style={{color:negColor}}>No Polystyrene Foam & Plastic</strong></u><br/>
                            Polystyrene foam, plastic "to-go" containers and cups are made of non-recyclable materials, and are not acceptable in the curbside recycling program.
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