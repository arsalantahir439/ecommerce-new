import React, { useState } from 'react';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import './header.scss';

const headerLinks = [
  { id: '1', name: 'home', link: '/' },
  { id: '2', name: 'men', link: '/' },
  { id: '3', name: 'woman' },
  { id: '4', name: 'kids' },
  { id: '5', name: 'shoes' },
  { id: '6', name: 'bags' },
  { id: '7', name: 'unstitched' },
]


const Header = () => {

  const [toggleSideBar, setToggleSideBar] = useState<boolean>(false);

  return (
    <div className='header-wrapper'>
      <header className="header d-flex align-center justify-between">

        <div className="logo d-flex align-center">
          <MenuIcon className='menu-icon cursor-pointer' onClick={() => setToggleSideBar(true)} />
          <img className='logo-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wkIXgEZ84cG8qMghiNdCEHbczvYXj_8IBw&usqp=CAU' alt='logo' />
        </div>

        <div className={`ul-div ${toggleSideBar ? 'ul-div-active' : 'ul-div-disable'}`}>
          <ul className='nav-links'>
            <Close className='close-icon cursor-pointer' onClick={() => setToggleSideBar(false)} />
            {
              headerLinks.map(links => (
                <li className='nav-link text-capitalize' key={links.id}><Link className='link' to='/'>{links.name}</Link></li>
              ))
            }
          </ul>
        </div>

        <div className="d-flex align-center justify-between">
          <SearchIcon className='header-icon cursor-pointer' />
          <ShoppingBagIcon className='header-icon cursor-pointer' />
          <PersonIcon className='header-icon cursor-pointer' />
        </div>

      </header>
    </div>
  )
}

export default Header