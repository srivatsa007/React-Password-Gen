// Header.js
import React from 'react';
import keyhole from './keyhole.png';
// import ToggleSwitch from './ToggleSwitch';

const Header = (
    // { darkMode, setDarkMode }
    ) => {
  return (
    <header className=' flex items-center justify-between sticky top-0 z-40 px-3 py-4 text-white lg:px-16 bg-zinc-900 h-[10vh]'>
			<div className='logo-section flex items-center gap-4'>
				<img src={keyhole}  alt='logo'/>
				<h2 className='logo-text'>Secure Vatsa</h2>
			</div>
    </header >
            )

};

export default Header;
