import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import fire from '../firebase';
import { AuthContext } from '../contexts/authContext';
import '../css/shared/feed.css';
import '../css/shared/auth.css';

const Signup = ({ history }) => {
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <main className='main-feed-content site-auth-content'>
      <div className='auth-wrap'>
        <h1 className='auth-h1'> Sign Up </h1>
        <form className='auth-wrap_form' onSubmit={handleSignUp}>
          <input
            type='email'
            className='auth-form_inpt'
            name='email'
            placeholder='E-mail'
          />
          <input
            type='password'
            className='auth-form_inpt'
            name='password'
            placeholder='Password'
          />
          <input
            type='submit'
            className='auth-submit_btn'
            value='Sign Up'
            // onClick={e => e.preventDefault() && false}
          />
        </form>
      </div>
    </main>
  );
};

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' />;
  }

  return (
    <main className='main-feed-content site-auth-content'>
      <div className='auth-wrap'>
        <h1 className='auth-h1'> Log In </h1>
        <form className='auth-wrap_form' onSubmit={handleLogin}>
          <input
            type='email'
            className='auth-form_inpt'
            name='email'
            placeholder='E-mail'
          />
          <input
            type='text'
            className='auth-form_inpt'
            name='password'
            placeholder='Password'
          />
          <input
            type='submit'
            className='auth-submit_btn'
            value='Log In'
            // onClick={e => e.preventDefault() && false}
          />
        </form>
      </div>
    </main>
  );
};
export { Signup, Login };
