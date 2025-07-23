import React, { useContext, useEffect, useState } from 'react';
import './MessageForm.css';

import MessagesContext from '../contexts/MessagesContext';
import AccountContext from '../contexts/AccountContext';

function MessageForm() {
  const accountContext = useContext(AccountContext);
  const messagesContext = useContext(MessagesContext);

  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [secret, setSecret] = useState(false);

  function handleCreate(event) {
    event.preventDefault();
    messagesContext.newMessage({
      user,
      message,
      secret,
    });
    setUser(accountContext.loggedInUser);
    setMessage("");
    setSecret(false);
  }

  function handleUserChange(event) {
    setUser(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSecretChange(event) {
    setSecret(JSON.parse(event.target.value));
  }

  useEffect(()=>{
    setUser(accountContext.loggedInUser);
  }, [accountContext.loggedInUser]);

  return (
    <aside>
      <h2>Send a Message</h2>
      <form>
        <label htmlFor="user">Your Name</label>
        <input
          id="user"
          type="text"
          name="user"

          value={ user }
          onChange={
            (accountContext.loggedInUser === "")?
              handleUserChange
            :
              null
          }
          readOnly={
            (accountContext.loggedInUser === "")?
              false
            :
              true
          }

        />
        <label htmlFor="message">Your message</label>
        <textarea
          id="message"
          type="text"
          name="message"

          value={message}
          onChange={handleMessageChange}

        ></textarea>
        <label>Is this a secret message?</label>
        <input
          type="radio"
          id="yes"
          name="secret"
          value="true"

          checked={secret}
          onChange={handleSecretChange}

        />
        <label htmlFor="yes">Yes</label>{' '}
        <input
          type="radio"
          id="no"
          name="secret"
          value="false"

          checked={!secret}
          onChange={handleSecretChange}

        />
        <label htmlFor="no">No</label>
        <input
          type="submit"
          value="Send"
          id="form-btn"

          onClick={handleCreate}

        />
      </form>
    </aside>
  );
}

export default MessageForm;