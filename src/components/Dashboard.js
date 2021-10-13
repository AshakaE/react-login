import React from 'react';
import { signOut } from '../assets/utils/auth';
import { useHistory } from 'react-router-dom';
import dash from '../assets/css/dashboard.module.css';
import logo from '../assets/images/UK-DION-2.png';
import searchImg from '../assets/images/search.png';
import bell from '../assets/images/bell.png';
import notif from '../assets/images/bellnote.png';
import userAcc from '../assets/images/Gloria.png';
import down from '../assets/images/down.png';
import cake from '../assets/images/cake.png';

const Dashboard = () => {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signOut();
    history.push('/dashboard');
  };
  return (
    <>
      <div className={dash.container}>
        <div className={dash.panel}>
          <div className={dash.top}>
            <div className={dash.imgDiv}>
              <img className={dash.img} src={logo} alt="company logo" />
            </div>
            <div className={dash.topnav}>
              <ul className={dash.toplist}>
                <li className={dash.listitemHome}>Dashboard</li>
                <li className={dash.listitem}>Evaluation</li>
                <li className={dash.listitem}>Loan</li>
                <li className={dash.listitem}>Salary</li>
                <li className={dash.listitem}>Leave Management</li>
              </ul>
            </div>
          </div>
          <div className={dash.bottomnav}>
            <ul className={dash.bottomlist}>
              <li className={dash.listitem}>My account</li>
              <li className={dash.listitem}>Resources</li>
              <li className={dash.listitem}>Recommendation</li>
              <li className={dash.listitemEnd}>
                <button onClick={handleSubmit}>Sign out</button>
              </li>
            </ul>
          </div>
        </div>
        <div className={dash.box}>
          <div className={dash.nav}>
            <div className={dash.searchBox}>
              <img
                src={searchImg}
                alt="search icon"
                className={dash.searchIcon}
              />
              <input
                type="search"
                name="search-bar"
                id="search-bar"
                placeholder="Search for resources"
                className={dash.search}
              />
            </div>
            <div className={dash.account}>
              <div className={dash.bellnotif}>
                <img src={notif} alt="notification" className={dash.bellOn} />
                <img src={bell} alt="bell" className={dash.bellIcon} />
              </div>
              <div className={dash.userAccount}>
                <p>Gloria A.</p>
                <img src={userAcc} alt="user" className={dash.userImg} />
                <img src={down} alt="arrow icon" className={dash.downIcon} />
              </div>
            </div>
          </div>
          <div className={dash.main}>
            <div className={dash.body}>nody</div>
            <div className={dash.sidebar}>
              <div className={dash.sidebarInfo}>
                <div className={dash.sideHeading}>
                  <h2 className={dash.sideHeader}>Upcoming Birthdays</h2>
                  <img src={cake} alt="cake" />
                </div>
                <div>
                  <div className={dash.birthdays}>
                    <div>
                      <img src={userAcc} alt="user" className={dash.celeb} />
                    </div>
                    <div>
                      <p>Ifeoluwa Taiwo</p>
                      <p>Today</p>
                    </div>
                  </div>
                  <div className={dash.birthdays}>
                    <img src={userAcc} alt="user" className={dash.celeb} />
                    <div>
                      <p>Ifeoluwa Taiwo</p>
                      <p>Tomorrow</p>
                    </div>
                  </div>
                  <div className={dash.birthdays}>
                    <img src={userAcc} alt="user" className={dash.celeb} />
                    <div>
                      <p>Ifeoluwa Taiwo</p>
                      <p>hursday, 20 May</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={dash.sidebarInfo}>
                <div className={dash.sideHeading}>
                  <h2 className={dash.sideHeader}>Upcoming Events</h2>
                  {/* <img src={cake} alt="cake" /> */}
                </div>
                <div>
                  <div className={dash.birthdays}>
                    <div>
                      <img src={userAcc} alt="user" className={dash.celeb} />
                    </div>
                    <div>
                      <p>Ifeoluwa Taiwo</p>
                      <p>Today</p>
                    </div>
                  </div>
                  <div className={dash.birthdays}>
                    <img src={userAcc} alt="user" className={dash.celeb} />
                    <div>
                      <p>Ifeoluwa Taiwo</p>
                      <p>Tomorrow</p>
                    </div>
                  </div>
                  <div className={dash.birthdays}>
                    <img src={userAcc} alt="user" className={dash.celeb} />
                    <div>
                      <p>Ifeoluwa Taiwo</p>
                      <p>hursday, 20 May</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
