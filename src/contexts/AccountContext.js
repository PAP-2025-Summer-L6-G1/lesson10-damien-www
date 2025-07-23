import React from 'react';

const defaultValues = {
  loggedInUser: "",
  signupUser: null,
  loginUser: null,
  logoutUser: null,
};

export default React.createContext(defaultValues);
