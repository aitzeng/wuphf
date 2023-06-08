import React, { useState, useEffect } from 'react';

function IndividualHistory({ bark }) {
  const clickHandler = () => {

  }
  return (
    <li type="button" className="individual-history-button" onClick={}>
      {bark.lastName}
      ,
      {' '}
      {bark.firstName}
    </li>
  );
}

export default IndividualHistory;
