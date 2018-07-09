import React, { Fragment } from 'react';

const Start = props => (
  <Fragment>
    <h2>Location: The Office</h2>
      <p>
        It is 4:20pm on a Friday, and your top pal, Pam, has an extra ticket to the Pabst Music Festival on the Waterfront. You're stuck at work until 6pm, but Pam is coming to pick you up at five. You must navigate through the perils of Coropate America to reach the safe harbor that is Pabst Music Festival. Your boss, Michael, back from Sandals, Jamaica is heading straight towards you. Your move, Jim!
      </p>
      <button onClick={() => props.updateLocation('Desk')}>Go to your desk</button>
      <button onClick={() => props.updateLocation('BossDesk')}>Go to your boss's desk</button>
      <button onClick={() => props.updateLocation('BreakRoom')}>Go to breakroom</button>
  </Fragment>
);

export default Start;
