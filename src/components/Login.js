import React from 'react';

const Login = () => {
  const [workEmail, setWorkEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isMember, setIsMember] = React.useState(true);
  const [isReset, setIsReset] = React.useState(true);

  const toggleMember = () => {
    setIsMember((prev) => {
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
      // response = await login({ username, fpassword });
      if (response.uid) {
        const token = response.auth_token;
        const { uid } = response;
        // localStorage.setItem('user', username);
        localStorage.setItem('uid', uid);
        localStorage.setItem('auth', token);
        // history.push('/dashboard');
      }
      if (response.message) {
        // setError(response.message);
      }
    } else {
      // response = await register({ username, fpassword, cpassword });
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
                <label htmlFor="Password">
                  <div>Work Email</div>
                  <input id="cpassword" name="cpassword" type="password" />
                </label>
              </div>
              <div>
                <button onClick={toggleReset}>Send confirmation</button>
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
                <button>Reset Password</button>
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
