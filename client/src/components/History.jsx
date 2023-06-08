import React, { useState, useEffect } from 'react';
import IndividualHistory from './IndividualHistory.jsx';

function History({pack}) {
  return (
    <div className="history-container">
      <div className="title">History</div>
      <ul className="vertical-menu">
        {pack.slice(0, 5).map((bark) => <IndividualHistory bark={bark} key={bark._id} />)}
      </ul>
    </div>
  );
}

export default History;
