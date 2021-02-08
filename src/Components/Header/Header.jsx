import React from 'react';
import './Header.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <a href="#" className='header__logo'>Logo</a>
        <div>
        <a href='#' className='header__login'>Username</a>
        <IconButton>
          <ExitToAppIcon style={{color: 'black'}}/>
        </IconButton>
        </div>
      </div>
    </header>
  )
}