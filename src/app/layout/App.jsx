import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Fragment } from 'react';
import NavBar from '../../features/nav/NavBar/NavBar';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
