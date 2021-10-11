async function login({ workEmail, password }) {
  const response = await fetch(
    'https://dion-erp.herokuapp.com/api/employees/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: workEmail,
        password: password,
      }),
    },
  ).then((response) => response.json());
  return response;
}

async function forgot({ workEmail }) {
  const response = await fetch(
    'https://dion-erp.herokuapp.com/api/employee/forgot-password',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: workEmail,
      }),
    },
  ).then((response) => response.json());
  return response;
}

async function reset({ password, confirmPassword }) {
  const mail = localStorage.getItem('user');
  const auth = localStorage.getItem('auth');
  const response = await fetch(
    'https://dion-erp.herokuapp.com/api/employee/reset-password',
    {
      method: 'POST',
      headers: {
        // Authorization: `Bearer ${auth}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        token: auth,
        email: mail,
        password: password,
        password_confirmation: confirmPassword,
      }),
    },
  ).then((response) => response.json());
  return response;
}

async function signOut() {
  const response = await fetch('{{erp_production}}/api/employee/logout').then(
    (response) => response.json(),
  );
  return response;
}

export { login, forgot, reset, signOut };
