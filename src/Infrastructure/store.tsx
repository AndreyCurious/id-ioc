import React, { PropsWithChildren, useState } from 'react';
import { useContext } from 'react';
import { User } from '../domain/User';
import { Post } from '../domain/Post';

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [users, setUsers] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post | null>(null);

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
