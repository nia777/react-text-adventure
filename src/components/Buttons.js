import React, { Fragment } from 'react';

const Buttons = props => {
  const buttonData = [
    { name: 'Desk', text: 'Go to your desk', type: 'location' },
    { name: 'BossDesk', text: 'Go to boss\'s desk', type: 'location' },
    { name: 'BreakRoom', text: 'Go to the breakroom', type: 'location' },
    { name: 'cake', text: 'Snag Creed\'s cake', type: 'action' },
    { name: 'tempt', text: 'Tempt with cake', type: 'action' },
    { name: 'restart', text: 'Play again', type: 'action' }
  ];

  // TODO: could probably pull this out into a utility function
  return (
    <Fragment>
      {
        buttonData
          .reduce((acc, current) => {
            if(props.location !== 'End') {
              if(current.type === 'location' && props.location !== current.name){
                const action = () => props.updateLocation(current.name);
                acc.push({ ...current, action });
              }
            }
    
            if(current.name === 'cake'){
              if(!props.hasCake && props.location === 'BreakRoom'){
                acc.push({ ...current, action: props.toggleCake });
              }
            }
    
            if(current.name === 'tempt'){
              if(props.hasCake && props.location === 'BossDesk'){
                const action = () => props.updateLocation('End');
                acc.push({ ...current, action });
              }
            }

            if(props.location === 'End' && current.name === 'restart'){
              acc.push({ ...current, action: props.restart })
            }

            return acc;
          }, [])
          .map((current, index) => {
            return (
              <button key={index} onClick={current.action}>
                {current.text}
              </button>
            );
          })
      }
    </Fragment>
  );
};

export default Buttons;
