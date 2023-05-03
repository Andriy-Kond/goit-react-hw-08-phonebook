import defaultAvatar from '../images/noUser.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, selectUserToken } from '../redux/auth/selectors';
import { fetchLogOut } from 'redux/auth/fetchAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const name = useSelector(selectUserName);
  const avatar = defaultAvatar;

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <img src={avatar} alt="default avatar" width="32" />
        <p>Welcome, {name}</p>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => dispatch(fetchLogOut(token))}
        >
          Logout
        </button>
      </div>
    </>
  );
};
