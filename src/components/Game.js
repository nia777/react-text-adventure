import React, { Component, Fragment } from 'react';

import { Start, Desk, BossDesk, BreakRoom, End } from './locations';

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
        return (
          <Desk 
            location={this.state.location} 
            updateLocation={this.updateLocation}
          />
        );
      case 'BossDesk':
        return (
          <BossDesk 
            hasCake={this.state.hasCake}
            location={this.state.location} 
            updateLocation={this.updateLocation} 
          />
        );
      case 'BreakRoom':
        return (
          <BreakRoom 
            hasCake={this.state.hasCake}
            location={this.state.location} 
            toggleCake={this.toggleCake}
            updateLocation={this.updateLocation} 
          />
        );
      case 'End':
        return (
          <End 
            restart={this.restart}
          />
        );
      default:
        return (
          <Start 
            location={this.state.location} 
            updateLocation={this.updateLocation} 
          />
        );
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
      <Fragment>
        <h1>Escape From Corporate America</h1>
        {this.displayLocation(this.state.location)}
      </Fragment>
    );
  }
}

export default Game;
