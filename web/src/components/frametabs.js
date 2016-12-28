

const tabs = [{ 
  name: 'Tab 1',
  content: 'Content for 1'
}, {
  name: 'Tab 2', 
  content: 'Content for 2'
  
}, {
  name: 'Tab 3',
  content: 'Content for 3'
}];
 

const App = (props) => {
  return (
    <Tabs selected={props.firstSelect || 0}>
       
    {props.tabs.map(tab =>
      <Pane label={tab.name}>{tab.content}</Pane>)
    } 
    </Tabs>
  );
}

const Pane = (props) => {
  return <div>{props.children}</div>;
}

Pane.propTypes = {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
}


class Tabs extends React.Component {
  constructor(props) {
    super(props);  
    
    this.state = { selected: this.props.selected };
  }
  
  _renderTitles() {
    function labels(child, idx) {
      let activeClass = (this.state.selected === idx ? 'is-active' : '');
      return (
        <li role="tab" key={idx} aria-controls={`panel${idx}`}>
          <a className={activeClass}  onClick={this.onClick.bind(this, idx)} href="#">
            {child.props.label}
          </a>
        </li>
      );
    }
  
   return (
      <ul className="tabs__labels" role="tablist">
        {this.props.children.map(labels.bind(this))}
      </ul>
    );
  }
  
  
  onClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }
  
  render() {
    return (
      <div className="tabs">
        {this._renderTitles()}
        
        <div className="tabs__content">
          {this.props.children[this.state.selected]}
        </div>
      </div>);
  }
}
            
ReactDOM.render(<App tabs={tabs} firstSelect={1} />, document.getElementById('app'));