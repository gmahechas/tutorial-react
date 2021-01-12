import React, { useEffect } from 'react';

declare var FB: any;

const Login = () => {
  useEffect(() => {
    FB.getLoginStatus(function (response: any) {
      console.log('STATUS:::', response);
    });
  }, []);

  const handleFBLogin = () => {
    FB.login(
      (response: any) => {
        console.log('submitLogin', response);
        if (response.authResponse) {
          console.log('login successful', 'Success!');
        } else {
          console.log('User login failed');
        }
      },
      {
        scope: 'email,pages_manage_cta,pages_messaging,public_profile',
        return_scopes: true,
      }
    );
  };

  const handleFBLogout = () => {
    FB.logout(function (response: any) {
      console.log('LogOut', response);
    });
  };

  return (
    <div>
      <button onClick={handleFBLogin}>Login</button>
      <button onClick={handleFBLogout}>Logout</button>
    </div>
  );
};

export default Login;
