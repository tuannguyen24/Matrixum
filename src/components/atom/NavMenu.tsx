import { FC } from 'react';
import { useRouter } from '../../hooks/common/useRouter';
import { IMenu } from '../../models/general';
import { colors } from '../../themes/foundations/colors';

export interface NavMenuProps {
  menus: IMenu[];
}

export const NavMenu: FC<NavMenuProps> = ({ menus, ...props }) => {
  const router = useRouter();
  const isMenu = !!menus.length;
  const ulStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    listStyleType: 'none',
  };

  const liStyle = {
    padding: '0 5px',
    margin: '0 5px',
    fontSize: '17px',
    color: '#000',
    fontFamily: 'GeoMan',
    cursor: 'pointer',
    position: 'relative' as 'relative',
    '&::after': {
      content: `''`,
      position: 'absolute' as 'absolute',
      left: 0,
      right: 0,
      margin: 'auto',
      backgroundColor: '#000',
      width: '100px',
      display: 'block',
      transition: 'all .3s cubic-bezier(.3,.77,.52,.64)',
    },
    '&::hover': {
      color: colors.lightOrange,
      after: {
        width: '100%',
        transition: 'all .3s cubic-bezier(.3,.77,.52,.64)',
      },
    },
  };
  const subMenuStyle = {
    position: 'absolute' as 'absolute',
    top: '0',
    left: '0',
    background: '#fff',
    boxShadow: '-1px 6px 17px -7px rgba(0,0,0,0.34)',
    minWidth: '400px',
    minHeight: '200px',
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const renderSubMenu = (subs: IMenu | IMenu[]) => {
    const isArray = Array.isArray(subs);
    return (
      <div style={subMenuStyle}>
        <ul>
          {isArray &&
            subs.map((menu, idx) => {
              return (
                <li onClick={() => handleNavigation(menu.path)} style={liStyle} key={idx}>
                  {menu.label}
                </li>
              );
            })}
          {!isArray && <li onClick={() => handleNavigation(subs.path)}>{subs.label}</li>}
        </ul>
      </div>
    );
  };

  return (
    <nav>
      <ul style={ulStyle}>
        {isMenu &&
          menus.map((menu, idx) => {
            const isSubMenu = menu.sub_menu;
            return (
              <li key={idx} onClick={() => handleNavigation(menu.path)} style={liStyle}>
                {menu.label}
                {isSubMenu && renderSubMenu(menu)}
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
