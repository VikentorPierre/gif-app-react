import React, { useState, useEffect, useContext } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import fire from '../../firebase';
import '../../css/shared/header.css';

const Header = props => {
  const [searchValue, setSearchValue] = useState('');
  const { currentUser, appTitle } = useContext(AuthContext);
  let myHis = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const text1 = searchValue.trim().replace(/ /g, '+');
    myHis.push('/search/' + text1);
    setSearchValue('');
  };

  return (
    <header className='header-main-site'>
      <div className='top-navbar'>
        <Link to='/' className='header-main-site_brand'>
          <h1 style={{ marginLeft: '5px' }}> Gif-Search </h1>
        </Link>
        <nav className='header-main-site_nav'>
          {currentUser ? (
            <ul className='auth'>
              <li>
                <Link
                  to='#'
                  className='login'
                  onClick={() => fire.auth().signOut()}>
                  Sign out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className='auth'>
              <li>
                <Link to='/login' className='login'>
                  Log In
                </Link>
              </li>
              <li>
                <Link to='/signup' className='signup'>
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
      <div className='header-main-site_wrap'>
        <Link to='/' className='header-main-site_brand'>
          <h1> Gif-Search</h1>
        </Link>
        <div className='header-main-site_search'>
          <form action='' className='search-form' onSubmit={handleSubmit}>
            <input
              class='search-bar-form-control'
              type='text'
              name='search'
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder='Search'
              aria-label='Search'
            />
            <button
              href='#'
              class='search-form-btn'
              type='submit'
              disabled={!searchValue}>
              <i class='fas fa-search search-icon' aria-hidden='true'></i>
            </button>
          </form>
        </div>
        <nav className='header-main-site_nav'>
          {currentUser ? (
            <ul className='auth'>
              <li>
                <Link
                  to='#'
                  className='login'
                  onClick={() => fire.auth().signOut()}>
                  Sign out
                </Link>
              </li>
            </ul>
          ) : (
            <ul className='auth'>
              <li>
                <Link to='/login' className='login'>
                  Log In
                </Link>
              </li>
              <li>
                <Link to='/signup' className='signup'>
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
