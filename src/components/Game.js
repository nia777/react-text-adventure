import React, { Component } from 'react';

import { Start, Desk, BossDesk, BreakRoom, End } from './locations';
import Controls from './Controls';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLocation: '',
      cake: false
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
    this.setState({ 
      currentLocation: location 
    });
  };

  grabCake = () => {
    this.setState({
      cake: true
    });
  };

  render() {
    return (
      <div>
        <h1>Escape From Corporate 'Murica</h1>
        {this.displayLocation(this.state.currentLocation)}
        <Controls 
          location={this.state.currentLocation} 
          hasCake={this.state.cake}
          updateLocation={this.updateLocation}
          grabCake={this.grabCake}
        />
      </div>
    );
  }
}

export default Game;
