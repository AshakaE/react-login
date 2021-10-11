import React from 'react';
import { signOut } from '../assets/utils/auth';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signOut();
    history.push('/dashboard');
  };
  return (
    <>
      <div>Dash</div>
      <div>
        <button onClick={handleSubmit}>Sign out</button>
      </div>
    </>
  );
};

export default Dashboard;
