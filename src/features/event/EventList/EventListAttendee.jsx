import React, { Component } from 'react';
import { Fragment } from 'react';
import { Item, Label, Segment } from 'semantic-ui-react';

export class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <Fragment>
        <Item.Image as='a' size='mini' circular src={attendee.photoURL} />
      </Fragment>
    );
  }
}

export default EventListAttendee;
