import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <colgroup>
        <col span="2" />
        <col />
      </colgroup>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Job</th>
        <th scope="col" className="remove">
          Remove
        </th>
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
        <h1 className="member__title">Member List</h1>
        <div className="member__outline">
          Add a member with a name and a job to the table
        </div>
        <table className="member__table">
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
