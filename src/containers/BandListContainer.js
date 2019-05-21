import React from 'react';
import BandList from '../components/BandList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    bands: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBand: (bandIndex) => {
      dispatch({
        type: 'REMOVE_BAND',
        bandIndex
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandList)
