import React from 'react';
import DarkLogo from '../../assets/darkLogo.png'
import '../../Components/Footer/footer.scss'

const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <img src={DarkLogo} alt="DarkLogo" />
            <div className='footer-text'>
                <p>© 2024 Kasa. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
