import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import { Column, Row } from '../Grid/Grid';
import ButtonGroup from '../Button/ButtonGroup';
import Button from '../Button/Button';

import * as FLAVORS from '../../constants/flavors';

import './NewOrder.css';

const DEFAULT_STATE = {
  customerName: '',
  scoops: {},
  cone: false,
};

class NewOrder extends Component {
  state = {
    ...DEFAULT_STATE,
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Order data:', this.state);
    this.props.placeOrder(this.state);
    this.setState(DEFAULT_STATE);
  };

  handleDecreaseFlavor = (e, flavorName) => {
    e.preventDefault();
    if (!this.state.scoops[flavorName]) {
      return;
    }

    if (this.state.scoops[flavorName] === 1) {
      const updatedScoops = {
        ...this.state.scoops,
      };
      delete updatedScoops[flavorName];

      this.setState({
        scoops: updatedScoops,
      });
    } else {
      this.setState({
        scoops: {
          ...this.state.scoops,
          [flavorName]: this.state.scoops[flavorName] - 1,
        },
      });
    }
  };

  handleIncreaseFlavor = (e, flavorName) => {
    e.preventDefault();
    this.setState({
      scoops: {
        ...this.state.scoops,
        [flavorName]: (this.state.scoops[flavorName] || 0) + 1,
      },
    });
  };

  handleConeOrCup = (e, cone) => {
    e.preventDefault();
    this.setState({ cone })
  }

  render() {
    return (
      <Panel title="New order">
        <form className="new-order-form" onSubmit={(e) => this.handleFormSubmit(e)}>
          <Row>
            <Column>
              <label htmlFor="customer-name">Customer name</label>
              <input
                type="text"
                id="customer-name"
                name="name"
                value={this.state.customerName}
                onChange={e => this.setState({ customerName: e.target.value })}
              />
            </Column>
            <Column>
              <label>Container</label>
              <ButtonGroup>
                <Button
                  label="Cup"
                  priority={!this.state.cone ? 'primary' : 'secondary'}
                  onClick={(e) => this.handleConeOrCup(e, false)}
                />
                <Button
                  label="Cone"
                  priority={this.state.cone ? 'primary' : 'secondary'}
                  onClick={(e) => this.handleConeOrCup(e, true)}
                />
              </ButtonGroup>
            </Column>
          </Row>

          <label>Scoops</label>
          <table className="new-order-scoops-table">
            <colgroup>
              <col width="80%"/>
              <col width="20%"/>
            </colgroup>
            <tbody>
            {Object.keys(FLAVORS).map(flavor => (
              <tr key={flavor}>
                <td>
                  <strong>{flavor}</strong>
                </td>
                <td>
                  <ButtonGroup>
                    <Button size="small" label="-" priority="primary" onClick={(e) => this.handleDecreaseFlavor(e, flavor)} />
                    <Button size="small" label={this.state.scoops[flavor] || 0} priority="secondary" />
                    <Button size="small" label="+" priority="primary" onClick={(e) => this.handleIncreaseFlavor(e, flavor)} />
                  </ButtonGroup>
                </td>
              </tr>
            ))}
            </tbody>
          </table>

          <Button className="new-order-submit-button" label="Add order" type="submit" />
        </form>
      </Panel>
    );
  }
};

export default NewOrder;
