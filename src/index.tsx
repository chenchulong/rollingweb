/// <reference path="../node_modules/hake/typings/index.d.ts" />

import hake from 'hake';
import App from './components/App/App';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import News from './components/News';
import Helps from './components/Helps';
import './index.css';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const history = useRouterHistory(createHashHistory)({
  // basename: '/rollingweb'
})

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
}, {
  path: '/help',
  component: Helps
}];

const app = hake({
  routes,
  history
});

app.start();