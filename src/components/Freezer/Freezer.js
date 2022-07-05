import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import Button from '../Button/Button';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';

class Freezer extends Component {
  
  render() {
    const flavors = Object.keys(this.props.flavors).map(flavorName =>( <FreezerFlavor 
      onClickRestock={() => this.props.onClickRestock(flavorName)}
      onClickRemove={() => this.props.onClickRemove(flavorName)}
      key={flavorName} 
      flavorName={flavorName} 
      scoops={this.props.flavors[flavorName]} />
    ))
    return (
      <Panel title={`Freezer (°${this.props.temperature || 0}C)`}>
        <Button label="Add Product" onClick={this.props.onClickAddProduct}/>
        <br />
        {flavors}
      </Panel>
    );
  }
}

export default Freezer;

