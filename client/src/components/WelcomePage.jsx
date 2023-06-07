import React, { useState, useEffect } from 'react';

function WelcomePage({ setPage }) {
  const nextPage = () => {
    setPage(1);
  };
  return (
    <div className="welcome-page">
      WELCOME PAGE
      <button type="button" onClick={nextPage}>Next Page</button>
    </div>
  );
}

export default WelcomePage;
