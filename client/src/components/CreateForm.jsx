import React, { useState, useEffect } from 'react';

const CreateForm = () => {

  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [twitterHandle, setTwitterHandle] = useState('');

  const messageChanger = (e) => {
    setMessage(e.target.value);
  }
  const firstNameChanger = (e) => {
    setFirstName(e.target.value);
  }
  const lastNameChanger = (e) => {
    setLastName(e.target.value);
  }
  const phoneChanger = (e) => {
    setPhoneNumber(e.target.value);
  }
  const twitterChanger = (e) => {
    setTwitterHandle(e.target.value);
  }


  return (
    <div className="FormPage">
      <form>
        <input type="text" placeholder="Message to send..." value={message} onChange={messageChanger}/>
        <input type="text" placeholder="First Name of Receiver" value={firstName} onChange={firstNameChanger}/>
        <input type="text" placeholder="Last Name of Receiver" value={lastName} onChange={lastNameChanger}/>
        <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={phoneChanger}/>
        <input type="text" placeholder="Twitter Handle" value={twitterHandle} onChange={twitterChanger}/>
      </form>
    </div>
  )
}

export default CreateForm;