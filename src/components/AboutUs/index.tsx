import * as React from 'react';
import './index.css';
import { Layout, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const { Header, Footer, Content } = Layout;

const about = require('./about.jpeg');
import MyHeader from './../MyHeader';

class AboutUs extends React.Component<null, null> {
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
              <Tabs defaultActiveKey="1">
                <TabPane tab="公司简介" key="1">
                  <div className="textPanel">
                    <p className="pText">德国科技产品素以其出色的品质和技术闻名于世。
                      ROLLIN（莱尔）秉承了德国技术的品质和传统精神开发了一系列的电子产品。
                      其摄录机更是家庭生活回忆不可缺少的产品之一。
                      现在，莱尔已把中国作为全球最重要的市场之一，在不断发展的中国市场上，
                      完善的市场运作到销售，服务的整套经营体制，在信赖和创造的企业方针下，莱尔将通过自身的先进技术，
                      积极推动中国影像事业，为市民带来更多魅力和优质的产品。</p>
                  </div>
                </TabPane>
              </Tabs>
              <Tabs defaultActiveKey="1">
                <TabPane tab="联系我们" key="1">
                  <div className="textPanel">
                    <p className="pText">地址：xxxx</p>
                    <p className="pText">电话：xxxx</p>
                    <p className="pText">邮箱：xxxx</p>
                  </div>
                </TabPane>
              </Tabs>
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

export default AboutUs;