import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  render () {
    return (
      <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/"><img src={require('../../assets/images/logo.svg')} alt="logo" /></Link>
          <Link className="navbar-brand brand-logo-mini d-inline-block d-lg-none" to="/"><img src={require('../../assets/images/logo-mini.svg')} alt="logo" /></Link>
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={ () => document.body.classList.toggle('sidebar-icon-only') }>
            <span className="icon-menu"></span>
          </button>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <h5 className="mb-0 font-weight-medium d-none d-xl-flex">
            <Trans>Welcome stellar dashboard!</Trans>
          </h5>
          <ul className="navbar-nav navbar-nav-right">
            <form className="search-form d-none d-lg-block" action="!#" onSubmit={evt => evt.preventDefault()}>
              <i className="icon-magnifier"></i>
              <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
            </form>
            <li className="nav-item"><a href="!#" onClick={evt => evt.preventDefault()} className="nav-link"><i className="icon-basket-loaded"></i></a></li>
            <li className="nav-item"><a href="!#" onClick={evt => evt.preventDefault()} className="nav-link"><i className="icon-chart"></i></a></li>
            <li className="nav-item message-dropdown">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <i className="icon-speech"></i>
                  <span className="count-number bg-danger">7</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <h6 className="p-3 mb-0"><Trans>
                    Messages
                  </Trans></h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face4.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>
                        Mark send you a message
                      </Trans></h6>
                      <p className="text-gray mb-0">
                        1 <Trans>
                          Minutes ago
                        </Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face2.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>
                        Cregh send you a message
                      </Trans></h6>
                      <p className="text-gray mb-0">
                        15 <Trans>
                          Minutes ago
                        </Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <img src={require("../../assets/images/faces/face3.jpg")} alt="user" className="profile-pic"/>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject ellipsis mb-1 font-weight-normal"><Trans>
                        Profile picture updated
                      </Trans></h6>
                      <p className="text-gray mb-0">
                        18 <Trans>
                          Minutes ago
                        </Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center cursor-pointer"><Trans>
                    4 new messages
                  </Trans></h6>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item dropdown language-dropdown d-none d-md-flex align-items-center">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link d-flex align-items-center">
                <div className="d-inline-flex mr-2">
                  <i className="flag-icon flag-icon-us"></i>
                </div>
                <span className="profile-text font-weight-normal"><Trans>
                  English
                </Trans></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown">
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="flag-icon flag-icon-us mr-2"></i> <Trans>
                      English
                    </Trans>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="flag-icon flag-icon-fr mr-2"></i> <Trans>
                      French
                    </Trans>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="flag-icon flag-icon-ae mr-2"></i> <Trans>
                      Arabic
                    </Trans>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="flag-icon flag-icon-ru mr-2"></i> <Trans>
                      Russian
                    </Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item nav-profile d-none d-sm-flex">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link">
                  <div className="nav-profile-img">
                    <img src={require("../../assets/images/faces/face8.jpg")} alt="user"/>
                    <span className="availability-status online"></span>
                  </div>
                  <div className="nav-profile-text">
                    <p className="mb-1 text-black"><Trans>Henry Klein</Trans></p>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="navbar-dropdown">
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                  <div class="dropdown-header text-center">
                    <img class="img-md rounded-circle" src={require("../../assets/images/faces/face8.jpg")} alt="user"/>
                    <p class="mb-1 mt-3">Henry Klein</p>
                    <p class="font-weight-light text-muted mb-0"><Trans>kleinhenry@gmail.com</Trans></p>
                  </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-user text-primary mr-2"></i> <Trans>My Profile</Trans> <span class="badge badge-pill badge-danger ml-2">1</span>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-speech text-primary mr-2"></i> <Trans>Messages</Trans>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-energy text-primary mr-2"></i> <Trans>Activity</Trans>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-question text-primary mr-2"></i> <Trans>FAQ</Trans>
                    </p>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <p class="preview-item d-flex align-items-center m-0">
                      <i class="dropdown-item-icon icon-power text-primary mr-2"></i><Trans>Sign Out</Trans>
                    </p>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={this.toggleOffcanvas}>
            <span className="icon-menu"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
