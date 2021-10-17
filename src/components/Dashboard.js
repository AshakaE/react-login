import React from 'react';
// import { signOut } from '../assets/utils/auth';
import { useHistory } from 'react-router-dom';
import dash from '../assets/css/dashboard.module.css';
import logo from '../assets/images/UK-DION-2.png';
import searchImg from '../assets/images/search.png';
import bell from '../assets/images/bell.png';
import notif from '../assets/images/bellnote.png';
import loginpage from '../assets/css/login.module.css';
import medal from '../assets/images/medal.png';
import userImage from '../assets/images/user.png';
import clouds from '../assets/images/clouds.png';
import userAcc from '../assets/images/Gloria.png';
import down from '../assets/images/down.png';
import left from '../assets/images/left.png';
import right from '../assets/images/right.png';
import cake from '../assets/images/cake.png';
import fire from '../assets/images/fire.png';
import conference from '../assets/images/conference.png';
import notice from '../assets/images/notice.png';

const Dashboard = () => {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // await signOut();
    localStorage.clear();
    history.push('/');
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
            <div className={dash.body}>
              <div className={dash.topBody}>
                <div className={dash.welcome}>
                  <div className={dash.aside}>
                    <div className={dash.weather}>
                      <div>
                        <p className={dash.time}>Monday, 10:38 AM</p>
                        <p className={dash.greet}>
                          Good Morning,
                          <span className={dash.greetName}> Gloria!</span>
                        </p>
                      </div>
                      <img src={clouds} alt="clouds" />
                    </div>
                    <div className={dash.quote}>
                      <div className={dash.quoteHeader}>
                        <h2>Quote of the day</h2>
                        <img src={fire} alt="fire" />
                      </div>
                      <div className={dash.article}>
                        <div>
                          <p className={dash.wquote}>
                            Add an inspiring and motivational quote here. It can
                            be business, finance, personal developemt or any
                            kind.
                          </p>
                          <span className={dash.quoteName}>
                            -Ifeoluwa Taiwo
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={dash.achievement}>
                  <div className={dash.userInfo}>
                    <h2 className={dash.headingInfo}>Employee of the month</h2>
                    <div className={loginpage.userImg}>
                      <img src={userImage} alt="user" />
                    </div>
                    <div className={loginpage.userName}>
                      <h3>Gloria Agboifoh</h3>
                      <p className={loginpage.userTitle}>
                        Product & Innovation Mgt.
                      </p>
                    </div>
                    <div className={dash.medal}>
                      <img src={medal} alt="medal" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={dash.bottomBody}>
                <div className={dash.notifications}>
                  <div className={dash.notificationsHeader}>
                    <h2 className={dash.notificationsHeading}>Notification</h2>
                    <p className={dash.notificationsAll}>View all</p>
                  </div>
                  <div className={dash.notification}>
                    <div className={dash.notifier}>
                      <img src={notif} alt="notification" />
                    </div>
                    <div className={dash.noteInfo}>
                      <div className={dash.noteInfoTitle}>
                        <h2>
                          Review your supervisor's comments & recommendations
                        </h2>
                        <p className={dash.noteInfoUser}>Ifeoluwa Taiwo</p>
                      </div>
                      <div className={dash.noteInfoTime}>
                        <div className={dash.noteInfoTimestamp}>
                          <p>Friday 21 May</p>
                          <p>02:34 PM</p>
                        </div>
                        <div className={dash.noteInfoType}>
                          <p>Review</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className={dash.notifRule} />
                  <div className={dash.notification}>
                    <div className={dash.notifier}>
                      <img src={notif} alt="notification" />
                    </div>
                    <div className={dash.noteInfo}>
                      <div className={dash.noteInfoTitle}>
                        <h2>
                          Review your supervisor's comments & recommendations
                        </h2>
                        <p className={dash.noteInfoUser}>Ifeoluwa Taiwo</p>
                      </div>
                      <div className={dash.noteInfoTime}>
                        <div className={dash.noteInfoTimestamp}>
                          <p>Friday 21 May</p>
                          <p>02:34 PM</p>
                        </div>
                        <div className={dash.noteInfoType}>
                          <p>Review</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={dash.news}>
                  <div className={dash.newsHeader}>
                    <h2 className={dash.newsHeading}>
                      Latest Announcements & News
                    </h2>
                    <div className={dash.paginateButtons}>
                      <button className={dash.buttonOne}>
                        <img src={left} alt="left arrow" />
                      </button>
                      <button className={dash.buttonTwo}>
                        <img src={right} alt="right arrow" />
                      </button>
                    </div>
                  </div>
                  <div className={dash.newsBx}>
                    <div className={dash.newsDiv}>
                      <img src={notice} alt="notice" />
                      <div className={dash.newsInfo}>
                        <h2>Staff onboarding session</h2>
                        <p className={dash.newsPara}>
                          The onboarding session is basically for all new
                          employees.
                        </p>
                      </div>
                    </div>
                    <div className={dash.newsDiv}>
                      <img src={conference} alt="conference" />
                      <div className={dash.newsInfo}>
                        <h2>Staff onboarding session</h2>
                        <p className={dash.newsPara}>
                          The onboarding session is basically for all new
                          employees.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                      <p>Thursday, 20 May</p>
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
                      <p>Thursday, 20 May</p>
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
