import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
      txt: 'Here\'s some text: from state'
  }

  update = (event) => {
    this.setState({txt: event.target.value});
  }

  render() {
    return (
      <div>
        <input
        onChange={this.update} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}

App.propTypes = {
  txt: PropTypes.string.isRequired
};

export default App;
