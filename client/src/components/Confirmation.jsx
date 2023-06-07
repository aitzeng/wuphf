import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Confirmation({ barkInfo, setPage }) {
  const clickHandler = (e) => {
    e.preventDefault();
    axios.post('/wuphf/bark', barkInfo)
      .then((response) => {
        console.log(response);
        setPage(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="confirmation-page">
      Confirmation Page
      <div>{barkInfo.firstName}</div>
      <div>{barkInfo.lastName}</div>
      <div>{barkInfo.message}</div>
      <div>{barkInfo.phoneNumber}</div>
      <div>{barkInfo.twitterHandle}</div>
      <div>{barkInfo.email}</div>
      <button type="button" onClick={clickHandler}>Bark!</button>
    </div>
  );
}

export default Confirmation;
