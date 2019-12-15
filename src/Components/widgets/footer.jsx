import React from 'react';

import '../../css/shared/footer.css';

const Footer = () => {
  const style = {
    height: '50px',
    backgroundColor: 'red'
  };
  return (
    <footer className='main-footer'>
      <div className='container'>
        <h2 className='footer-text'> &copy; all Rights reserve </h2>
      </div>
    </footer>
  );
};

export default Footer;
