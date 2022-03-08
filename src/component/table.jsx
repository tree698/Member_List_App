import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};
const TableBody = (props) => {
  const rows = props.characterData2.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button
            onClick={() => {
              props.removeCharacter(index);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { characterData1, removeCharacter1 } = this.props;

    return (
      <>
        <h1>Practice with React</h1>
        <h3>Add a character with a name and a job to the table</h3>
        <table>
          <TableHeader />
          <TableBody
            characterData2={characterData1}
            removeCharacter={removeCharacter1}
          />
        </table>
      </>
    );
  }
}

export default Table;
