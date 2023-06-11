import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Confirmation({ barkInfo, setPage, optionSMS, optionCall, optionTwitter, optionEmail, getHistory }) {
  const postBark = async (info) => {
    delete info._id;
    console.log(info);
    const requests = [];
    if (barkInfo) {
      requests.push(
        axios.post('/wuphf/bark', info)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log('MongoDB', err);
          }),
      );
    }
    if (optionTwitter) {
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
    if (optionEmail) {
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
    if (optionSMS && barkInfo.phoneNumber) {
      requests.push(
        axios.post('/wuphf/bark/twilio/text', info)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          }),
      );
    }
    if (optionCall && barkInfo.phoneNumber) {
      requests.push(
        axios.post('/wuphf/bark/twilio/call', info)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          }),
      );
    }
    await Promise.all(requests);
  };

  const confirmHandler = async () => {
    await postBark(barkInfo);
    getHistory();
    setPage(0);
  };

  const backHandler = () => {
    setPage(1);
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
      <button type="button" onClick={backHandler}>Back</button>
      <button type="button" onClick={confirmHandler}>Bark!</button>
    </div>
  );
}

export default Confirmation;
