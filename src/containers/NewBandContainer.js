import React from 'react';
import { connect } from 'react-redux';
import BandForm from '../components/BandForm.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => {
      dispatch({
        type: 'ADD_BAND',
        band
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(BandForm)
