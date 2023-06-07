import React, { useState, useEffect } from 'react';
import SelectBox from './SelectBox.jsx';
import InformationEntry from './InformationEntry.jsx';
import History from './History.jsx';

function CreateForm({ setBarkInfo, setPage, pack }) {
  const [optionSMS, setOptionSMS] = useState(false);
  const [optionTwitter, setOptionTwitter] = useState(false);
  const [optionEmail, setOptionEmail] = useState(false);

  const clickerSMS = () => {
    setOptionSMS(!optionSMS);
  };

  const clickerTwitter = () => {
    setOptionTwitter(!optionTwitter);
  };

  const clickerEmail = () => {
    setOptionEmail(!optionEmail);
  };

  return (
    <div className="FormPage">
      <InformationEntry
        setBarkInfo={setBarkInfo}
        setPage={setPage}
        optionSMS={optionSMS}
        optionEmail={optionEmail}
        optionTwitter={optionTwitter}
      />
      <SelectBox
        clickerSMS={clickerSMS}
        clickerTwitter={clickerTwitter}
        clickerEmail={clickerEmail}
      />
      <History pack={pack} />
    </div>
  );
}

export default CreateForm;
