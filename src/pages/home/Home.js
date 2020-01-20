import React from 'react';
import Header from './Header';
import Blog from './Section-blog';
import Companies from './Section-companies';
import About from './Section-about';
import Jobs from './Section-jobs';
import Footer from '../components/Footer';
import './home.scss';

export default (props) => {
  return (
    <div className="container">
      <Header />
      <Jobs />
      <About />
      <Blog />
      <Companies />
      <Footer />
    </div>
  )
}