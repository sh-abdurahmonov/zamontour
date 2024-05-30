// styles
import "./Header.css";
// images
import SiteLogo from "../../assets/svg/site-logo.svg";
function Header() {
  return (
    <section className="header">
      <div className="header__container container">
        <a href="/" className="site-logo">
          <img src={SiteLogo} alt="Zamon business travel logo" />
        </a>
        <nav className="sitenav header__sitenav">
          <ul className="header-list">
            <li className="header-list__item">
              <a href="/" className="header-list__link">
                Home
              </a>
            </li>
            <li className="header-list__item">
              <a href="/" className="header-list__link">
                About
              </a>
            </li>
            <li className="header-list__item">
              <a href="/" className="header-list__link">
                Tours
              </a>
            </li>
            <li className="header-list__item">
              <a href="/" className="header-list__link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-navbar">
          <ul className="header-navbar__list">
            <li className="header-navbar__item">
              <button className="header-navbar__btn">uz</button>
            </li>
            <li className="header-navbar__item">
              <button className="header-navbar__btn">eng</button>
            </li>
            <li className="header-navbar__item">
              <button className="header-navbar__btn">ru</button>
            </li>
            <li className="header-navbar__item">
              <a
                className="header-navbar__link"
                href="http://t.me"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1503_421)">
                    <path
                      d="M16.8177 8.502L10.7318 13.4765L10.4454 13.7111C10.3825 13.761 10.3414 13.8333 10.3309 13.9129L10.2668 14.442L10.0909 15.9284C10.0925 15.9465 10.0869 15.9644 10.0752 15.9784C10.0636 15.9923 10.0469 16.0011 10.0288 16.0027C10.0107 16.0043 9.99275 15.9987 9.97882 15.9871C9.96488 15.9754 9.95613 15.9587 9.95451 15.9406L9.45951 14.4543L8.94814 12.9338C8.92633 12.8657 8.92912 12.7921 8.95603 12.7258C8.98295 12.6595 9.03227 12.6047 9.09542 12.5711L15.4281 8.94109L16.62 8.25928C16.7931 8.15837 16.9704 8.37655 16.8177 8.502Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M20.7273 0H3.27273C2.40475 0 1.57232 0.344804 0.95856 0.95856C0.344804 1.57232 0 2.40475 0 3.27273L0 20.7273C0 21.5953 0.344804 22.4277 0.95856 23.0414C1.57232 23.6552 2.40475 24 3.27273 24H20.7273C21.5953 24 22.4277 23.6552 23.0414 23.0414C23.6552 22.4277 24 21.5953 24 20.7273V3.27273C24 2.40475 23.6552 1.57232 23.0414 0.95856C22.4277 0.344804 21.5953 0 20.7273 0ZM19.485 6.94636L17.1423 17.2977C17.0318 17.7832 16.4155 18.0027 15.9832 17.7068L12.4459 15.3068L10.6445 17.01C10.5711 17.0789 10.4819 17.1289 10.3848 17.1555C10.2877 17.1822 10.1855 17.1848 10.0871 17.163C9.9888 17.1412 9.89725 17.0958 9.82044 17.0306C9.74363 16.9655 9.68387 16.8826 9.64636 16.7891L8.99591 14.88L8.34546 12.9709L4.85864 12.0164C4.76115 11.9951 4.67342 11.9422 4.60909 11.8659C4.54477 11.7896 4.50745 11.6942 4.50294 11.5945C4.49843 11.4948 4.52698 11.3964 4.58415 11.3147C4.64133 11.2329 4.72392 11.1723 4.81909 11.1423L18.2891 6.28909L18.5373 6.20045C19.0595 6.01773 19.5995 6.44045 19.485 6.94636Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1503_421">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li className="header-navbar__item">
              <a
                className="header-navbar__link"
                href="http://instagram.com"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1503_426)">
                    <path
                      d="M12.0037 5.83789C8.6007 5.83789 5.8457 8.59589 5.8457 11.9959C5.8457 15.3989 8.6037 18.1539 12.0037 18.1539C15.4067 18.1539 18.1617 15.3959 18.1617 11.9959C18.1617 8.59289 15.4037 5.83789 12.0037 5.83789ZM12.0037 15.9929C9.7947 15.9929 8.0067 14.2039 8.0067 11.9959C8.0067 9.78789 9.7957 7.99889 12.0037 7.99889C14.2117 7.99889 16.0007 9.78789 16.0007 11.9959C16.0017 14.2039 14.2127 15.9929 12.0037 15.9929Z"
                      fill="white"
                    ></path>
                    <path
                      d="M16.948 0.0763632C14.74 -0.0266368 9.27098 -0.0216368 7.06098 0.0763632C5.11898 0.167363 3.40598 0.636363 2.02498 2.01736C-0.283017 4.32536 0.0119831 7.43536 0.0119831 11.9964C0.0119831 16.6644 -0.248017 19.7024 2.02498 21.9754C4.34198 24.2914 7.49698 23.9884 12.004 23.9884C16.628 23.9884 18.224 23.9914 19.859 23.3584C22.082 22.4954 23.76 20.5084 23.924 16.9394C24.028 14.7304 24.022 9.26236 23.924 7.05236C23.726 2.83936 21.465 0.284363 16.948 0.0763632ZM20.443 20.4484C18.93 21.9614 16.831 21.8264 11.975 21.8264C6.97498 21.8264 4.96998 21.9004 3.50698 20.4334C1.82198 18.7564 2.12698 16.0634 2.12698 11.9804C2.12698 6.45536 1.55998 2.47636 7.10498 2.19236C8.37898 2.14736 8.75398 2.13236 11.961 2.13236L12.006 2.16236C17.335 2.16236 21.516 1.60436 21.767 7.14836C21.824 8.41336 21.837 8.79336 21.837 11.9954C21.836 16.9374 21.93 18.9544 20.443 20.4484Z"
                      fill="white"
                    ></path>
                    <path
                      d="M18.406 7.03425C19.2008 7.03425 19.845 6.38999 19.845 5.59525C19.845 4.80051 19.2008 4.15625 18.406 4.15625C17.6113 4.15625 16.967 4.80051 16.967 5.59525C16.967 6.38999 17.6113 7.03425 18.406 7.03425Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1503_426">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;
