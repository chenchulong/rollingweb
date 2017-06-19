import CookiesFunction from '../utils/cookies';

const locale = new CookiesFunction().getCookie('language') || 'zh_cn';

// tslint:disable-next-line:variable-name
const zh_cn = [{
    p: 'Parts number',
    v: '-'
}, {
    p: 'EAN',
    v: '-'
}, {
    p: '3D',
    v: ''
}, {
    p: 'Device type',
    v: 'digital camcorder with digital camera'
}, {
    p: 'Focal length',
    v: '7,5 mm'
}, {
    p: 'Zoom',
    v: '8x digital'
}, {
    p: 'Focus system',
    v: 'contrast auto focus'
}, {
    p: 'Focus range',
    v: '0.8m Infinite'
}, {
    p: 'Sensor',
    v: '5.0MP 1/3.2"'
}, {
    p: 'Resolution',
    v: '3M,5M,8M,12M,16M,20M'
}, {
    p: 'ISO speed',
    v: 'Video: auto / photo: auto, 100, 200, 400'
}, {
    p: 'Colour depth',
    v: '20 Bit (RGB)'
}, {
    p: 'Colour effects',
    v: 'normal, b/w, sepia'
}, {
    p: 'Picture sharpness',
    v: 'normal'
}, {
    p: 'White balance',
    v: 'Auto, Daylight, Cloudy, Fluorescent, Tungsten'
}, {
    p: 'Shutter',
    v: '1/2 - 1/2000 sec., night: 2-1/2000 sec.'
}, {
    p: 'Exposure',
    v: 'Auto'
}, {
    p: 'Exposure control',
    v: '+/- 2.0'
}, {
    p: 'Metering',
    v: 'average, center, spot'
}, {
    p: 'Flash',
    v: '1x LEDlight'
}, {
    p: 'Flash range',
    v: '1 m'
}, {
    p: 'Self timer',
    v: '-'
}, {
    p: 'Display',
    v: '7,6 cm (3") TFT'
}, {
    p: 'Video resolution',
    v: 'Full HD 1920x1080; HD 1280x720'
}, {
    p: 'TV system',
    v: 'NTSC/PAL'
}, {
    p: 'Additional features',
    v: ''
}, {
    p: 'Storage',
    v: 'slot 1x SD/SDHC'
}, {
    p: 'File format',
    v: 'JPEG and AVI'
}, {
    p: 'Interface',
    v: 'Mini USB 2.0, Mini HDMI port'
}, {
    p: 'Energy source',
    v: 'rechargeable Li-ionen battery 1100mAh'
}, {
    p: 'Dimensions',
    v: '120 x 52 x 52 mm'
}, {
    p: 'Weight',
    v: 'app. 222 g'
}, {
    p: 'Accessories',
    v: 'USB cable, CD, rechargeable battery, USB AC adapter'
}, {
    p: 'OS requirements',
    v: 'Windows XP / VISTA / 7 / 8'
}];
// tslint:disable-next-line:variable-name
const zh_tw = [{
    p: 'Parts number',
    v: '-'
}, {
    p: 'EAN',
    v: '-'
}, {
    p: '3D',
    v: ''
}, {
    p: 'Device type',
    v: 'digital camcorder with digital camera'
}, {
    p: 'Focal length',
    v: '7,5 mm'
}, {
    p: 'Zoom',
    v: '8x digital'
}, {
    p: 'Focus system',
    v: 'contrast auto focus'
}, {
    p: 'Focus range',
    v: '0.8m Infinite'
}, {
    p: 'Sensor',
    v: '5.0MP 1/3.2"'
}, {
    p: 'Resolution',
    v: '3M,5M,8M,12M,16M,20M'
}, {
    p: 'ISO speed',
    v: 'Video: auto / photo: auto, 100, 200, 400'
}, {
    p: 'Colour depth',
    v: '20 Bit (RGB)'
}, {
    p: 'Colour effects',
    v: 'normal, b/w, sepia'
}, {
    p: 'Picture sharpness',
    v: 'normal'
}, {
    p: 'White balance',
    v: 'Auto, Daylight, Cloudy, Fluorescent, Tungsten'
}, {
    p: 'Shutter',
    v: '1/2 - 1/2000 sec., night: 2-1/2000 sec.'
}, {
    p: 'Exposure',
    v: 'Auto'
}, {
    p: 'Exposure control',
    v: '+/- 2.0'
}, {
    p: 'Metering',
    v: 'average, center, spot'
}, {
    p: 'Flash',
    v: '1x LEDlight'
}, {
    p: 'Flash range',
    v: '1 m'
}, {
    p: 'Self timer',
    v: '-'
}, {
    p: 'Display',
    v: '7,6 cm (3") TFT'
}, {
    p: 'Video resolution',
    v: 'Full HD 1920x1080; HD 1280x720'
}, {
    p: 'TV system',
    v: 'NTSC/PAL'
}, {
    p: 'Additional features',
    v: ''
}, {
    p: 'Storage',
    v: 'slot 1x SD/SDHC'
}, {
    p: 'File format',
    v: 'JPEG and AVI'
}, {
    p: 'Interface',
    v: 'Mini USB 2.0, Mini HDMI port'
}, {
    p: 'Energy source',
    v: 'rechargeable Li-ionen battery 1100mAh'
}, {
    p: 'Dimensions',
    v: '120 x 52 x 52 mm'
}, {
    p: 'Weight',
    v: 'app. 222 g'
}, {
    p: 'Accessories',
    v: 'USB cable, CD, rechargeable battery, USB AC adapter'
}, {
    p: 'OS requirements',
    v: 'Windows XP / VISTA / 7 / 8'
}];

