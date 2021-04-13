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

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="horizontal-logo-div">
        <img src={NameLogoHIcon} alt="namelogoH" className="horizontal-logo" />
      </div>
      <span>
        <img src={LogoIcon} alt="logo" className="horizontal-logo-mobile" />
      </span>
      <a className="navbar-brand d-flex w-50 mr-auto" href='/#'>
        <span id="openNav" className="toggle-nav">
          <img src={MenuIcon} alt="menu" className="menu-logo" />
        </span>
      </a>
      <div className="navbar-collapse w-100" id="collapsingNavbar">
        <ul className="navbar-nav ml-auto navbar-user-details">
          <li id="notification-icon" className="nav-item bell-icon">
            <img
              src={NotificationBellIcon}
              alt="notification-bell"
              data-toggle="dropdown"
              className="bell-logo"
            />
            <span className="badge notification-badge">3</span>
            <ul
              className="dropdown-menu notifications"
              role="menu"
              aria-labelledby="dropdownMenu"
            >
              <div className="notification-heading">Notifications</div>
              <ul>
                <li className="row">
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
                    <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                  </div>
                </li>
                <li className="row">
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
                    <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                  </div>
                </li>
                <li className="row">
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
                    <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                  </div>
                </li>
                <li className="row">
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
                    <div className="notification-time">Oct 3, 2017 9:00 PM</div>
                  </div>
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
            </ul>
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
            <div className="dropdown">
              <a
                className="founder-dropdown dropdown-toggle"
                href="/#"
                id="dropdownMenuButton"
                data-toggle="dropdown"
              >
                Founder of app
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <div className="row">
                  <a className="dropdown-item user-dropdown" href="/#">
                    <div className="col-2">
                      <img src={UserProfileIcon} alt="user-profile" />
                    </div>
                    <div className="col-10">Profile</div>
                  </a>
                </div>
                <div>
                  <a className="dropdown-item user-dropdown" href="/#">
                    <div className="col-2">
                      <img
                        src={UserProfileSettingIcon}
                        alt="user-profile-seting"
                      />
                    </div>
                    <div className="col-10">Settings</div>
                  </a>
                </div>
                <div>
                  <a className="dropdown-item user-dropdown" href="/#">
                    <div className="col-2">
                      <img
                        src={UserProfilePasswordIcon}
                        alt="user-profile-password"
                      />
                    </div>
                    <div className="col-10">Change Password</div>
                  </a>
                </div>
                <div>
                  <a className="dropdown-item user-dropdown" href="/login">
                    <div className="col-2">
                      <img src={UserProfileIcon} alt="user-profile" />
                    </div>
                    <div className="col-10">Login</div>
                  </a>
                </div>
                <div>
                  <a className="dropdown-item user-dropdown" href="/#">
                    <div className="col-2">
                      <img
                        src={UserProfileLogoutIcon}
                        alt="user-profile-logout"
                      />
                    </div>
                    <div className="col-10">Logout</div>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
