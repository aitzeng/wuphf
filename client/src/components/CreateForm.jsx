import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import SelectBox from './SelectBox.jsx';
import InformationEntry from './InformationEntry.jsx';
import History from './History.jsx';

function CreateForm({
  setBarkInfo, setPage, pack, optionSMS, setOptionSMS, optionCall, setOptionCall,
}) {
  const [optionTwitter, setOptionTwitter] = useState(false);
  const [optionEmail, setOptionEmail] = useState(false);

  const barkPackage = useFormik({
    initialValues: {
      message: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      twitterHandle: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
      setBarkInfo(values);
      setPage(2);
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = 'First Name Required!';
      }
      if (!values.lastName) {
        errors.lastName = 'Last Name Required!';
      }
      if (!optionSMS && !optionTwitter && !optionEmail && !optionCall) {
        errors.communication = 'Communication Method Required!';
      }
      if (optionSMS || optionCall) {
        if (!/^\d+$/.test(values.phoneNumber) || values.phoneNumber.length !== 10) {
          errors.phoneNumber = 'Invalid Phone Number';
        }
      }
      return errors;
    },
  });

  const clickerSMS = () => {
    setOptionSMS(!optionSMS);
  };

  const clickerTwitter = () => {
    setOptionTwitter(!optionTwitter);
  };

  const clickerEmail = () => {
    setOptionEmail(!optionEmail);
  };

  const clickerCall = () => {
    setOptionCall(!optionCall);
  };

  return (
    <div className="FormPage">
      <div className="left-tab">
        <InformationEntry
          barkPackage={barkPackage}
          setBarkInfo={setBarkInfo}
          setPage={setPage}
          optionSMS={optionSMS}
          optionEmail={optionEmail}
          optionTwitter={optionTwitter}
          optionCall={optionCall}
        />
      </div>
      <div className="right-tab">
        <SelectBox
          clickerSMS={clickerSMS}
          clickerTwitter={clickerTwitter}
          clickerEmail={clickerEmail}
          clickerCall={clickerCall}
        />
        <History pack={pack} barkPackage={barkPackage} />
      </div>
    </div>
  );
}

export default CreateForm;
