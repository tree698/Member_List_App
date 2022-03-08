import './app.css';
import React, { Component } from 'react';
import Table from './component/table';
import AddNew from './component/addNew';

class App extends Component {
  state = {
    characters: [],
  };

  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i != index;
      }),
    });
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData1={characters}
          removeCharacter1={this.removeCharacter}
        />
        <AddNew handleSubmit1={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
