import * as React from 'react';
import './index.css';
import { Layout, Collapse } from 'antd';
const Panel = Collapse.Panel;
const { Header, Footer, Content } = Layout;

import NewsJson from './../../data/newsjson';

///新闻数据
const newslist = NewsJson.map((item, key) => (
  <Panel header={item.title} key={item.id.toString()}>
    <p>{item.Content}</p>
    <p className="date">{item.date}</p>
  </Panel>
));

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
            <div className="newsContent">
              <h1>
                最新动态
              </h1>
              <Collapse bordered={false} defaultActiveKey={['1']}>
                {newslist}
              </Collapse>
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