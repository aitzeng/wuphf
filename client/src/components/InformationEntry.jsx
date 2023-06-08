import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

function InformationEntry({
  optionSMS, optionTwitter, optionEmail, barkPackage, optionCall
}) {
  return (
    <div className="form-container">
      <form className="input-form">
        <div>Message to Send</div>
        <input type="text" id="message" placeholder="Message..." value={barkPackage.values.message} onChange={barkPackage.handleChange} />
        <div>First Name</div>
        <input type="text" id="firstName" placeholder="Bob" value={barkPackage.values.firstName} onChange={barkPackage.handleChange} />
        <div>Last Name</div>
        <input type="text" id="lastName" placeholder="Loblaw" value={barkPackage.values.lastName} onChange={barkPackage.handleChange} />
        {optionSMS || optionCall ? (
          <div className="input-container">
            <div className="input-name">Phone Number</div>
            <input type="text" id="phoneNumber" placeholder="9495551234" value={barkPackage.values.phoneNumber} onChange={barkPackage.handleChange} />
          </div>
        ) : null }
        {optionTwitter ? (
          <div className="input-container">
            <div className="input-name">Twitter Handle</div>
            <input type="text" id="twitterHandle" placeholder="@WUPHF" value={barkPackage.values.twitterHandle} onChange={barkPackage.handleChange} />
          </div>
        ) : null}
        {optionEmail ? (
          <div className="input-container">
            <div className="input-name">Email</div>
            <input type="text" id="email" placeholder="bobloblaw@gmail.com" value={barkPackage.values.email} onChange={barkPackage.handleChange} />
          </div>
        ) : null}
      </form>
      <button id="form-next" className="button" type="submit" onClick={barkPackage.handleSubmit}>Next Page</button>
      {barkPackage.errors.firstName && <div>{barkPackage.errors.firstName}</div>}
      {barkPackage.errors.lastName && <div>{barkPackage.errors.lastName}</div>}
      {barkPackage.errors.communication && <div>{barkPackage.errors.communication}</div>}
      {barkPackage.errors.phoneNumber && <div>{barkPackage.errors.phoneNumber}</div>}
    </div>
  );
}

export default InformationEntry;
