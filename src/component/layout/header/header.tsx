import React from 'react';
import { Grid, List, ListItem } from '@mui/material';
import { Home } from '@mui/icons-material';
import './header.scss';
import { Link } from 'react-router-dom';

const headerLinks = [
  { id: '1', name: 'home' },
  { id: '2', name: 'home' },
  { id: '3', name: 'home' },
  { id: '4', name: 'home' },
  { id: '5', name: 'home' },
  { id: '6', name: 'home' },
  { id: '7', name: 'home' },
  { id: '8', name: 'home' },
]


const Header = () => {
  return (
    <div className='header-wrapper'>
      <header className="header">
        <Grid container alignItems='center' justifyContent='space-between' sx={{ p: 1.5 }}>
          <Grid item lg={1.5} md={1} xs={1}>
            <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_wkIXgEZ84cG8qMghiNdCEHbczvYXj_8IBw&usqp=CAU' alt='logo' />
          </Grid>
          <Grid item lg={9} md={10} xs={10}>
            <Grid container justifyContent='center' alignItems='center' sx={{ height: '100%' }}>
              <Grid item xs={12}>
                <ul className='nav-links'>
                  {
                    headerLinks.map(links => (
                      <li className='nav-link' key={links.id}><Link className='link' to='/'><span>Home</span></Link></li>
                    ))
                  }
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={1.5} md={1} xs={1}>item 1</Grid>
        </Grid>
      </header>
    </div>
  )
}

export default Header