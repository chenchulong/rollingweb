import * as React from 'react';
import './index.css';
import { Layout, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const { Header, Footer, Content } = Layout;

const about = require('./about.png');
import MyHeader from './../MyHeader';

class AboutUs extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ height: 80, background: '#fff' }}>
            <MyHeader />
          </Header>
          <Content style={{ background: '#fff', borderTop: '1px solid #efefef', marginTop: -1 }}>
            <div className="aboutContent">
              <img src={about} style={{ width: 1024, height: 300 }} />
              <Tabs defaultActiveKey="1">
                <TabPane tab="公司简介" key="1">

                  <div className="textPanel">
                    <p className="pText">如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；反之，则它们的距离就应该越远，也越像多个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；反之，则它们的距离就应该越远，也越像多个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。如果信息之间关联性越高，它们之间的距离就应该越接近，也越像一个视觉单元；反之，则它们的距离就应该越远，也越像多个视觉单元。亲密性的根本目的是实现组织性，让用户对页面结构和信息层次一目了然。</p>
                    <p className="pText">为了适用不同尺寸的屏幕，在横向采用栅格布局来排布组件，从而保证布局的灵活性。为了适用不同尺寸的屏幕，在横向采用栅格布局来排布组件，从而保证布局的灵活性。为了适用不同尺寸的屏幕，在横向采用栅格布局来排布组件，从而保证布局的灵活性。为了适用不同尺寸的屏幕，在横向采用栅格布局来排布组件，从而保证布局的灵活性。为了适用不同尺寸的屏幕，在横向采用栅格布局来排布组件，从而保证布局的灵活性。</p>
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
          <Footer style={{ height: 80, textAlign: 'center', marginTop: 10 }}>
            版权所有 © 2017 XiaoChen
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default AboutUs;