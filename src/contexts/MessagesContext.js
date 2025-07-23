import React from 'react';

const defaultValues = {
  messages: [],
  getMessages: null,
  newMessage: null, 
  deleteMessage: null, 
  updateMessage: null,
};

export default React.createContext(defaultValues);
