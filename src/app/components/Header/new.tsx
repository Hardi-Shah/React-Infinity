import React from "react";
import {
  ChevronDownGreyIcon,
  LogoIcon,
  MenuIcon,
  NameLogoHIcon,
  NotificationBellIcon,
  UserImage01Icon,
  UserImage02Icon,
  UserImage03Icon,
  UserImage04Icon,
  UserImage05Icon,
  UserProfileIcon,
  UserProfileLogoutIcon,
  UserProfilePasswordIcon,
  UserProfileSettingIcon,
} from "../../assets/images";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Header2 = () => {
  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="horizontal-logo-div">
        <img src={NameLogoHIcon} alt="namelogoH" className="horizontal-logo" />
      </div>
      <span>
        <img src={LogoIcon} alt="logo" className="horizontal-logo-mobile" />
      </span>
      <Link className="navbar-brand d-flex w-50 mr-auto" to="#">
        <span id="openNav" className="toggle-nav">
          <img src={MenuIcon} alt="menu" className="menu-logo" />
        </span>
      </Link>
      <div className="navbar-collapse" id="collapsingNavbar">
        <ul className="navbar-nav ml-auto navbar-user-details">
          <li id="notification-icon" className="nav-item bell-icon">
            <Dropdown>
              <Dropdown.Toggle>
                <img
                  src={NotificationBellIcon}
                  alt="notification-bell"
                  className="bell-logo"
                />
              </Dropdown.Toggle>
              <span className="badge new-notification">3</span>

              <ul>
                <Dropdown.Menu className="notifications">
                  <div className="notification-heading">Notifications</div>
                  <ul>
                    <li className="row">
                      <Dropdown.Item>
                        <div className="col-2">
                          <img
                            src={UserImage01Icon}
                            alt="user-01"
                            className="founder-logo"
                          />
                        </div>
                        <div className="col-10">
                          <div className="notification-message">
                            Suzzeth Bungaos tagged you and 18 others in a post
                          </div>
                          <div className="notification-time">
                            Oct 3, 2017 9:00 PM
                          </div>
                        </div>
                      </Dropdown.Item>
                    </li>
                    <li className="row">
                      <Dropdown.Item>
                        <div className="col-2">
                          <img
                            src={UserImage02Icon}
                            alt="user-02"
                            className="founder-logo"
                          />
                        </div>
                        <div className="col-10">
                          <div className="notification-message">
                            Suzzeth Bungaos tagged you and 18 others in a post
                          </div>
                          <div className="notification-time">
                            Oct 3, 2017 9:00 PM
                          </div>
                        </div>
                      </Dropdown.Item>
                    </li>
                    <li className="row">
                      <Dropdown.Item>
                        <div className="col-2">
                          <img
                            src={UserImage03Icon}
                            alt="user-03"
                            className="founder-logo"
                          />
                        </div>
                        <div className="col-10">
                          <div className="notification-message">
                            Suzzeth Bungaos tagged you and 18 others in a post
                          </div>
                          <div className="notification-time">
                            Oct 3, 2017 9:00 PM
                          </div>
                        </div>
                      </Dropdown.Item>
                    </li>
                    <li className="row">
                      <Dropdown.Item>
                        <div className="col-2">
                          <img
                            src={UserImage04Icon}
                            alt="user-04"
                            className="founder-logo"
                          />
                        </div>
                        <div className="col-10">
                          <div className="notification-message">
                            Suzzeth Bungaos tagged you and 18 others in a post
                          </div>
                          <div className="notification-time">
                            Oct 3, 2017 9:00 PM
                          </div>
                        </div>
                      </Dropdown.Item>
                    </li>
                  </ul>

                  <li className="view-all">
                    Show All
                    <span>
                      <img
                        src={ChevronDownGreyIcon}
                        alt="chevron-down-grey"
                        className="chevron-down-logo"
                      />
                    </span>
                  </li>
                </Dropdown.Menu>
              </ul>
            </Dropdown>
          </li>

          <li className="nav-item">
            <img
              src={UserImage05Icon}
              alt="user-05"
              className="user-profile-logo"
            />
          </li>
          <li className="nav-item nav-item-mobile">
            <div className="founder-name">John Doe</div>
            {/* <div className="dropdown">
              <Link
                className="founder-dropdown dropdown-toggle"
                to=""
                id="dropdownMenuButton"
                data-toggle="dropdown"
              >
                Founder of app
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="row">
                  <Link className="dropdown-item user-dropdown" to="">
                    <div className="col-2">
                      <img src={UserProfileIcon} alt="user-profile" />
                    </div>
                    <div className="col-10">Profile</div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item user-dropdown" to="">
                    <div className="col-2">
                      <img
                        src={UserProfileSettingIcon}
                        alt="user-profile-seting"
                      />
                    </div>
                    <div className="col-10">Settings</div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item user-dropdown" to="">
                    <div className="col-2">
                      <img
                        src={UserProfilePasswordIcon}
                        alt="user-profile-password"
                      />
                    </div>
                    <div className="col-10">Change Password</div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item user-dropdown" to="login.html">
                    <div className="col-2">
                      <img src={UserProfileIcon} alt="user-profile" />
                    </div>
                    <div className="col-10">Login</div>
                  </Link>
                </div>
                <div>
                  <Link className="dropdown-item user-dropdown" to="#">
                    <div className="col-2">
                      <img
                        src={UserProfileLogoutIcon}
                        alt="user-profile-logout"
                      />
                    </div>
                    <div className="col-10">Logout</div>
                  </Link>
                </div>
              </div>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle className="founder-dropdown">
                Founder of app
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="row">
                  <Dropdown.Item className="user-dropdown" href="">
                    <div className="col-2">
                      <img src={UserProfileIcon} alt="user-profile" />
                    </div>
                    <div className="col-10">Profile</div>
                  </Dropdown.Item>
                  <Dropdown.Item className="user-dropdown" href="">
                    <div className="col-2">
                      <img
                        src={UserProfileSettingIcon}
                        alt="user-profile-seting"
                      />
                    </div>
                    <div className="col-10">Settings</div>
                  </Dropdown.Item>
                  <Dropdown.Item className="user-dropdown" href="">
                    <div className="col-2">
                      <img
                        src={UserProfilePasswordIcon}
                        alt="user-profile-password"
                      />
                    </div>
                    <div className="col-10">Change Password</div>
                  </Dropdown.Item>
                  <Dropdown.Item className="user-dropdown" href="">
                    <div className="col-2">
                      <img src={UserProfileIcon} alt="user-profile" />
                    </div>
                    <div className="col-10">Login</div>
                  </Dropdown.Item>
                  <Dropdown.Item className="user-dropdown" href="">
                    <div className="col-2">
                      <img
                        src={UserProfileLogoutIcon}
                        alt="user-profile-logout"
                      />
                    </div>
                    <div className="col-10">Logout</div>
                  </Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header2;
