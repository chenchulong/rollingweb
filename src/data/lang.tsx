import CookiesFunction from '../utils/cookies'

const locale = new CookiesFunction().getCookie('language') || 'zh_cn'
console.log(locale);
const zh_cn = {
    nav: {
        /*
         * 导航首页 
         */
        index: '首页'
    }
}
const zh_tw = {
    nav: {
        index: '首页22'
    }
}
const en = {
    nav: {
        index: 'Index'
    }
}
const lang = {
    zh_cn,
    zh_tw,
    en,
}

export default lang[locale]