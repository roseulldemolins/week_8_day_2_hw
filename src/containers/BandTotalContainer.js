import React from 'react';
import BandTotal from '../components/BandTotal'
import { connect }  from 'react-redux';

const mapStateToProps = (state) => {
  return {
    bands: state
  };
};

export default connect(mapStateToProps)(BandTotal)
