import * as React from 'react';
import './App.css';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import MyHeader from './../MyHeader';
import MyContent from './../MyContent';

class App extends React.Component<null, null> {
  render() {
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <MyHeader />
          </Header>
          <Content className="content">
            <MyContent />
          </Content>
          <Footer className="footer">
            版权所有 © 2017 Rollin
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;