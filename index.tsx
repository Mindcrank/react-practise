import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Components/Hello';
import RandoObj from './Components/RandoObj';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'NAMEname',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)fdsfsdf</p>
        <RandoObj />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
