import { FC } from 'react';
import { Brand } from '../atom/Brand';
import { NavMenu } from '../atom/NavMenu';
import BrandImage from '../../assets/image/mistrium-logo.png';
import { Container } from './Container';
import { Profile } from '../molecules/Profile';

export interface HeaderProps {
  padding?: string;
}

export const Header: FC<HeaderProps> = ({ padding }) => {
  const menus = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'About us',
      path: '/about',
    },
    {
      label: 'Products',
      path: '/products',
    },
    {
      label: 'Faqs',
      path: '/faqs',
    },
    {
      label: 'Contact us',
      path: '/contact',
    },
  ];

  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky' as 'sticky',
    zIndex: 50,
    background: 'transparent',
  };

  return (
    <Container>
      <header style={styles}>
        <Brand brand_image={BrandImage} />
        <NavMenu menus={menus} />
        <Profile />
      </header>
    </Container>
  );
};
