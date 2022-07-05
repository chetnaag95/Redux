import React, { Component } from 'react';

import Panel from '../Panel/Panel';

import './Colleagues.css';

const Colleague = ({ photo, name, status }) => (
  <tr className="colleague">
    <td>
      <img className="colleague__photo" src={photo} alt={name} />
    </td>
    <td className="colleague__info">
      <div className="colleague__name">{name}</div>
      <div className="colleague__status">{status}</div>
    </td>
  </tr>
);

class Colleagues extends Component {
  render() {
    let panelContent;
    if(this.props.loading) {
      panelContent = (<p>Loading...</p>)
    }else if(this.props.error) {
      panelContent = (<p>Something went wrong while fetching the data: <code>{this.props.error}</code> </p>)
    }else {
      panelContent = (<table className="colleagues-table">
        <colgroup>
          <col width="0" />
          <col width="100%" />
        </colgroup>
        <tbody>
          {this.props.data.map((employee, index) => (
            <Colleague
              key={index}
              photo={employee.picture.thumbnail}
              name={`${employee.name.title} ${employee.name.first} ${employee.name.last}`}
              status="Checked in"
            />
          ))}
        </tbody>
      </table>);
    }

    return (
      <Panel title="Colleagues">
        {panelContent}
      </Panel>
    );
  }
}

export default Colleagues;
