import * as React from 'react';

//Bootstrap
import Alert from 'react-bootstrap/Alert';
/*
class NavigationElements extends Component {
  state = {};

  render() {
    // Return JSX code
    //return <div> hello</div>;
    return <Navbar>NAVIGATION IS HERE</Navbar>;
  }
}

const NavigationElements: React.FC = () => {
  //return <Navbar></Navbar>;
  return <div></div>;
};*/

function NavigationElements() {
  //const element = <div></div>;
  const element = (
    <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Alert>
  );
  return element;
}

export default NavigationElements;
