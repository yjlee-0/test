import React, { createContext, useCallback, useState } from 'react';

export interface UserContextValues {
  user: {
    id: string;
    accessToken: string;
    username: string;
  };
}

const contextDefaultValues: UserContextValues = {
  user: {
    id: '아이디',
    accessToken: '465465',
    username: '테스트 이름이름 이름 이름  ',
  }
};

const UserContext = createContext(contextDefaultValues);

export const useUser = () => React.useContext(UserContext);

const UserProvider = ({ children }: any) => {
  const [user] = useState(contextDefaultValues.user);
  const contextValue: UserContextValues = {
    user
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;