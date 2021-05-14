import './App.css';
import Home from './Home';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PlasticBin from './PlasticBin';
import OrganicBin from './OrganicBin';
import GlassBin from './GlassBin';
import PaperBin from './PaperBin';
import MetalBin from './MetalBin';
import EWasteBin from './EWasteBin';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-center">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/PlasticBin" component={PlasticBin}></Route>
            <Route exact path="/OrganicBin" component={OrganicBin}></Route>
            <Route exact path="/GlassBin" component={GlassBin}></Route>
            <Route exact path='/PaperBin' component={PaperBin}></Route>
            <Route exact path='/MetalBin' component={MetalBin}></Route>
            <Route exact path='/EWasteBin' component={EWasteBin}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
