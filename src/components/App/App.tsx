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
          <Header style={{ height: 80, background: '#fff' }}>
            <MyHeader />
          </Header>
          <Content style={{ background: '#fff', borderTop: '1px solid #efefef', marginTop: -1 }}>
            <MyContent />
          </Content>
          <Footer style={{ height: 80, textAlign: 'center', marginTop: 10 }}>
            版权所有 © 2017 XiaoChen
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;