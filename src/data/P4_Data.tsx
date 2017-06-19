import CookiesFunction from '../utils/cookies';

const locale = new CookiesFunction().getCookie('language') || 'zh_cn';

// tslint:disable-next-line:variable-name
const zh_cn = [{
    p: 'EAN',
    v: '-'
}, {
    p: '3D',
    v: ''
}, {
    p: 'Device type',
    v: 'digital video camera'
}, {
    p: 'Functions',
    v: 'digital video camera, digital still camera, voice recording'
}, {
    p: 'Zoom',
    v: '5x optical, 4 x digital'
}, {
    p: 'Focus system',
    v: 'contrast autofocus'
}, {
    p: 'Focus range',
    v: 'normal: 10 cm - infinity (Wide), 100 cm - infinity (Tele); macro: 10 cm (Wide), 100 cm (Tele)'
}, {
    p: 'Sensor',
    v: '1 / 3.2" CMOS, 5.0 Mega pixels'
}, {
    p: 'Resolution',
    v: '16M: 4608x3456 (interpol.), 8M: 3200x2400 (interpol.), 5M: 2592x1944, 3M: 2048x1536'
}, {
    p: 'Flash',
    v: 'only LED lamp for video: on/off'
}, {
    p: 'Flash range',
    v: 'LED: < 1 m'
}, {
    p: 'Display',
    v: '7,6 cm (3,0") 4:3 Touch screen TFT LCDisplay ( 960x240 Pixel )'
}, {
    p: 'Video resolution',
    v: 'Full HD: 1920x1080p (@30fps), HD: 1280x720p (30fps), WVGA: 848x480 (60fps), WQVGA: 320x240 (30fps)'
}, {
    p: 'TV system',
    v: 'NTSC / PAL / HDMI'
}, {
    p: 'Storage',
    v: 'SD / SDHC card class 6 usable'
}, {
    p: 'File format',
    v: 'JPEG, EXIF2.2, DCF, MPEG4 H.264 (MOV), ADPCM, WAV'
}, {
    p: 'Interface',
    v: 'USB 2.0, HDMI'
}, {
    p: 'Energy',
    v: 'source	Li-ion-rechargeable battery NP 60'
}, {
    p: 'Dimensions',
    v: '110x37x68 mm'
}, {
    p: 'Weight',
    v: '186g'
}, {
    p: 'Accessories',
    v: 'USB/TV-cable, CD-Rom, pouch, rechargeable Li-ion battery NP60, AC-Adapter 5V/1A for USB-Port'
}, {
    p: 'OS requirements',
    v: 'Windows XP/ VISTA/Win7'
}];
// tslint:disable-next-line:variable-name
const zh_tw = [{
    p: 'EAN',
    v: '-'
}, {
    p: '3D',
    v: ''
}, {
    p: 'Device type',
    v: 'digital video camera'
}, {
    p: 'Functions',
    v: 'digital video camera, digital still camera, voice recording'
}, {
    p: 'Zoom',
    v: '5x optical, 4 x digital'
}, {
    p: 'Focus system',
    v: 'contrast autofocus'
}, {
    p: 'Focus range',
    v: 'normal: 10 cm - infinity (Wide), 100 cm - infinity (Tele); macro: 10 cm (Wide), 100 cm (Tele)'
}, {
    p: 'Sensor',
    v: '1 / 3.2" CMOS, 5.0 Mega pixels'
}, {
    p: 'Resolution',
    v: '16M: 4608x3456 (interpol.), 8M: 3200x2400 (interpol.), 5M: 2592x1944, 3M: 2048x1536'
}, {
    p: 'Flash',
    v: 'only LED lamp for video: on/off'
}, {
    p: 'Flash range',
    v: 'LED: < 1 m'
}, {
    p: 'Display',
    v: '7,6 cm (3,0") 4:3 Touch screen TFT LCDisplay ( 960x240 Pixel )'
}, {
    p: 'Video resolution',
    v: 'Full HD: 1920x1080p (@30fps), HD: 1280x720p (30fps), WVGA: 848x480 (60fps), WQVGA: 320x240 (30fps)'
}, {
    p: 'TV system',
    v: 'NTSC / PAL / HDMI'
}, {
    p: 'Storage',
    v: 'SD / SDHC card class 6 usable'
}, {
    p: 'File format',
    v: 'JPEG, EXIF2.2, DCF, MPEG4 H.264 (MOV), ADPCM, WAV'
}, {
    p: 'Interface',
    v: 'USB 2.0, HDMI'
}, {
    p: 'Energy',
    v: 'source	Li-ion-rechargeable battery NP 60'
}, {
    p: 'Dimensions',
    v: '110x37x68 mm'
}, {
    p: 'Weight',
    v: '186g'
}, {
    p: 'Accessories',
    v: 'USB/TV-cable, CD-Rom, pouch, rechargeable Li-ion battery NP60, AC-Adapter 5V/1A for USB-Port'
}, {
    p: 'OS requirements',
    v: 'Windows XP/ VISTA/Win7'
}];

const en = [{
    p: 'EAN',
    v: '-'
}, {
    p: '3D',
    v: ''
}, {
    p: 'Device type',
    v: 'digital video camera'
}, {
    p: 'Functions',
    v: 'digital video camera, digital still camera, voice recording'
}, {
    p: 'Zoom',
    v: '5x optical, 4 x digital'
}, {
    p: 'Focus system',
    v: 'contrast autofocus'
}, {
    p: 'Focus range',
    v: 'normal: 10 cm - infinity (Wide), 100 cm - infinity (Tele); macro: 10 cm (Wide), 100 cm (Tele)'
}, {
    p: 'Sensor',
    v: '1 / 3.2" CMOS, 5.0 Mega pixels'
}, {
    p: 'Resolution',
    v: '16M: 4608x3456 (interpol.), 8M: 3200x2400 (interpol.), 5M: 2592x1944, 3M: 2048x1536'
}, {
    p: 'Flash',
    v: 'only LED lamp for video: on/off'
}, {
    p: 'Flash range',
    v: 'LED: < 1 m'
}, {
    p: 'Display',
    v: '7,6 cm (3,0") 4:3 Touch screen TFT LCDisplay ( 960x240 Pixel )'
}, {
    p: 'Video resolution',
    v: 'Full HD: 1920x1080p (@30fps), HD: 1280x720p (30fps), WVGA: 848x480 (60fps), WQVGA: 320x240 (30fps)'
}, {
    p: 'TV system',
    v: 'NTSC / PAL / HDMI'
}, {
    p: 'Storage',
    v: 'SD / SDHC card class 6 usable'
}, {
    p: 'File format',
    v: 'JPEG, EXIF2.2, DCF, MPEG4 H.264 (MOV), ADPCM, WAV'
}, {
    p: 'Interface',
    v: 'USB 2.0, HDMI'
}, {
    p: 'Energy',
    v: 'source	Li-ion-rechargeable battery NP 60'
}, {
    p: 'Dimensions',
    v: '110x37x68 mm'
}, {
    p: 'Weight',
    v: '186g'
}, {
    p: 'Accessories',
    v: 'USB/TV-cable, CD-Rom, pouch, rechargeable Li-ion battery NP60, AC-Adapter 5V/1A for USB-Port'
}, {
    p: 'OS requirements',
    v: 'Windows XP/ VISTA/Win7'
}];
const lang = {
    zh_cn,
    zh_tw,
    en,
};

// tslint:disable-next-line:no-string-literal
export default lang[locale] || lang['zh_cn'];