import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';

import { UserMenu } from '../UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import { selectIsToken } from 'redux/auth/selectors';
// import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectIsToken);
  return (
    <>
      {/* <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          // display: 'flex',
          justifyContent: 'space-between',
          // alignItems: 'center',

          // gap: '10px',
          fontSize: '24px',
          backgroundColor: '#409bdb',
        }}
      >
        <Navigation />
        {isToken ? <UserMenu /> : <AuthNav />}
      </nav> */}

      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        style={{
          // display: 'flex',
          // justifyContent: 'space-between',
          // width: '100%',
          // alignItems: 'center',

          // gap: '10px',
          fontSize: '24px',
          // backgroundColor: '#e3f2fd',
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{
                // display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                // alignItems: 'center',

                // gap: '10px',
                // fontSize: '24px',
                // backgroundColor: '#e3f2fd',
              }}
            >
              <li className="nav-item">
                <Navigation className="nav-link " />
              </li>
              <li className="nav-item">
                {isToken ? (
                  <UserMenu className="nav-link " />
                ) : (
                  <AuthNav className="nav-link " />
                )}
                {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
