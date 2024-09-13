import React, { useLayoutEffect } from 'react';
import {
  useCurrentUserIdStorage,
  useUsersStorage,
} from '../../services/storeageAdapter';
import { useUsers } from '../../services/apiAdapter';
import Usercard from '../usercard/Usercard';
import './index.css';

function Main() {
  const { users, updateUsers } = useUsersStorage();
  const { getUsersAsync } = useUsers();
  const { updateCurrentUserId } = useCurrentUserIdStorage();
  useLayoutEffect(() => {
    getUsersAsync('https://jsonplaceholder.typicode.com/users').then((res) =>
      updateUsers(res)
    );
  }, [getUsersAsync, updateUsers]);

  return (
    <div className="Main">
      {users ? (
        users.map((user) => (
          <Usercard
            updateCurrentUserId={updateCurrentUserId}
            key={user.id}
            user={user}
          />
        ))
      ) : (
        <>Загрузка...</>
      )}
    </div>
  );
}

export default Main;
