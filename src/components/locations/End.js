import React, { Fragment } from 'react';

const End = props => (
  <Fragment>
    <h2>Location: You made it!</h2>
      <p>
        Michael's sobbing quiets down, and he thanks you for being his best friend. With his frown upside down for the first time in days, Michael orders a pizza party to be organized for the afternoon. Amid the chaos called a party, you sense this is your opporunity to dine and dash. Darryl sees you downstairs, but he obviously doesn't care. #SWEETFREEDOM
      </p>
      <button onClick={props.restart}>Play again</button>
  </Fragment>
);

export default End;
