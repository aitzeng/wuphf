import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Confirmation({ barkInfo, setPage }) {
  const postBark = async (info) => {
    const requests = [];
    if (barkInfo.twitterHandle) {
      requests.push(
        axios.post('/wuphf/bark/twitter', info)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log('Twitter', err);
          }),
      );
    }
    if (barkInfo.email) {
      requests.push(
        axios.post('/wuphf/bark/gmail', info)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log('Twitter', err);
          }),
      );
    }
    if (barkInfo.phoneNumber) {
      requests.push(
        axios.post('/wuphf/bark/twilio', info)
          .then((response) => {
            console.log(response);
            setPage(0);
          })
          .catch((err) => {
            console.log(err);
          }),
      );
    }
    await Promise.all(requests);
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    await postBark(barkInfo);
    setPage(0);
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
