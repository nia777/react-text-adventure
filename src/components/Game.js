import React, { Component } from 'react';

import { Start, Desk, BossDesk, BreakRoom, End } from './locations';

class Game extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      location: ''
    };
  }

  displayRoom = room => {
    switch(room) {
      case 'Desk':
        return (<Desk />);
      case 'BossDesk':
        return (<BossDesk />);
      case 'BreakRoom':
        return (<BreakRoom />);
      case 'End':
        return (<End />);
      default:
        return (<Start />);
    }
  }

  render() {
    return (
      <div>
        <h1>Escape From Corporate 'Murica</h1>
        {this.displayRoom(this.state.location)}
      </div>
    );
  }
}

export default Game;
