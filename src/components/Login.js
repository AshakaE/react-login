import React from 'react';
import { useHistory } from 'react-router-dom';
import { login, forgot, reset } from '../assets/utils/auth';
import loginpage from '../assets/css/login.module.css';
import mloginpage from '../assets/css/mlogin.module.css';
import logo from '../assets/images/UK-DION-2.png';
import userImage from '../assets/images/user.png';
import medal from '../assets/images/medal.png';
import key from '../assets/images/Key.png';
import commas from '../assets/images/Vector.png';

const Login = () => {
  const history = useHistory();
  const [workEmail, setWorkEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isMember, setIsMember] = React.useState(true);
  const [isReset, setIsReset] = React.useState(true);

  const toggleMember = () => {
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
          <div className={loginpage.container}>
            <div className={loginpage.login}>
              <div className={mloginpage.article}>
                <div>
                  <p className={mloginpage.quote}>
                    Add an inspiring and motivational quote here. It can be
                    business, finance, personal developemt or any kind.
                  </p>
                  <span className={mloginpage.quoteName}>-Ifeoluwa Taiwo</span>
                </div>
                <div className={mloginpage.quoteImage}>
                  <img src={commas} alt="commas" />
                </div>
              </div>
              <div>
                <img className={loginpage.img} src={logo} alt="company logo" />
              </div>
              <div className={loginpage.params}>
                <div className={loginpage.heading}>
                  <h1 className={loginpage.headingOne}>Login</h1>
                  <span className={loginpage.headingTwo}>
                    Gain access to all work resources
                  </span>
                </div>
                <div className={loginpage.inputDiv}>
                  <label htmlFor="workEmail">
                    <div className={loginpage.label}>Work Email*</div>
                    <input
                      id="workEmail"
                      name="workEmail"
                      autoComplete="off"
                      type="text"
                      value={workEmail}
                      className={loginpage.input}
                      onChange={(e) => setWorkEmail(e.target.value)}
                    />
                  </label>
                </div>
                <div className={loginpage.inputDiv}>
                  <label htmlFor="Password">
                    <div className={loginpage.label}>Password*</div>
                    <input
                      id="Password"
                      name="Password"
                      type="password"
                      value={password}
                      className={loginpage.input}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                </div>
                <div className={loginpage.option}>
                  <button onClick={toggleMember}>Forget password?</button>
                </div>
                <div className={loginpage.inputDiv}>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className={loginpage.button}
                  >
                    Log in
                  </button>
                </div>
              </div>
              <div className={loginpage.footer}>
                <span>© 2021 uk-dion group. All rights reserved.</span>
              </div>
            </div>
            <div className={loginpage.info}>
              <div className={loginpage.userInfo}>
                <h2 className={loginpage.headingInfo}>Employee of the month</h2>
                <div className={loginpage.userImg}>
                  <img src={userImage} alt="user" />
                </div>
                <div className={loginpage.userName}>
                  <h3>Gloria Agboifoh</h3>
                  <p className={loginpage.userTitle}>
                    Product & Innovation Mgt.
                  </p>
                </div>
                <div className={loginpage.medal}>
                  <img src={medal} alt="medal" />
                </div>
              </div>
              <div className={loginpage.article}>
                <div>
                  <p className={loginpage.quote}>
                    Add an inspiring and motivational quote here. It can be
                    business, finance, personal developemt or any kind.
                  </p>
                  <span className={loginpage.quoteName}>-Ifeoluwa Taiwo</span>
                </div>
                <div className={loginpage.quoteImage}>
                  <img src={commas} alt="commas" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {!isMember && (
        <>
          {isReset && (
            <>
              <div className={loginpage.container}>
                <div className={loginpage.login}>
                  <div>
                    <img
                      className={loginpage.img}
                      src={logo}
                      alt="company logo"
                    />
                  </div>
                  <div className={loginpage.paramsReset}>
                    <div className={loginpage.heading}>
                      <h1 className={loginpage.headingOne}>
                        Send confirmation link
                      </h1>
                      <span className={loginpage.headingTwo}>
                        Gain access to all work resources
                      </span>
                    </div>
                    <div className={loginpage.inputDiv}>
                      <label htmlFor="Work Email">
                        <div className={loginpage.label}>Work Email*</div>
                        <input
                          id="wokEmail"
                          name="workEmail"
                          type="workEmail"
                          value={workEmail}
                          className={loginpage.input}
                          onChange={(e) => setWorkEmail(e.target.value)}
                        />
                      </label>
                    </div>
                    <div>
                      <button
                        onClick={handleSubmit}
                        className={loginpage.buttonReset}
                      >
                        Send confirmation
                      </button>
                    </div>
                  </div>
                  <div className={loginpage.footer}>
                    <span>© 2021 uk-dion group. All rights reserved.</span>
                  </div>
                </div>
                <div className={loginpage.info}>
                  <div className={loginpage.userInfo}>
                    <h2 className={loginpage.headingInfo}>
                      Employee of the month
                    </h2>
                    <div className={loginpage.userImg}>
                      <img src={userImage} alt="user" />
                    </div>
                    <div className={loginpage.userName}>
                      <h3>Gloria Agboifoh</h3>
                      <p className={loginpage.userTitle}>
                        Product & Innovation Mgt.
                      </p>
                    </div>
                    <div className={loginpage.medal}>
                      <img src={medal} alt="medal" />
                    </div>
                  </div>
                  <div className={loginpage.article}>
                    <div>
                      <p className={loginpage.quote}>
                        Add an inspiring and motivational quote here. It can be
                        business, finance, personal developemt or any kind.
                      </p>
                      <span className={loginpage.quoteName}>
                        -Ifeoluwa Taiwo
                      </span>
                    </div>
                    <div className={loginpage.quoteImage}>
                      <img src={commas} alt="commas" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {!isReset && (
            <>
              <div className={loginpage.container}>
                <div className={loginpage.login}>
                  <div>
                    <img
                      className={loginpage.img}
                      src={logo}
                      alt="company logo"
                    />
                  </div>
                  <div className={loginpage.params}>
                    <div className={loginpage.heading}>
                      <div className={loginpage.headingKey}>
                        <img src={key} alt="Key" />
                      </div>
                      <h1 className={loginpage.headingOne}>Reset Password</h1>
                      <span className={loginpage.headingTwo}>
                        Gain access to all work resources
                      </span>
                    </div>
                    <div>
                      <label htmlFor="Password">
                        <div className={loginpage.label}>Password*</div>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={password}
                          className={loginpage.input}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </label>
                    </div>
                    <div>
                      <label htmlFor="confirmPassword">
                        <div className={loginpage.label}>Confirm Password*</div>
                        <input
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          value={confirmPassword}
                          className={loginpage.input}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </label>
                    </div>
                    <div>
                      <button
                        onClick={handleSubmit}
                        className={loginpage.buttonReset}
                      >
                        Reset Password
                      </button>
                    </div>
                  </div>
                  <div className={loginpage.footer}>
                    <span>© 2021 uk-dion group. All rights reserved.</span>
                  </div>
                </div>
                <div className={loginpage.info}>
                  <div className={loginpage.userKey}>
                    <img src={key} alt="Key" />
                  </div>
                  <div className={loginpage.article}>
                    <div>
                      <p className={loginpage.quote}>
                        Add an inspiring and motivational quote here. It can be
                        business, finance, personal developemt or any kind.
                      </p>
                      <span className={loginpage.quoteName}>
                        -Ifeoluwa Taiwo
                      </span>
                    </div>
                    <div className={loginpage.quoteImage}>
                      <img src={commas} alt="commas" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Login;
