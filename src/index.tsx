/// <reference path="../node_modules/hake/typings/index.d.ts" />

import hake from 'hake';
import App from './components/App/App';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import News from './components/News';
import './index.css';

const routes = [{
  path: '/',
  component: App
}, {
  path: '/about',
  component: AboutUs
}, {
  path: '/products',
  component: Products
}, {
  path: '/news',
  component: News
}];

const app = hake({
   routes
 });

app.start();