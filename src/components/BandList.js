import React from 'react';
import Band from './Band';

const BandList = (props) => {

  const listItems = props.bands.map((bandData, index) => {
    return <Band
      bandData = { bandData }
      key = { index }
      removeBand = { props.removeBand }
      />
    });

    return (
      <div id='bands-list'>
        { listItems }
      </div>
    );
  };

export default BandList
