import React from 'react';
import Sidebar from '../sidebar/sidebar';

import Header from '../header/Header';

import { Outlet } from 'react-router-dom';

const applayout = () => {
  return (
   <div className='wrapper'>
     <Sidebar/>
    <div className='main-panel'>
        <div className='main-header'>
        <div className="main-header-logo">s
            {/* <!-- Logo Header --> */}
            <div className="logo-header" data-background-color="dark">
              <a href="index.html" className="logo">
                <img
                  src="assets/img/kaiadmin/logo_light.svg"
                  alt="navbar brand"
                  className="navbar-brand"
                  height="20"
                />
              </a>
              <div className="nav-toggle">
                <button className="btn btn-toggle toggle-sidebar">
                  <i className="gg-menu-right"></i>
                </button>
                <button className="btn btn-toggle sidenav-toggler">
                  <i className="gg-menu-left"></i>
                </button>
              </div>
              <button className="topbar-toggler more">
                <i className="gg-more-vertical-alt"></i>
              </button>
            </div>
            {/* <!-- End Logo Header --> */}
          </div>
          
        </div>
        <div className="container">
          <div className="page-inner">
          <Outlet />
          </div>

        </div>
        

        <footer/>
       
    </div>
    
   

   </div>
  );
}

export default applayout