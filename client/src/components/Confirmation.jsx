import React, { useState, useEffect } from 'react';

function Confirmation({barkInfo}) {
  return (
    <div className="confirmation-page">
      Confirmation Page
      <div>{barkInfo.firstName}</div>
      <div>{barkInfo.lastName}</div>
      <div>{barkInfo.message}</div>
      <div>{barkInfo.phoneNumber}</div>
      <div>{barkInfo.twitterHandle}</div>
      <button type="submit">Bark!</button>
    </div>
  );
}

export default Confirmation;
