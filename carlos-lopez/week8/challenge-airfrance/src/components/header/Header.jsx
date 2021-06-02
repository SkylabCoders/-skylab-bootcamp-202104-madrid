import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, logout } from '../../redux/actions/actionCreators';

function Header() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function checkAuth() {
    dispatch(login(name, password, true));
  }
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        {
                user?.isAuthenticated
                  ? (
                    <>
                      <h1>
                        {' '}
                        Welcome
                        {' '}
                        {user.email}
                      </h1>
                      <Link to="/dashboard"> GO TO FILL THE GAPS</Link>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </button>

                    </>
                  )
                  : (
                    <>
                      <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                          email:
                          <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} />
                        </label>
                        <label htmlFor="password">
                          Password:
                          <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </label>

                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={checkAuth}
                        >
                          Login
                        </button>
                      </form>

                    </>
                  )
            }
      </div>
    </>
  );
}
export default Header;
