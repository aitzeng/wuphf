import React, { useState, useEffect } from 'react';

function SelectBox({ clickerSMS, clickerTwitter, clickerEmail, clickerCall }) {
  return (
    <div className="checkboxes-container">
      <div className="checkbox-title">Communication Method</div>
      <label htmlFor="SMS-Check">
        <input type="checkbox" id="SMS-Check" className="checkbox" onClick={clickerSMS} />
        SMS
      </label>
      <label htmlFor="Call-Check">
        <input type="checkbox" id="Call-Check" className="checkbox" onClick={clickerCall} />
        Call
      </label>
      <label htmlFor="Twitter-Check">
        <input type="checkbox" id="Twitter-Check" className="checkbox" onClick={clickerTwitter} />
        Twitter
      </label>
      <label htmlFor="Email-Check">
        <input type="checkbox" id="Email-Check" className="checkbox" onClick={clickerEmail} />
        Email
      </label>
    </div>
  );
}

export default SelectBox;
