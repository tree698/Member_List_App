import React, { Component } from 'react';

class AddNew extends Component {
  initialState = {
    name: '',
    job: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onFormSumbit = (event) => {
    event.preventDefault();
    this.props.handleSubmit1(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;
    return (
      <>
        <h3>Add New</h3>
        <form action="" onSubmit={this.onFormSumbit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="job">Job</label>
          <input
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange}
          />
          <br />
          <button onSubmit={this.handleSubmit}>Submit</button>
        </form>
      </>
    );
  }
}

export default AddNew;
