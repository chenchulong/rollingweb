import * as React from 'react';
import { Row, Col, Card } from 'antd';
const img1 = require('./IR-68.jpg');

// tslint:disable-next-line:no-any
class P2 extends React.Component<any, any> {
  render() {
    return (
      <Row>
        <Col span={10}>
          <h1>IR-68</h1>
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
                    <th style={{ width: 160 }}>属性</th>
                    <th>说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Image sensor</td>
                    <td>CMOS image sensor</td>
                  </tr>
                  <tr>
                    <td>Resolution ratio of image</td>
                    <td>"24M(6000 x 4500); 20M(5120 x 3840); 16M(4608 x 3472);
12M(4000 x3000); 8M(3264 x 2448); 5M(2592 x 1944);
3M(2048 x 1536); 1M(1280 x 960)"</td>
                  </tr>
                  <tr>
                    <td>Cache capacity</td>
                    <td>128MB SDRAM(Buffer)</td>
                  </tr>
                  <tr>
                    <td>Memory card</td>
                    <td>Supports SD card up to 32 GB</td>
                  </tr>
                  <tr>
                    <td>File format</td>
                    <td>JPEG, AVI</td>
                  </tr>
                  <tr>
                    <td>Resolution ratio of video</td>
                    <td>FHD 1920X1080, HD 1280X720, 640×480</td>
                  </tr>
                  <tr>
                    <td>Digital zoom</td>
                    <td>16×</td>
                  </tr>
                  <tr>
                    <td>White balance</td>
                    <td>Auto/sunshine/cloudy/fluorescent lamp/Tungsten lamp</td>
                  </tr>
                  <tr>
                    <td>Exposure compensation</td>
                    <td>-2.0 ~ +2.0</td>
                  </tr>
                  <tr>
                    <td>USB port</td>
                    <td>USB2.0</td>
                  </tr>
                  <tr>
                    <td>HDMI port</td>
                    <td>HDMI </td>
                  </tr>
                  <tr>
                    <td>TV output </td>
                    <td>￼NTSC / PAL</td>
                  </tr>
                  <tr>
                    <td>Display</td>
                    <td>3.0 inch TFT Touch Panel（16：9）</td>
                  </tr>
                  <tr>
                    <td>Flash </td>
                    <td>Infrared light for Night-shot</td>
                  </tr>
                  <tr>
                    <td>Power</td>
                    <td>3.7V rechargeable lithium battery </td>
                  </tr>
                  <tr>
                    <td>Menu language</td>
                    <td>Multi-Languages</td>
                  </tr>
                  <tr>
                    <td>Focal distance</td>
                    <td>f=7.36mm</td>
                  </tr>
                  <tr>
                    <td>Aperture</td>
                    <td>F/3.2</td>
                  </tr>
                  <tr>
                    <td>Auto Off</td>
                    <td>1m/3m/5m/No shutdown</td>
                  </tr>
                  <tr>
                    <td>Operating system requirements </td>
                    <td>Windows10 / Windows8 / Windows7 / 2002 / XP / Vista</td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>125 mm ×58mm × 57 mm</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default P2;