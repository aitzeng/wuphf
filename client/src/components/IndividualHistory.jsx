/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';

function IndividualHistory({ bark, barkPackage }) {
  const clickHandler = () => {
    barkPackage.setValues(bark);
  };

  return (
    <li
      className="individual-history-button"
      onClick={clickHandler}
    >
      {bark.lastName}
      ,
      {' '}
      {bark.firstName}
    </li>
  );
}

export default IndividualHistory;
