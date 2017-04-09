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

class News extends React.Component<any, any> {
  constructor() {
    super();
    var newid = '1';

    if(window.location.search != ''){
      var searchKey = window.location.search.split('=');
      newid = searchKey[1];
    }

    this.state = {
      newid
    };
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <MyHeader />
          </Header>
          <Content className="content">
            <div className="newsContent">
              <h1>
                最新动态
              </h1>
              <Collapse className="colapse" bordered={false} defaultActiveKey={[this.state.newid]}>
                {newslist}
              </Collapse>
            </div>
          </Content>
          <Footer className="footer">
            版权所有 © 2017 XiaoChen
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default News;