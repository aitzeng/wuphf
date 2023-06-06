import React, { useState, useEffect } from 'react';
import CreateForm from './CreateForm.jsx';
import Confirmation from './Confirmation.jsx';

function App() {
  const [page, setPage] = useState(0);
  const [barkInfo, setBarkInfo] = useState({});

  return (
    <div>
      {page === 0 ? <CreateForm setBarkInfo={setBarkInfo} setPage={setPage} /> : null}
      {page === 1 ? <Confirmation barkInfo={barkInfo} /> : null}
    </div>
  );
}

export default App;
