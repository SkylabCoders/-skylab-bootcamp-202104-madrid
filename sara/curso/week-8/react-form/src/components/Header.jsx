import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/actions/actionCreatoris';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  return (
    <div>
      {
      user?.name
        ? (
          <>
            <h1>
              Welcome
              {' '}
              {user.name}
            </h1>
            <button type="button" onClick={dispatch(logout())}>
              Log Out
            </button>
          </>
        ) : (
          <button type="button" onClick={dispatch(login())}>
            Log In
          </button>
        )
      }
    </div>
  );
}

export default Header;
