import React from 'react';

const Login = () => {
  const [isMember, setIsMember] = React.useState(true);
  const [isReset, setIsReset] = React.useState(true);

  const toggleMember = () => {
    setIsMember((prev) => {
      const isMember = !prev;

      // isReset ? setIsReset(false) : setIsReset(true);
      return isMember;
    });
  };

  const toggleReset = () => {
    setIsReset((prev) => {
      const isReset = !prev;
      // isMember ? setCpassword('default') : setCpassword('');
      return isReset;
    });
  };

  return (
    <>
      {isMember && (
        <>
          <div>
            <label htmlFor="workEmail">
              <div>Work Email</div>
              <input
                id="workEmail"
                name="workEmail"
                type="text"
                // value={fpassword}
                // onChange={(e) => setFpassword(e.target.value)}
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
                // value={fpassword}
                // onChange={(e) => setFpassword(e.target.value)}
                placeholder="**********"
              />
            </label>
          </div>
        </>
      )}
      {!isMember && (
        <>
          {isReset && (
            <>
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
                <label htmlFor="Password">
                  <div>Work Email</div>
                  <input
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    // value={cpassword}
                    // onChange={(e) => setCpassword(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="Password">
                  <div>Work Email</div>
                  <input
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    // value={cpassword}
                    // onChange={(e) => setCpassword(e.target.value)}
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
        <button onClick={toggleMember}>
          {isMember ? 'Forget password' : 'Back to Sign in'}
        </button>
      </div>
    </>
  );
};

export default Login;
