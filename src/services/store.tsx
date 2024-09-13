import React, { PropsWithChildren, useState } from 'react';
import { useContext } from 'react';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState(null);
  const [users, setUsers] = useState(null);
  const [posts, setPosts] = useState(null);

  const value = {
    currentUserId,
    users,
    posts,
    updateCurrentUserId: setCurrentUserId,
    updateUsers: setUsers,
    updatePosts: setPosts,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
