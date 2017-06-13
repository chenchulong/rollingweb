import * as React from 'react';
import './index.css';
import { Layout, Card, Col, Row } from 'antd';
const { Header, Footer, Content } = Layout;
import lang from '../../data/lang';

const about = require('./about.jpeg');
const support1 = require('./support1.png');
const support2 = require('./support2.png');

import MyHeader from './../MyHeader';

class Helps extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <MyHeader />
          </Header>
          <Content className="content">
            <div className="aboutContent">
              <img src={about} style={{ width: 1160, height: 300 }} />
              <div className="helpInfo">
                <h1 style={{ marginBottom: 20 }}>{lang.content.likeHelp}</h1>
                <Row>
                  <Col span={7}>
                    &nbsp;
                  </Col>
                  <Col span={6}>
                    <Card style={{ width: 206, height: 193, backgroundImage: `url(${support1})` }}>
                      <h1 style={{ paddingTop: 110, color: '#fff', textAlign: 'center' }}>
                        {lang.content.lingShouShang}</h1>
                    </Card>
                  </Col>
                  <Col span={4}>
                    <Card style={{ width: 206, height: 193, backgroundImage: `url(${support2})` }}>
                      <h1 style={{ paddingTop: 110, color: '#fff', textAlign: 'center' }}>{lang.content.lianLuo}</h1>
                    </Card>
                  </Col>
                  <Col span={4}>
                    &nbsp;
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
          <Footer className="footer">
            版权所有 © 2017 Rollin
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Helps;