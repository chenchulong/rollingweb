import * as React from 'react';
import { Link } from 'react-router';
import './index.css';
import { Menu, Row, Col } from 'antd';
import lang from '../../data/lang';
import CookiesFunction from '../../utils/cookies';
const logo = require('./logo.jpg');

// tslint:disable-next-line:no-any
class MyHeader extends React.Component<any, any> {
  constructor() {
    super();
    let current = '1';

    let url = window.location.hash;
    if (url.indexOf('?') !== -1) {
      url = url.split('?')[0];
    }

    ///导航选中样式
    switch (url) {
      case '#/about':
        current = '2';
        break;
      case '#/products':
      case '#/details':
        current = '3';
        break;

      case '#/news':
        current = '4';
        break;
      case '#/help':
        current = '5';
        break;
      default:
        current = '1';
        break;
    }

    this.state = {
      current
    };
  }

  // tslint:disable-next-line:no-any
  setLang = (e: any) => {
    let locals = e.target.id;
    if (locals) {
      new CookiesFunction().setCookie('language', locals, 3600);
      window.location.reload();
    }
  }

  render() {
    return (
      <div className="headbody">
        <Row>
          <Col span={6}>
            <div className="logo" >
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </Col>
          <Col span={18}>
            <div style={{ float: 'right', lineHeight: '80px' }}>
              <button type="button" className="ant-btn ant-btn-ghost ant-btn-sm lang" onClick={this.setLang}>
                <span id="zh_cn">中文</span></button>
              &nbsp;
              <button type="button" className="ant-btn ant-btn-ghost ant-btn-sm lang" onClick={this.setLang}>
                <span id="zh_tw">繁体</span></button>
              &nbsp;
              <button type="button" className="ant-btn ant-btn-ghost ant-btn-sm lang" onClick={this.setLang}>
                <span id="en">EN</span></button>
            </div>
            <Menu
              mode="horizontal"
              style={{ height: 80, lineHeight: '80px', float: 'right' }}
              selectedKeys={[this.state.current]}
            >
              <Menu.Item key="1">
                <Link to="/">{lang.nav.index}</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">{lang.nav.about}</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/products">{lang.nav.product}</Link>
              </Menu.Item>
              {/*<Menu.Item key="4">
                <Link to="/news">{lang.nav.news}</Link>
              </Menu.Item>*/}
              <Menu.Item key="5">
                <Link to="/help">{lang.nav.help}</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyHeader;