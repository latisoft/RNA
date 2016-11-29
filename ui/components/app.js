
import React  from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './app.scss';
import io from 'socket.io-client';
let socket = io();


export class App extends React.Component {
  constructor(props) {
    super(props);

    console.log("App start");
    socket.on('server event', function(data) {
      console.log("socket on");
      console.log(data);
    });

  }
  componentDidMount() {

  }
  componentWillUnmount() {

  }

  f1(e) {
    console.log("Try f1");
    socket.emit('client event', {socket: 'io1'});
  }
  f2(e) {
    console.log("Try f2");
    socket.emit('client event', {socket: 'io2'});
  }
  render() {
    let cmd1 = this.f1.bind(this);
    let cmd2 = this.f2.bind(this);

    const buttonsInstance = (
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="primary" onClick={cmd1}>CMD 1</Button>
        <Button bsStyle="success" onClick={cmd2}>CMD 2</Button>
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