const en = [{
    p: 'Parts number',
    v: '-'
}, {
    p: 'EAN',
    v: '-'
}, {
    p: '3D',
    v: ''
}, {
    p: 'Device type',
    v: 'digital camcorder with digital camera'
}, {
    p: 'Focal length',
    v: '7,5 mm'
}, {
    p: 'Zoom',
    v: '8x digital'
}, {
    p: 'Focus system',
    v: 'contrast auto focus'
}, {
    p: 'Focus range',
    v: '0.8m Infinite'
}, {
    p: 'Sensor',
    v: '5.0MP 1/3.2"'
}, {
    p: 'Resolution',
    v: '3M,5M,8M,12M,16M,20M'
}, {
    p: 'ISO speed',
    v: 'Video: auto / photo: auto, 100, 200, 400'
}, {
    p: 'Colour depth',
    v: '20 Bit (RGB)'
}, {
    p: 'Colour effects',
    v: 'normal, b/w, sepia'
}, {
    p: 'Picture sharpness',
    v: 'normal'
}, {
    p: 'White balance',
    v: 'Auto, Daylight, Cloudy, Fluorescent, Tungsten'
}, {
    p: 'Shutter',
    v: '1/2 - 1/2000 sec., night: 2-1/2000 sec.'
}, {
    p: 'Exposure',
    v: 'Auto'
}, {
    p: 'Exposure control',
    v: '+/- 2.0'
}, {
    p: 'Metering',
    v: 'average, center, spot'
}, {
    p: 'Flash',
    v: '1x LEDlight'
}, {
    p: 'Flash range',
    v: '1 m'
}, {
    p: 'Self timer',
    v: '-'
}, {
    p: 'Display',
    v: '7,6 cm (3") TFT'
}, {
    p: 'Video resolution',
    v: 'Full HD 1920x1080; HD 1280x720'
}, {
    p: 'TV system',
    v: 'NTSC/PAL'
}, {
    p: 'Additional features',
    v: ''
}, {
    p: 'Storage',
    v: 'slot 1x SD/SDHC'
}, {
    p: 'File format',
    v: 'JPEG and AVI'
}, {
    p: 'Interface',
    v: 'Mini USB 2.0, Mini HDMI port'
}, {
    p: 'Energy source',
    v: 'rechargeable Li-ionen battery 1100mAh'
}, {
    p: 'Dimensions',
    v: '120 x 52 x 52 mm'
}, {
    p: 'Weight',
    v: 'app. 222 g'
}, {
    p: 'Accessories',
    v: 'USB cable, CD, rechargeable battery, USB AC adapter'
}, {
    p: 'OS requirements',
    v: 'Windows XP / VISTA / 7 / 8'
}];
const lang = {
    zh_cn,
    zh_tw,
    en,
};

// tslint:disable-next-line:no-string-literal
export default lang[locale] || lang['zh_cn'];