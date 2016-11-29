
import React 	from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './app.scss';

export class App extends React.Component {

  constructor(props) {
    super(props);
  }
  tryGet(e) {
    console.log("Try Get");
  }
  tryPost(e) {
    console.log("Try Post");
  }
  render() {
    let hGet = this.tryGet.bind(this);
    let hPost= this.tryPost.bind(this);

    const buttonsInstance = (
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="primary" onClick={hGet }>Get</Button>
        <Button bsStyle="success" onClick={hPost}>Post</Button>
      </ButtonToolbar>
    );
  	return (
  		<div id="app-framework">
  			Webapp Framework: Xample
        <div className="row">
          <div className="col-md-4">Get</div>
          <div className="col-md-4">
            {buttonsInstance}
          </div>
          <div className="col-md-4">Display</div>
        </div>
  		</div>
    );
  }
}
export default App;
