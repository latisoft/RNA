
import React        from 'react'
import { render }   from 'react-dom'

import App          from "./components/app"

const Pane1 = (props) => {
  return <div>Pane 1</div>;
}

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


// render(<App/>, document.getElementById('app'));
render(<App tabs={tabs} firstSelect={1} />, document.getElementById('app'));