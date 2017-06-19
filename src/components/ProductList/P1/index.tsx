import * as React from 'react';
import { Row, Col, Card } from 'antd';
const img1 = require('./HDC-39.jpg');
// const img2 = require('./IR-68.jpg');
// const img3 = require('./IX-6.jpg');
// const img4 = require('./XD-6.jpg');
// const img5 = require('./XD-8.jpg');

// tslint:disable-next-line:no-any
class P1 extends React.Component<any, any> {
  render() {
    return (
      <Row>
        <Col span={10}>
          <h1>
            HDC-39
                  </h1>
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
                  <tr>
                    <td>Image sensor</td>
                    <td>CMOS</td>
                  </tr>
                  <tr>
                    <td>Max. mega pixels</td>
                    <td>24.0 Mega Pixels Max. (Interpolation)</td>
                  </tr>
                  <tr>
                    <td>Storage medium</td>
                    <td>Support SD /MMC card (up to 32GB)</td>
                  </tr>
                  <tr>
                    <td>ISO</td>
                    <td>Auto /100 /200 /400</td>
                  </tr>
                  <tr>
                    <td>Lens</td>
                    <td>F/3.2 f=7.36mm (Equivalent 43.5mm in 35mm format)</td>
                  </tr>
                  <tr>
                    <td>Focus range</td>
                    <td>1m ~ infinity</td>
                  </tr>
                  <tr>
                    <td>File format</td>
                    <td>Photo : JPEG, Video : AVI</td>
                  </tr>
                  <tr>
                    <td>Resolution</td>
                    <td>FHD1920x1080 (15fps)/ HD 1280x720 (30fps) / VGA 640x480 (30fps)</td>
                  </tr>
                  <tr>
                    <td>Zoom</td>
                    <td>16X Powerful zoom</td>
                  </tr>
                  <tr>
                    <td>LCD monitor</td>
                    <td>3” LCD Panel （16：9）</td>
                  </tr>
                  <tr>
                    <td>White balance</td>
                    <td>Auto/Daylight/Cloudy/Fluorescent /Tungsten </td>
                  </tr>
                  <tr>
                    <td>Exposure </td>
                    <td>￼2.0 EV</td>
                  </tr>
                  <tr>
                    <td>Self-timer</td>
                    <td>"Off / 2 sec. / 10 sec / Burst shooting </td>
                  </tr>
                  <tr>
                    <td>PC Interface</td>
                    <td>USB 2.0</td>
                  </tr>
                  <tr>
                    <td>TV Output</td>
                    <td>NTSC / PAL / HDMI</td>
                  </tr>
                  <tr>
                    <td>Shutter Speed</td>
                    <td>1/10 ~ 1/2650 sec.</td>
                  </tr>
                  <tr>
                    <td>Power supply</td>
                    <td>Rechargeable Lithium-ion battery </td>
                  </tr>
                  <tr>
                    <td>Size</td>
                    <td>120 (W) x 50 (H) x 55 (D) mm</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>Approx. 260g (without battery)</td>
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

export default P1;