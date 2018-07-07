import React, { Component } from 'react';

import { Start, Desk, BossDesk, BreakRoom, End } from './locations';
import Buttons from './Buttons';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'Start',
      hasCake: false
    };
  }

  displayLocation = location => {
    switch(location) {
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

  updateLocation = location => {
    this.setState({ location });
  };

  grabCake = () => {
    this.setState({ hasCake: true });
  };

  render() {
    return (
      <div>
        <h1>Escape From Corporate 'Murica</h1>
        {this.displayLocation(this.state.location)}
        <Buttons 
          location={this.state.location} 
          hasCake={this.state.hasCake}
          updateLocation={this.updateLocation}
          grabCake={this.grabCake}
        />
      </div>
    );
  }
}

export default Game;
