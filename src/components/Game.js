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

  restart = () => {
    this.toggleCake();
    this.updateLocation({ location: 'End' });
  };

  toggleCake = () => {
    this.setState({ hasCake: !this.state.hasCake });
  };

  updateLocation = location => {
    this.setState({ location });
  };

  render() {
    return (
      <div>
        <h1>Escape From Corporate America</h1>
        {this.displayLocation(this.state.location)}
        <Buttons 
          hasCake={this.state.hasCake}
          location={this.state.location} 
          restart={this.restart}
          toggleCake={this.toggleCake}
          updateLocation={this.updateLocation}
        />
      </div>
    );
  }
}

export default Game;
