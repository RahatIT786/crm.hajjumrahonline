import React, { useState } from 'react';
import RahatLogo from '../../assets/img/rahat_logo.png';
import { Link, useLocation } from 'react-router-dom'; 

const Sidebar = () => { // <-- Change to uppercase 'Sidebar'
  // State to manage the collapse of sections

  const location = useLocation();
  const isActive = (route) => location.pathname.includes(route);


  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [isCompanyManagementOpen, setCompanyManagementOpen] = useState(false);
  const [isStaffManagementOpen, setStaffManagementOpen] = useState(false);
  const [isFinanceManagementOpen, setFinanceManagementOpen] = useState(false);
  const [isInventory, setInventory] = useState(false);
  const [isPNR, setPNR] = useState(false);
  const [isService, setService] = useState(false);
  const [isSiteSettings, setSiteSettings] = useState(false);
  const [isGlobalSettings, setGlobalSettings] = useState(false);
  const toggleDashboard = () => {
    setDashboardOpen(!isDashboardOpen);
  };

  const toggleCompanyManagement = () => {
    setCompanyManagementOpen(!isCompanyManagementOpen);
  };

  const toggleStaffManagement = () => {
    setStaffManagementOpen(!isStaffManagementOpen);
  }

  const toggleFinanceManagement = () => {
    setFinanceManagementOpen(!isFinanceManagementOpen);
  }


  const toggleInventory = () => {
    setInventory(!isInventory)
  }
 const togglePNRManagement = () => {
    setPNR(!isPNR);
  }
  const toggleService = () => {
    setService(!isService)
  }

  const toggleSiteSettings = () => {
    setSiteSettings(!isSiteSettings)
  }

  const toggleGlobalSettings = () => {
    setGlobalSettings(!isGlobalSettings);
  }
 
  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <a href="" className="logo">
            <img
              src={RahatLogo}
              alt="navbar brand"
              className="navbar-brand"
              height="80px"
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
      </div>
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            {/* Dashboard Section */}
            <li className="nav-item active">
              <Link
                onClick={toggleDashboard}
                className={`collapsed ${isDashboardOpen ? 'show' : ''}`}
                aria-expanded={isDashboardOpen}
                to={'/dashboard'}
                
              >
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
              </Link>
            </li>

            {/* Company Management Section */}
            <li className={`nav-item ${isActive('company_management') ? 'active' : ''}`}>
              <a onClick={toggleCompanyManagement} className={`collapsed ${isCompanyManagementOpen ? 'show' : ''}`}>
                <i className="fas fa-layer-group"></i>
                <p>Company Management</p>
                <span className="caret"></span>
              </a>
              { (isCompanyManagementOpen || (isActive('company_management'))) && (
                <div className="collapse show">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to="/company_management/branch">
                        <span className="sub-item">Branches</span>
                      </Link>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Bank Accounts</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">GST</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Agent Management */}
            <li className="nav-item">
              <a data-bs-toggle="collapse">
                <i className="fas fa-layer-group"></i>
                <p>Agent Management</p>
              </a>
            </li>

            {/* Staff Management */}
            <li className="nav-item">
              <a onClick={toggleStaffManagement} className={`collapsed ${isStaffManagementOpen ? 'show' : ''}`}>
                <i className="fas fa-layer-group"></i>
                <p>Staff Management</p>
                <span className="caret"></span>
              </a>
              {isStaffManagementOpen && (
                <div className="collapse show">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to="/staff_management/role">
                        <span className="sub-item">Role</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/staff_management/department'>
                        <span className="sub-item">Department</span>
                      </Link>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Staff</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* User Management */}
            <li className="nav-item">
              <a data-bs-toggle="collapse">
                <i className="fas fa-layer-group"></i>
                <p>User Management</p>
              </a>
            </li>

            {/* CRM Lead / Queries Management */}
            <li className="nav-item">
              <a data-bs-toggle="collapse">
                <i className="fas fa-layer-group"></i>
                <p>CRM Lead / Queries</p>
              </a>
            </li>

            {/*Booking Management */}
            <li className="nav-item">
              <a data-bs-toggle="collapse">
                <i className="fas fa-layer-group"></i>
                <p>Booking Management</p>
              </a>
            </li>

            {/*Payment Management */}
            <li className="nav-item">
              <a data-bs-toggle="collapse">
                <i className="fas fa-layer-group"></i>
                <p>Payment Management</p>
              </a>
            </li>

            {/* Finance Management */}
            <li className="nav-item">
              <a onClick={toggleFinanceManagement} className={`collapsed ${isFinanceManagementOpen ? 'show' : ''}`}>
                <i className="fas fa-layer-group"></i>
                <p>Finance Management</p>
                <span className="caret"></span>
              </a>
              {isFinanceManagementOpen && (
                <div className="collapse show">
                  <ul className="nav nav-collapse">
                    <li>
                      <a>
                        <span className="sub-item">Wallet Management</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Forex Transaction</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Inventory */}
            <li className="nav-item">
              <a onClick={toggleInventory} className={`collapsed ${isInventory ? 'show' : ''}`}>
                <i className="fas fa-layer-group"></i>
                <p>Inventory</p>
                <span className="caret"></span>
              </a>
              {isInventory && (
                <div className="collapse show">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to='/inventory_management/packages'>
                        <span className="sub-item">Package management</span>
                      </Link>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Ziyarat Management</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Holidays Management</span>
                      </a>
                    </li>
                    <li>
                    <a onClick={togglePNRManagement} className={`collapsed ${isPNR ? 'show' : ''}`}>
                <i className="fas fa-layer-group"></i>
                <p>PNR Management</p>
                <span className="caret"></span>
              </a>
              {isPNR && (
                <div className="collapse show">
                  <ul className="nav nav-collapse">
                    <li>
                      <Link to='/pnr_management/pnr_list'>
                        <span className="sub-item">PNR List</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/pnr_management/booking_list'>
                        <span className="sub-item">PNR Booking List</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}

                      {/* <a>
                        <span className="sub-item">PNR  Management</span>
                      </a> */}
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Transport</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Catering</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">SiteSeeing</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Hotels</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Services */}
            <li className="nav-item">
              <a onClick={toggleService} className={`collapsed ${isService ? 'show' : ''}`}>
                <i className="fas fa-layer-group"></i>
                <p>Services</p>
                <span className="caret"></span>
              </a>
              {isService && (
                <div className="collapse show">
                  <ul className="nav nav-collapse">
                    <li>
                      <a>
                        <span className="sub-item">Laundry</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Forex</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Publications</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Guide & Assistant</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Shopping</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Hajj Umrah Kit</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Site Settings */}
            <li className="nav-item">
              <a onClick={toggleSiteSettings} className={`collapsed ${isSiteSettings ? 'show' : ''}`}>
                <i className="fas fa-layer-group"></i>
                <p>Site Settings</p>
                <span className="caret"></span>
              </a>
              {isSiteSettings && (
                <div className="collapse show">
                  <ul className="nav nav-collapse">
                    <li>
                      <a>
                        <span className="sub-item">Awards</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">AGM</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Events</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Blog</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Manage Cities</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Manage Package Includes</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">FAQ</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Site Fee</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Membership Plan</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Testimonial B2b</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">Testimonial B2C</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Reports */}
            <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>Reports</p>
                </a>
              </li>

            {/* Downloads */}
            <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>Downloads</p>
                </a>
            </li>

            {/* Flyers */}
            <li className="nav-item">
                <a data-bs-toggle="collapse">
                  <i className="fas fa-layer-group"></i>
                  <p>Flyers</p>
                </a>
            </li>

            {/* Global Settings */}
            <li className="nav-item">
              <a onClick={toggleGlobalSettings} className={`collapsed ${isGlobalSettings ? 'show' : ''}`}>
                <i className="fas fa-layer-group"></i>
                <p>Global Settings</p>
                <span className="caret"></span>
              </a>
              {isGlobalSettings && (
                <div className="collapse show">
                  <ul className="nav nav-collapse">
                    <li>
                      <a>
                        <span className="sub-item">IMAGE API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">AKBAR API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">TRIPJACK API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">TBO API</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="sub-item">ATOM PAYMENT</span>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; // <-- Make sure export name matches the component name
