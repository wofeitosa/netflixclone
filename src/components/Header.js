import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''} >
           
           <div className="header--logo">
                <a href="/">
                    <img src="https://www.dishinfo.com/wp-content/uploads/2022/02/NetflixLogoBlack.jpeg" alt="Netflix" />
                </a>
            </div>    
                <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
          

        </header>
    );
}