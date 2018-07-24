import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const BossDesk = props => (
  <Fragment>
    <h2>Location: Boss's Lair (Lion's Den)</h2>
      <p>
        You find your boss sob singing Goodbye Lover by James Blunt on repeat at his desk. Even though you know he's having a rough time with the break up, time is of the essence. Forced into a corner, you ask if you can leave early. Michael's sobbing intensifies and he chokes out only if he can go with you to lift his spirits and forget his heartache. How will you escape sans Michael?
      </p>
      <div className="container">
        <button onClick={() => props.updateLocation('Desk')}>Go to your desk</button>
        <button onClick={() => props.updateLocation('BreakRoom')}>
          Go to breakroom
        </button>
        {
          props.hasCake ?
            <button onClick={() => props.updateLocation('End')}>
              Tempt with cake
            </button> :
            ''
        }
      </div>
  </Fragment>
);

BossDesk.propTypes = {
  hasCake: PropTypes.bool.isRequired,
  updateLocation: PropTypes.func.isRequired
};

export default BossDesk;
