import React from 'react';
import {  FaFacebook, FaLinkedin, FaTwitter,FaGithub ,FaInstagram} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/home',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/account',
    text: 'profile',
  }
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
   
  {
    id: 4,
    url: 'https://www.github.com',
    icon: <FaGithub />,
  },
  {
    id: 5,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
];