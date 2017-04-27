import * as React from 'react';
import { Link } from 'react-router';
import './index.css';
import { Menu, Row, Col } from 'antd';
import lang from '../../data/lang'
import CookiesFunction from '../../utils/cookies'
const logo = require('./logo.jpg');

class MyHeader extends React.Component<any, any> {
  constructor() {
    super();
    let current = '1';
    ///导航选中样式
    switch (window.location.pathname) {
      case '/about':
        current = '2';
        break;
      case '/products':
        current = '3';
        break;
      case '/news':
        current = '4';
        break;
      default:
        current = '1';
        break;
    }

    this.state = {
      current
    };
  }

  setLang = (e: any) => {
    let locals = e.target.className;
    new CookiesFunction().setCookie('language', locals, 3600)
    window.location.reload()
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
              <button type="button" className="ant-btn ant-btn-ghost ant-btn-sm lang" onClick={this.setLang}><span className="zh_cn">中文</span></button>
              &nbsp;
              <button type="button" className="ant-btn ant-btn-ghost ant-btn-sm lang" onClick={this.setLang}><span className="zh_tw">繁体</span></button>
              &nbsp;
              <button type="button" className="ant-btn ant-btn-ghost ant-btn-sm lang" onClick={this.setLang}><span className="en">EN</span></button>
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
                <Link to="/about">关于我们</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/products">产品</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/news">最新动态</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MyHeader;