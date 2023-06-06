import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

function CreateForm({ setBarkInfo, setPage }) {
  const barkPackage = useFormik({
    initialValues: {
      message: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      twitterHandle: '',
    },
    onSubmit: (values) => {
      console.log(values);
      setBarkInfo(values);
      setPage(1);
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = 'First Name Required!';
      }
      if (!values.lastName) {
        errors.lastName = 'Last Name Required!';
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number Required!';
      } else if (!/^\d+$/.test(values.phoneNumber) || values.phoneNumber.length !== 10) {
        errors.phoneNumber = 'Phone Number must have length of 10 and may not have any symbols/letters !';
      }
      return errors;
    },
  });

  return (
    <div className="FormPage">
      Receiver Information
      <form onSubmit={barkPackage.handleSubmit}>
        <div>Message to Send</div>
        <input type="text" id="message" placeholder="Message..." value={barkPackage.values.message} onChange={barkPackage.handleChange} />
        <div>First Name</div>
        <input type="text" id="firstName" placeholder="Bob" value={barkPackage.values.firstName} onChange={barkPackage.handleChange} />
        <div>Last Name</div>
        <input type="text" id="lastName" placeholder="Loblaw" value={barkPackage.values.lastName} onChange={barkPackage.handleChange} />
        <div>Phone Number</div>
        <input type="text" id="phoneNumber" placeholder="9495551234" value={barkPackage.values.phoneNumber} onChange={barkPackage.handleChange} />
        <div>Twitter Handle</div>
        <input type="text" id="twitterHandle" placeholder="@WUPHF" value={barkPackage.values.twitterHandle} onChange={barkPackage.handleChange} />
        <button type="submit">Submit</button>
      </form>
      {barkPackage.errors.firstName && <div>{barkPackage.errors.firstName}</div>}
      {barkPackage.errors.lastName && <div>{barkPackage.errors.lastName}</div>}
      {barkPackage.errors.phoneNumber && <div>{barkPackage.errors.phoneNumber}</div>}
    </div>
  );
}

export default CreateForm;
