import React, { Component } from 'react';
import './BandForm.css';

class BandForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      year: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleFormSubmit (event) {
    event.preventDefault();
    const newBand = {
      name: event.target.name.value,
      location: event.target.location.value,
      year: event.target.year.value
    };
    this.props.addBand(newBand)
    this.reset()
  };

  reset () {
    this.setState({
      name: '',
      location: '',
      year: ''
    })
  }

  handleInputChange (event) {
    const field = event.target.id;
    const value = event.target.value;
    this.setState({ [field]: value });
  }

  render () {
    return(
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          id='name'
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <label htmlFor='location'>Location:</label>
        <input
          type='text'
          name='location'
          id='location'
          value={this.state.location}
          onChange={this.handleInputChange}
        />
        <label htmlFor='year'>Year:</label>
        <input
          type='text'
          name='year'
          id='year'
          value={this.state.year}
          onChange={this.handleInputChange}
        />
        <label htmlFor='rating'>Rating:</label>
        <select
          name='rating'
          id='rating'
          value={this.state.rating}
          onChange={this.handleInputChange}
        >
        <option value='Great'>😄</option>
        <option value='Good'>🙂</option>
        <option value='Unsure'>🤔</option>
        <option value='Average'>😐</option>
        <option value='Ok'>😕</option>
        </select>
        <input type='submit' value='Add' />
      </form>
    )
  }
}

export default BandForm
