import * as React from 'react';
import './index.css';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import P1 from './../ProductList/P1';
import P2 from './../ProductList/P2';
import P3 from './../ProductList/P3';
import P4 from './../ProductList/P4';
import P5 from './../ProductList/P5';

import MyHeader from './../MyHeader';

// tslint:disable-next-line:no-any
class Details extends React.Component<any, any> {
  constructor() {
    super();
    let id = '0';

    let url = window.location.hash;
    if (url.indexOf('?') !== -1) {
      let param = url.split('?')[1];
      id = param.split('=')[1];

    }

    this.state = {
      id
    };
  }

  render() {
    const { id } = this.state;
    return (
      <div className="App">
        <Layout>
          <Header className="header">
            <MyHeader />
          </Header>
          <Content className="content">
            <div className="productContent">
              {id === '1' ?
                // tslint:disable-next-line:jsx-wrap-multiline
                <P1 /> : null
              }
              {id === '2' ?
                // tslint:disable-next-line:jsx-wrap-multiline
                <P2 /> : null
              }
              {id === '3' ?
                // tslint:disable-next-line:jsx-wrap-multiline
                <P3 /> : null
              }
              {id === '4' ?
                // tslint:disable-next-line:jsx-wrap-multiline
                <P4 /> : null
              }
              {id === '5' ?
                // tslint:disable-next-line:jsx-wrap-multiline
                <P5 /> : null
              }

            </div>
          </Content>
          <Footer className="footer">
            版权所有 © 2017 Rollin
          </Footer>
        </Layout >
      </div >
    );
  }
}

export default Details;