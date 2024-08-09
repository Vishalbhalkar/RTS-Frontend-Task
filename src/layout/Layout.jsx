import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <div className='main_container'>
    <Header />
    </div>
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
