import CookiesFunction from '../utils/cookies'

const locale = new CookiesFunction().getCookie('language') || 'zh_cn'

const zh_cn = {
    nav: {
        /*
         * 导航首页 
         */
        index: '首页',
        about: '关于我们',
        product: '产品',
        news: '最新动态'
    },
    content:{
        mainProduct: '主推产品'
    }
}
const zh_tw = {
    nav: {
        index: '首頁',
        about: '關於我們',
        product: '產品',
        news: '最新動態'
    },
    content:{
        mainProduct: '主推產品'
    }
}
const en = {
    nav: {
        index: 'Index',
        about: 'About Us',
        product: 'Product',
        news: 'News'
    },
    content: {
        mainProduct: 'Main Product'
    }
}
const lang = {
    zh_cn,
    zh_tw,
    en,
}

export default lang[locale] || lang['zh_cn']