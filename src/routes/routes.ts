import { FC, lazy } from 'react';

export interface RouteConfig {
  path: string;
  component?: FC;
  guard?: FC<any>;
  exact?: boolean;
  metaData: string;
}

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Product = lazy(() => import('../pages/Products'));
const Faqs = lazy(() => import('../pages/Faqs'));
const Contact = lazy(() => import('../pages/Contact'));

export const publicRoutes: RouteConfig[] = [
  {
    metaData: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    metaData: 'About us',
    path: '/about',
    exact: true,
    component: About,
  },
  {
    metaData: 'Products',
    path: '/products',
    exact: true,
    component: Product,
  },
  {
    metaData: 'FAQS',
    path: '/faqs',
    exact: true,
    component: Faqs,
  },
  {
    metaData: 'Contact us',
    path: '/contact',
    exact: true,
    component: Contact,
  },
];
