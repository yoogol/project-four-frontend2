import axios from 'axios';
import ajaxHelpers from './ajaxHelpers';

module.exports = {
  login(email, password, afterLoginFxn) {
    if (this.loggedIn()) {
      if (afterLoginFxn) {
        afterLoginFxn(true);
      }
      return;
    }

    axios.post(ajaxHelpers.baseUrl + '/auth/sign_in', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.headers['access-token'];
      localStorage.client = response.headers.client;

      if (afterLoginFxn) {
        afterLoginFxn(true)
      }
    })
    .catch(function (response) {
      console.log('There was an error:', response);
      if (afterLoginFxn) {
        afterLoginFxn(false);
      }
    });
  },

  signup(email, password, password_confirmation, afterSignupFxn) {
    if (this.loggedIn()) {
      if (afterSignupFxn) {
        afterSignupFxn(true)
      }

      return;
    }

    axios.post(ajaxHelpers.baseUrl + '/auth/', {
      email: email,
      password: password,
      password_confirmation: password
    })
    .then(function (response) {
      console.log(response);
      localStorage.uid = response.headers.uid;
      localStorage.accessToken = response.headers['access-token'];
      localStorage.client = response.headers.client;

      if (afterSignupFxn) {
        afterSignupFxn(true)
      }
    })
    .catch(function (response) {
      console.log('There was an error:', response.data.errors);
      if (afterSignupFxn) {
        afterSignupFxn(false);
      }
    });
  },
  //
  // logout(afterLogoutFxn) {
  //
  //   // grab the access-token, uid, and client from localstorage
  //   const uid = localStorage.uid;
  //   const accessToken = localStorage.accessToken;
  //   const client = localStorage.client;
  //
  //   axios.delete(ajaxHelpers.baseUrl + '/auth/sign_out', {
  //     headers: {
  //       'uid': uid,
  //       'access-token': accessToken,
  //       'client': client
  //     }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     // we successfully logged out. delete everything from local storage
  //     delete localStorage.uid
  //     delete localStorage.accessToken
  //     delete localStorage.client
  //
  //     if (afterLogoutFxn) {
  //       afterLogoutFxn(true)
  //     }
  //   })
  //   .catch(function (response) {
  //     // we failed to logout
  //     console.log('There was an error', response);
  //     if (afterLogoutFxn) {
  //       afterLogoutFxn(false);
  //     }
  //   });
  // },

  // for FE to verify you're logged in, just checks to see if tokens exist
  loggedIn() {
    return (!!localStorage.uid && !!localStorage.accessToken && !!localStorage.client);
  },
}
