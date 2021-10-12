import React from 'react';
import { Link } from 'react-router-dom';
import loginpage from '../assets/css/login.module.css';
import logo from '../assets/images/UK-DION-2.png';
import userImage from '../assets/images/user.png';
import medal from '../assets/images/medal.png';
import padlock from '../assets/images/padlock.png';
import commas from '../assets/images/Vector.png';

const Success = () => {
  return (
    <div>
      <div className={loginpage.container}>
        <div className={loginpage.login}>
          <div>
            <img className={loginpage.img} src={logo} alt="company logo" />
          </div>
          <div className={loginpage.params}>
            <div className={loginpage.lock}>
              <img src={padlock} alt="padlock" />
            </div>
            <div className={loginpage.headingSucess}>
              <h1 className={loginpage.headingOne}>Success</h1>
              <span className={loginpage.headingTwo}>
                You’ve successfully changed your password
              </span>
            </div>
            <div className={loginpage.inputDiv}>
              <button
                type="button"
                // onClick={handleSubmit}
                className={loginpage.button}
              >
                <Link to="/">Proceed to login</Link>
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
              <p className={loginpage.userTitle}>Product & Innovation Mgt.</p>
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
    </div>
  );
};

export default Success;
