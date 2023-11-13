import { useState } from 'react';

export default function useLoginToken() {
  const getLoginToken = () => {
    const loginTokenStr = localStorage.getItem('loginToken');
    const userToken = JSON.parse(loginTokenStr);
    return userToken?.loginToken
  };

  const [loginToken, setLoginToken] = useState( getLoginToken() );

  const saveLoginToken = userToken => {
    localStorage.setItem('loginToken', JSON.stringify(userToken));
    setLoginToken(userToken.loginToken);
  };

  return {
    setLoginToken: saveLoginToken,
    loginToken
  }
}