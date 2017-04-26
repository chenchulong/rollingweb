import * as React from 'react';
import './index.css';
import { Carousel, Card, Row, Col } from 'antd';
import CarouselJson from './../../data/carouseljson';

///轮播图数据
const carouselList = CarouselJson.map((item, key) =>
  <div className="bg" key={key}>
    <img alt={item.alt} src={item.url} />
  </div>
);

///新闻数据
/*const newslist = NewsJson.map((item, key) => (
  <Link to={'/news?id=' + item.id} key={key} className={key < 10 ? 'show' : 'hide'}>
    <p style={{ lineHeight: '25px', fontSize: '14px' }}>{item.title}
      <span style={{ float: 'right', color: '#333' }}> {item.date}</span>
    </p>
  </Link>
));*/

class MyContent extends React.Component<null, null> {
  render() {
    return (
      <div className="bodyContent">
        <Carousel autoplay={true} style={{ height: '320px' }}>
          {carouselList}
        </Carousel>
        <div>
          <Row>
            <Col span={8} style={{ background: '#000000', height: '5px' }}>
            </Col>
            <Col span={8} style={{ background: '#FF0000', height: '5px' }}>
            </Col>
            <Col span={8} style={{ background: '#FFCC00', height: '5px' }}>
            </Col>
          </Row>
        </div>
        <div style={{ padding: '10px 0' }}>
          <Row>
            <Col span={8} style={{ padding: 10 }}>
              {/*<Card title="最新动态" bordered={false} >
                {newslist}
              </Card>*/}
              <Card title="主推产品" bordered={false}>
                <img style={{ width: '100%', height: 245 }} src="http://www.sonystyle.com.cn/products/cyber-shot/images/reddot_award_230x172(1).jpg" />
              </Card>
            </Col>
            <Col span={8} style={{ padding: 10 }}>
              <Card title="主推产品" bordered={false}>
                <img style={{ width: '100%', height: 245 }} src="http://www.sonystyle.com.cn/products/cyber-shot/images/reddot_award_230x172(1).jpg" />
              </Card>
            </Col>
            <Col span={8} style={{ padding: 10 }}>
              <Card title="主推产品2" bordered={false}>
                <img style={{ width: '100%', height: 245 }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT_3eeqyJmqEJlAJEAXdRxhrr8dyFgAZfNVgP3H4puXf6uNSu8a" />

              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default MyContent;