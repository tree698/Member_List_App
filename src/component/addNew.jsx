import React, { Component } from 'react';

class AddNew extends Component {
  // initialState = {
  //   name: '',
  //   job: '',
  // };

  // state = this.initialState;

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  nameRef = React.createRef();
  jobRef = React.createRef();

  onFormSumbit = (event) => {
    event.preventDefault();
    const character = {
      name: this.nameRef.current.value,
      job: this.jobRef.current.value,
    };

    // this.props.handleSubmit1(this.state);
    character && this.props.handleSubmit1(character);
    // this.setState(this.initialState);
    this.nameRef.current.value = '';
    this.jobRef.current.value = '';
  };

  render() {
    // const { name, job } = this.state;
    return (
      <>
        <h3 className="member__subtitle">Add New</h3>
        <form className="member__form" action="" onSubmit={this.onFormSumbit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            ref={this.nameRef}
            type="text"
            // name="name"
            // id="name"
            // value={name}
            // onChange={this.handleChange}
          />
          <br />
          <label htmlFor="job">Job</label>
          <br />
          <input
            ref={this.jobRef}
            type="text"
            // name="job"
            // id="job"
            // value={job}
            // onChange={this.handleChange}
          />
          <br />
          <button className="member__button">Submit</button>
        </form>
      </>
    );
  }
}

export default AddNew;
