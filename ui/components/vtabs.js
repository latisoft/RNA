import React  from 'react';
import './vtabs.scss';

export default class Vtabs extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSelect(e) {
    let vtab = e.target.id.toLowerCase();
    // emitEID("VTAB_CHANGE", vtab);
  }
  render() {
    let sel   = this.handleSelect.bind(this);
    let tabs  = ['Home', 'Settings', 'Monitor', 'Reporter', 'Analyzer', 'Visualizer', 'Help' ];
    let vtabs = tabs.map(function(name, i) {
                  let src = ('.\\img\\vtab-' + name + '.png').toLowerCase();
                  return (
                    <div  key       = {i}
                          id        = {tabs}
                          className = 'vtab-btn'
                          onClick   = {sel}>
                          <div>{name}</div>
                    </div>);
                });
    return (
        <div>
          {vtabs}
        </div>
    );
  }
}