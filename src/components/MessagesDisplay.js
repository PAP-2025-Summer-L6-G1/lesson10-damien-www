import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';
import MessagesContext from '../contexts/MessagesContext';
import AccountContext from '../contexts/AccountContext';

import './MessagesDisplay.css';

function MessagesDisplay(props) {
  const accountContext = useContext(AccountContext);
  const messagesContext = useContext(MessagesContext);

  return (
    <section id="messages">
      {
        (props.secrets === true)?
          <Link to="/" id="show-secret" role="button">
            Show public messages
          </Link>
        :
          <Link to="/secret" id="show-secret" role="button">
            Show secret messages
          </Link>
      }
      <div className="messages-container">
        {
          (props.secrets !== true || accountContext.loggedInUser !== "")?
            messagesContext.messages.map(
              (message) =>
                <Message 
                  message={message.message}
                  user={message.user}
                  date={message.date}
                  _id={message._id}
                  key={`Message${message._id}`}
                />
            )
          :
            <h3>You can only see secret messages when logged in!</h3>
        }
      </div>
    </section>
  );
}

export default MessagesDisplay;