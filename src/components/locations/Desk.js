import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Desk = props => (
  <Fragment>
    <h2>Location: Your Cell (Your Cubicle)</h2>
      <p>
        You manage to avoid further interaction and sit down accross from your archnemisis/deskmate, Dwight. Disgusted with the growing pile of freshly clipped toenails, you decide retreat is necessary. Where will you take your chances next?
      </p>
      <div className="container">
        <button onClick={() => props.updateLocation('BossDesk')}>
          Go to your boss's desk
        </button>
        <button onClick={() => props.updateLocation('BreakRoom')}>
          Go to breakroom
        </button>
      </div>
  </Fragment>
);

Desk.propTypes = {
  updateLocation: PropTypes.func.isRequired
};

export default Desk;
