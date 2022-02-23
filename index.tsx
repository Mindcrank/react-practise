import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

//My Components
import Hello from './Components/Hello';
import RandoObj from './Components/RandoObj';
import SchoolCard from './Components/SchoolCard';
//Fontawesome SVG icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faChessRook } from '@fortawesome/free-solid-svg-icons';
library.add(fas, faChessRook);

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
        <SchoolCard />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
