import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
//bootstrap
import { Container, Row, Col } from 'react-bootstrap';

//My Components
import Hello from './Components/Hello';
import RandoObj from './Components/RandoObj';
import SchoolCard from './Components/SchoolCard';
import NavigationElements from './Components/Nav';
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
      <Container fluid>
        <NavigationElements />
        <div>
          <Hello name={this.state.name} />
          <p>Start editing to see some magic happen :)fdsfsdf</p>
          <RandoObj />
          <SchoolCard />
        </div>
      </Container>
    );
  }
}

render(<App />, document.getElementById('root'));
