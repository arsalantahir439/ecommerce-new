import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './footer.scss';
import '../../../scss/common.scss';

const footerLinks = [
  {
    id: '1',
    heading: 'information',
    tabs: [
      { id: '1', name: 'faqs', path: '/faqs' },
      { id: '2', name: 'privacy policy', path: '/privacy-policy' },
      { id: '3', name: 'exchange rate', path: '/exchange-rate' },
      { id: '4', name: 'international policy', path: '/international-policy' },
      { id: '5', name: 'store locator', path: '/store-locator' },
    ]
  },
  {
    id: '2',
    heading: 'company',
    tabs: [
      { id: '1', name: 'about us', path: '/about-us' },
      { id: '2', name: 'contact us', path: '/contact-us' },
    ]
  },
  {
    id: '3',
    heading: 'help',
    tabs: [
      { id: '1', name: 'contact: +92-300-123-456-7', path: '#' },
      { id: '2', name: 'email: email@email.com', path: '#' },
      { id: '3', name: 'customer care mon to sat (10:00 am - 8:00 pm)', path: '#' },
    ]
  },

  {
    id: '4',
    heading: 'connect',
    tabs: [
      { id: '1', name: 'facebook', path: '/www.facebook.com', icon: <FacebookIcon /> },
      { id: '2', name: 'instagram', path: '/www.instagram.com', icon: <InstagramIcon /> },
      { id: '3', name: 'whatsapp', path: '/www.whatsapp.com', icon: <WhatsAppIcon /> },
    ]
  },

]

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <Grid container >
          {
            footerLinks.map(({ id, heading, tabs }) => (
              <Grid key={id} item lg={3} md={4} sm={6} xs={12} className='footer-container'>
                <div className="footer-box">
                  <h3 className='footer-heading'>{heading}</h3>
                  <ul className='footer-ul'>
                    {tabs.map(({ id, name, path, icon }: any) => (
                      <li className='footer-li' key={id}><Link className='footer-link' to={path}><span>{icon}</span>{name}</Link></li>
                    ))}
                  </ul>
                </div>
              </Grid>
            ))
          }
        </Grid>
        <div className="footer-content d-flex align-center justify-between flex-wrap">
          <span>all right reserved</span>
          <span className='d-flex align-center'>made with <FavoriteIcon sx={{ mx: 1 }} /> & <CoffeeIcon sx={{ ml: 1 }} /></span>
          <span>created by A.A.</span>
        </div>
      </div>
    </>
  )
}

export default Footer