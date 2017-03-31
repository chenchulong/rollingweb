import * as React from 'react';
import { Link } from 'react-router';
import './index.css';
import { Menu, Row, Col } from 'antd';
const logo = require('./logo.jpg');

class MyHeader extends React.Component<any, any> {
  constructor() {
    super();
    var current = '1';
    ///导航选中样式
    switch (window.location.hash) {
      case '#/about':
        current = '2';
        break;
      case '#/products':
        current = '3';
        break;
      case '#/news':
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
            <Menu
              mode="horizontal"
              style={{ height: 80, lineHeight: '80px', float: 'right' }}
              selectedKeys={[this.state.current]}
            >
              <Menu.Item key="1">
                <Link to="/">首页</Link>
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