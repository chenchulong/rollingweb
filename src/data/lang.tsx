import CookiesFunction from '../utils/cookies';

const locale = new CookiesFunction().getCookie('language') || 'zh_cn';

// tslint:disable-next-line:variable-name
const zh_cn = {
    nav: {
        /*
         * 导航首页 
         */
        index: '首页',
        about: '关于我们',
        product: '产品',
        news: '最新动态',
        help: '支援中心'

    },
    content: {
        mainProduct: '主推产品',
        likeHelp: '我们很高兴能亲自为您服务！',
        lingShouShang: '零售商',
        lianLuo: '联络'
    }
};
// tslint:disable-next-line:variable-name
const zh_tw = {
    nav: {
        index: '首頁',
        about: '關於我們',
        product: '產品',
        news: '最新動態',
        help: '支援中心'
    },
    content: {
        mainProduct: '主推產品',
        likeHelp: '我們很高興能親自為您服務！',
        lingShouShang: '零售商',
        lianLuo: '聯絡'
    }
};

const en = {
    nav: {
        index: 'Index',
        about: 'About Us',
        product: 'Product',
        news: 'News',
        help: 'Service'
    },
    content: {
        mainProduct: 'Main Product',
        likeHelp: 'We’re glad to be there for you personally!',
        lingShouShang: 'Retailer',
        lianLuo: 'Contact form'

    }
};
const lang = {
    zh_cn,
    zh_tw,
    en,
};

// tslint:disable-next-line:no-string-literal
export default lang[locale] || lang['zh_cn'];