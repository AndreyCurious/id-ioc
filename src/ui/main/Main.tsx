import React, { useLayoutEffect } from 'react';
import Usercard from '../usercard/Usercard';
import './index.css';
import { useStore } from '../../Infrastructure/store';
import { UserApi } from '../../Infrastructure/api/UserApi';
import { UserService } from '../../application/services/userService';
import { User } from '../../domain/User';
import container from '../../container';

function Main() {
  const store = useStore();
  const { users, updateUsers, updateCurrentUserId } = store;

  const userApi = container.resolve(UserApi);

  useLayoutEffect(() => {
    userApi.getUsers().then((res) => updateUsers(res));
  }, []);

  return (
    <div className="Main">
      {users ? (
        users.map((user: User) => (
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
