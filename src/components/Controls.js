import React, { Fragment } from 'react';

const Controls = props => {
  console.log(props);
  return (
    <Fragment>
      <button onClick={() => props.updateLocation('Desk')}>Go to your Desk</button>
      <button onClick={() => props.updateLocation('BreakRoom')}>Go to the BreakRoom</button>
      <button onClick={() => props.updateLocation('BossDesk')}>Go to Boss's Desk</button>
      <button onClick={props.grabCake}>Snag Creed's cake</button>
    </Fragment>
  );
};

export default Controls;
