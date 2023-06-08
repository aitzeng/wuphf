import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateForm from './CreateForm.jsx';
import Confirmation from './Confirmation.jsx';
import WelcomePage from './WelcomePage.jsx';

function App() {
  const [page, setPage] = useState(0);
  const [barkInfo, setBarkInfo] = useState({});
  const [pack, setPack] = useState([]);
  const [optionSMS, setOptionSMS] = useState(false);
  const [optionCall, setOptionCall] = useState(false);

  useEffect(() => {
    axios.get('/wuphf/sniff')
      .then((response) => {
        setPack(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="application">
      {page === 0 ? <WelcomePage setPage={setPage} /> : null}
      {page === 1 ? (
        <CreateForm
          pack={pack}
          setBarkInfo={setBarkInfo}
          setPage={setPage}
          optionSMS={optionSMS}
          setOptionSMS={setOptionSMS}
          optionCall={optionCall}
          setOptionCall={setOptionCall}
        />
      ) : null}
      {page === 2 ? (
        <Confirmation
          barkInfo={barkInfo}
          setPage={setPage}
          optionCall={optionCall}
          optionSMS={optionSMS}
        />
      ) : null}
    </div>
  );
}

export default App;
