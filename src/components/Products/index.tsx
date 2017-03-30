import * as React from 'react';
import './index.css';
import { Layout, Row, Col, Card } from 'antd';
const { Header, Footer, Content } = Layout;
import ProductsJson from './../../data/productsjson';

import MyHeader from './../MyHeader';

///产品数据
const plist = ProductsJson.map((item, key) => (
  <Col span={8} style={{ padding: 5 }} key={key}>
    <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
      <div className="custom-image">
        <img alt="example" width="100%" src={item.url} />
      </div>
      <div className="custom-card">
        <h3>{item.title}</h3>
        <p>商品描述：</p>
        {item.Intro}
      </div>
    </Card>
  </Col>
));

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
                    {plist}
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col span={6}>
                  <h1>
                    配件产品
                  </h1>
                </Col>
                <Col span={6} style={{ padding: 5 }}>
                  <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                      <img alt="example" width="100%" src="http://www.sonystyle.com.cn/products/handycam/images/fdr_ax40_504x504_02_170320.jpg" />
                    </div>
                    <div className="custom-card">
                      <h3>FDR-AX40</h3>
                      <p>商品描述：</p>
                      <p>4K/25P影像录制*1</p>
                      <p>5轴防抖（平稳光学防抖智能增强模式）*2</p>
                      <p>Exmor R CMOS 影像传感器</p>
                    </div>
                  </Card>
                </Col>
                <Col span={6} style={{ padding: 5 }}>
                  <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                      <img alt="example" width="100%" src="http://www.sonystyle.com.cn/products/handycam/images/hdr_cx680_504_bai_01_170320.jpg" />
                    </div>
                    <div className="custom-card">
                      <h3>HDR-CX680/W</h3>
                      <p>商品描述：</p>
                      <p>5轴防抖（平稳光学防抖智能增强模式）*1</p>
                      <p>64GB内存*2</p>
                      <p>30倍光学变焦</p>
                    </div>
                  </Card>
                </Col>
                <Col span={6} style={{ padding: 5 }}>
                  <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
                    <div className="custom-image">
                      <img alt="example" width="100%" src="http://www.sonystyle.com.cn/products/handycam/images/hdr_cx680_504_bai_01_170320.jpg" />
                    </div>
                    <div className="custom-card">
                      <h3>HDR-CX680/W</h3>
                      <p>商品描述：</p>
                      <p>5轴防抖（平稳光学防抖智能增强模式）*1</p>
                      <p>64GB内存*2</p>
                      <p>30倍光学变焦</p>
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer className="footer">
            版权所有 © 2017 XiaoChen
          </Footer>
        </Layout>
      </div >
    );
  }
}

export default Products;