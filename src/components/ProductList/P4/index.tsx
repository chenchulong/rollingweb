import * as React from 'react';
import { Row, Col, Card } from 'antd';
const img1 = require('./XD-6.jpg');
import P4_Data from './../../../data/P4_Data';

const plist = P4_Data.map((item: any, key: any) => (
  <tr>
    <td>{item.p}</td>
    <td>{item.v}</td>
  </tr>
));
// tslint:disable-next-line:no-any
class P4 extends React.Component<any, any> {
  render() {
    return (
      <Row>
        <Col span={10}>
          <h1>XD-6</h1>
          <Card style={{ width: '95%' }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" width="100%" src={img1} />
            </div>
          </Card>
        </Col>
        <Col span={14}>
          <Row>
            <Col span={18} style={{ padding: 5 }}>
              <table style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                  <tr>
                    <th style={{ width: 160 }}>属性
                            </th>
                    <th>说明
                            </th>
                  </tr>
                </thead>
                <tbody>
                  {plist}
                </tbody>
              </table>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default P4;