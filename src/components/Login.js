import React from 'react';
import { useHistory } from 'react-router-dom';
import { login, forgot, reset } from '../assets/utils/auth';

const Login = () => {
  const history = useHistory();
  const [workEmail, setWorkEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isMember, setIsMember] = React.useState(true);
  // const [isForget, setIsForget] = React.useState(true);
  const [isReset, setIsReset] = React.useState(true);

  const toggleMember = (e) => {
    // console.log(e.target.value);
    setIsMember((prev) => {
      localStorage.clear();
      const isMember = !prev;
      return isMember;
    });
  };

  const toggleReset = () => {
    setIsReset((prev) => {
      const isReset = !prev;
      return isReset;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isMember) {
      response = await login({ workEmail, password });
      console.log(response);
      if (response.status) {
        const token = response.access_token;
        localStorage.setItem('auth', token);
        history.push('/dashboard');
      }

      if (response.message) {
        // setError(response.message);
      }
    }
    if (!isMember && isReset) {
      response = await forgot({ workEmail });
      if (response.message.split(' ').at(-1) === 'invalid.') {
        console.log(response.message);
      } else {
        const token = response.token;
        localStorage.setItem('auth', token);
        localStorage.setItem('user', workEmail);
        toggleReset();
      }
    }
    if (!isMember && !isReset) {
      response = await reset({ password, confirmPassword });
      console.log(response);
      if (response) {
        history.push('/success');
      }
    }
    return response;
  };

  return (
    <>
      {isMember && (
        <>
          <div>
            <h1>Login</h1>
            <span>Gain access to all work resources</span>
          </div>
          <div>
            <label htmlFor="workEmail">
              <div>Work Email</div>
              <input
                id="workEmail"
                name="workEmail"
                autoComplete="off"
                type="text"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="Password">
              <div>Password</div>
              <input
                id="Password"
                name="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <div>
            <button type="button" onClick={handleSubmit}>
              login
            </button>
          </div>
          <div>
            <button onClick={toggleMember}>forget password</button>
          </div>
        </>
      )}
      {!isMember && (
        <>
          {isReset && (
            <>
              <div>
                <h1>Send confirmation link</h1>
                <span>Gain access to all work resources</span>
              </div>
              <div>
                <label htmlFor="Work Email">
                  <div>Work Email</div>
                  <input
                    id="wokEmail"
                    name="workEmail"
                    type="workEmail"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <button onClick={handleSubmit}>Send confirmation</button>
              </div>
            </>
          )}
          {!isReset && (
            <>
              <div>
                <h1>Reset Password</h1>
                <span>Gain access to all work resources</span>
              </div>
              <div>
                <label htmlFor="Password">
                  <div>Password*</div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="confirmPassword">
                  <div>Confirm Password*</div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <button onClick={handleSubmit}>Reset Password</button>
              </div>
            </>
          )}
        </>
      )}
      <div>
        <span>© 2021 uk-dion group. All rights reserved.</span>
      </div>
    </>
  );
};

export default Login;
