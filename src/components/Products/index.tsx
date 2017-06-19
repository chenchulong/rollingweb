import * as React from 'react';
import './index.css';
import { Layout, Row, Col, Card } from 'antd';
import { Link } from 'react-router';
const { Header, Footer, Content } = Layout;

import MyHeader from './../MyHeader';
const img1 = require('./HDC-39.jpg');
const img2 = require('./IR-68.jpg');
const img3 = require('./IX-6.jpg');
const img4 = require('./XD-6.jpg');
const img5 = require('./XD-8.jpg');

class Products extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <MyHeader />
          </Header>
          <Content className="content">
            <div className="productContent">
              <Row>
                <Col span={6}>
                  <h1>
                    摄像产品
                  </h1>
                </Col>
                <Col span={18}>
                  <Row>
                    <Col span={8} style={{ padding: 5 }}>
                      <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
                        <Link to="/details?id=1">
                          <div className="custom-image">
                            <img alt="example" width="100%" src={img1} />
                          </div>
                          <div className="custom-card">
                            <h3>HDC-39</h3>
                          </div>
                        </Link>
                      </Card>
                    </Col>
                    <Col span={8} style={{ padding: 5 }}>
                      <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
                        <Link to="/details?id=2">
                          <div className="custom-image">
                            <img alt="example" width="100%" src={img2} />
                          </div>
                          <div className="custom-card">
                            <h3>IR-68</h3>
                          </div>
                        </Link>
                      </Card>
                    </Col>
                    <Col span={8} style={{ padding: 5 }}>
                      <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
                        <Link to="/details?id=3">
                          <div className="custom-image">
                            <img alt="example" width="100%" src={img3} />
                          </div>
                          <div className="custom-card">
                            <h3>IX-6</h3>
                          </div>
                        </Link>
                      </Card>
                    </Col>
                    <Col span={8} style={{ padding: 5 }}>
                      <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
                        <Link to="/details?id=4">
                          <div className="custom-image">
                            <img alt="example" width="100%" src={img4} />
                          </div>
                          <div className="custom-card">
                            <h3>XD-6</h3>
                          </div>
                        </Link>
                      </Card>
                    </Col>
                    <Col span={8} style={{ padding: 5 }}>
                      <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
                        <Link to="/details?id=5">
                          <div className="custom-image">
                            <img alt="example" width="100%" src={img5} />
                          </div>
                          <div className="custom-card">
                            <h3>XD-8</h3>
                          </div>
                        </Link>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer className="footer">
            版权所有 © 2017 Rollin
          </Footer>
        </Layout>
      </div >
    );
  }
}

export default Products;