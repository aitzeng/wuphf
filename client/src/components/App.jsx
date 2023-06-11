import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateForm from './CreateForm.jsx';
import Confirmation from './Confirmation.jsx';
import WelcomePage from './WelcomePage.jsx';
// import logo from '../images/wuphf.jpg';

function App() {
  const [page, setPage] = useState(1);
  const [barkInfo, setBarkInfo] = useState({});
  const [pack, setPack] = useState([]);
  const [optionSMS, setOptionSMS] = useState(false);
  const [optionCall, setOptionCall] = useState(false);
  const [optionTwitter, setOptionTwitter] = useState(false);
  const [optionEmail, setOptionEmail] = useState(false);

  const getHistory = () => {
    axios.get('/wuphf/sniff')
      .then((response) => {
        setPack(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div id="application">
      {page === 0 ? <WelcomePage setPage={setPage} /> : null}
      {page === 1 ? (
        <CreateForm
          pack={pack}
          setBarkInfo={setBarkInfo}
          setPage={setPage}
          optionEmail={optionEmail}
          setOptionEmail={setOptionEmail}
          optionTwitter={optionTwitter}
          setOptionTwitter={setOptionTwitter}
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
          optionTwitter={optionTwitter}
          optionEmail={optionEmail}
          optionCall={optionCall}
          optionSMS={optionSMS}
          getHistory={getHistory}
        />
      ) : null}
    </div>
  );
}

export default App;
