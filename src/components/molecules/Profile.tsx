import { FC, useState } from 'react';
import { Cart2Icon, SearchIcon, UserIcon } from '../../assets/icons';
import { colors } from '../../themes/foundations/colors';

export const Profile: FC = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const profileStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cartStyle = {
    position: 'relative' as 'relative',
  };

  const countProductStyle = {
    position: 'absolute' as 'absolute',
    top: '-10px',
    right: '-6px',
    width: '15px',
    height: '15px',
    background: colors.danger,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const space = { padding: '0 5px' };

  const searchWrapperStyle = {
    position: 'fixed' as 'fixed',
    top: '0',
    left: '0',
    zIndex: '500',
    width: '100vw',
    height: '100vh',
    background: colors.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputStyle = {
    width: '350px',
    border: 'none',
    borderBottom: `2px solid ${colors.black}`,
    outline: 'none',
    fontSize: '20px',
    fontFamily: 'GeoMan',
    padding: '5px',
  };

  const closeStyle = {
    fontSize: '20px',
    fontFamily: 'GeoMan',
    fontWeight: 'bold',
    position: 'absolute' as 'absolute',
    top: '15px',
    right: '30px',
    cursor: 'pointer',
  };

  const renderSearch = () => {
    return (
      <div style={searchWrapperStyle}>
        <p onClick={showSearch} style={closeStyle}>
          close
        </p>
        <input style={inputStyle} placeholder="search" />
        <SearchIcon style={{ cursor: 'pointer' }} />
      </div>
    );
  };

  const showSearch = () => {
    setIsSearch((prev) => !prev);
  };

  return (
    <div style={profileStyle}>
      {isSearch && renderSearch()}
      <SearchIcon onClick={showSearch} style={{ cursor: 'pointer' }} />
      <span style={space}></span>
      <div style={cartStyle}>
        <Cart2Icon style={{ cursor: 'pointer' }} />
        <span style={countProductStyle}></span>
      </div>
      <span style={space}></span>
      <UserIcon style={{ cursor: 'pointer' }} />
    </div>
  );
};
