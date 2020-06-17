import React from 'react';

import About from './Section-about';
import Blog from './Section-blog';
import Footer from '../components/Footer';
import Header from './Header';
import MainNav from './MainNav';
import Partners from './Section-partners';
import Jobs from './Section-jobs';
import './home.scss';

export default (props) => {
  return (
    <div className="container">
      <MainNav />
      <Header />
      <Jobs />
      <About />
      <Blog />
      <Partners />
      <Footer />
    </div>
  )
}