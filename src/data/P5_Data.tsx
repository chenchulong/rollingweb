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
    v: 'digital video camera, digital still camera, voice recording,'
}, {
    p: 'Zoom',
    v: 'up to 4x digital (720p)'
}, {
    p: 'Focus system',
    v: 'fix focus'
}, {
    p: 'Focus range',
    v: 'mormal: 1,20m-infinity, macro:: 20cm'
}, {
    p: 'Sensor',
    v: '1/2.5" CMOS, 5 mega pixels'
}, {
    p: 'Resolution',
    v: '16MP (4608x3456) and 8MP(3200x2400) interpolated; 5MP(2592x1944); 3MP(2048x1536)'
}, {
    p: 'Flash',
    v: 'auto, on, off'
}, {
    p: 'Flash range',
    v: '1,0m - 2,0m'
}, {
    p: 'Display',
    v: '7,6 cm (3,0") LCD touch screen'
}, {
    p: 'Video resolution',
    v: 'FHD (1920x1080/30fps), HD (1280x720/30fps), WVGA (848x480/60fps) Web (320x240)'
}, {
    p: 'TV system',
    v: 'NTSC and PAL'
}, {
    p: 'Storage',
    v: '32MB internal, 2 x SD/SDHC card slot (cards up to 32GB)'
}, {
    p: 'File format',
    v: 'MOV (H.264), JPEG, ADPCM'
}, {
    p: 'Interface',
    v: 'USB 2.0, TV-Out, earphone jack, MIC input'
}, {
    p: 'Energy source',
    v: 'rechargeable C-NP40 Li-ion battery or 2 x AA alcaline batteries'
}, {
    p: 'Dimensions',
    v: '112 x 50,3 x 59,5'
}, {
    p: 'Weight',
    v: 'ca. 234g'
}, {
    p: 'Accessories',
    v: 'Software, cable, 2 x AA batteries'
}, {
    p: 'OS requirements',
    v: 'XP / Vista / 7'
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
    v: 'digital video camera, digital still camera, voice recording,'
}, {
    p: 'Zoom',
    v: 'up to 4x digital (720p)'
}, {
    p: 'Focus system',
    v: 'fix focus'
}, {
    p: 'Focus range',
    v: 'mormal: 1,20m-infinity, macro:: 20cm'
}, {
    p: 'Sensor',
    v: '1/2.5" CMOS, 5 mega pixels'
}, {
    p: 'Resolution',
    v: '16MP (4608x3456) and 8MP(3200x2400) interpolated; 5MP(2592x1944); 3MP(2048x1536)'
}, {
    p: 'Flash',
    v: 'auto, on, off'
}, {
    p: 'Flash range',
    v: '1,0m - 2,0m'
}, {
    p: 'Display',
    v: '7,6 cm (3,0") LCD touch screen'
}, {
    p: 'Video resolution',
    v: 'FHD (1920x1080/30fps), HD (1280x720/30fps), WVGA (848x480/60fps) Web (320x240)'
}, {
    p: 'TV system',
    v: 'NTSC and PAL'
}, {
    p: 'Storage',
    v: '32MB internal, 2 x SD/SDHC card slot (cards up to 32GB)'
}, {
    p: 'File format',
    v: 'MOV (H.264), JPEG, ADPCM'
}, {
    p: 'Interface',
    v: 'USB 2.0, TV-Out, earphone jack, MIC input'
}, {
    p: 'Energy source',
    v: 'rechargeable C-NP40 Li-ion battery or 2 x AA alcaline batteries'
}, {
    p: 'Dimensions',
    v: '112 x 50,3 x 59,5'
}, {
    p: 'Weight',
    v: 'ca. 234g'
}, {
    p: 'Accessories',
    v: 'Software, cable, 2 x AA batteries'
}, {
    p: 'OS requirements',
    v: 'XP / Vista / 7'
}];
// tslint:disable-next-line:variable-name
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
    v: 'digital video camera, digital still camera, voice recording,'
}, {
    p: 'Zoom',
    v: 'up to 4x digital (720p)'
}, {
    p: 'Focus system',
    v: 'fix focus'
}, {
    p: 'Focus range',
    v: 'mormal: 1,20m-infinity, macro:: 20cm'
}, {
    p: 'Sensor',
    v: '1/2.5" CMOS, 5 mega pixels'
}, {
    p: 'Resolution',
    v: '16MP (4608x3456) and 8MP(3200x2400) interpolated; 5MP(2592x1944); 3MP(2048x1536)'
}, {
    p: 'Flash',
    v: 'auto, on, off'
}, {
    p: 'Flash range',
    v: '1,0m - 2,0m'
}, {
    p: 'Display',
    v: '7,6 cm (3,0") LCD touch screen'
}, {
    p: 'Video resolution',
    v: 'FHD (1920x1080/30fps), HD (1280x720/30fps), WVGA (848x480/60fps) Web (320x240)'
}, {
    p: 'TV system',
    v: 'NTSC and PAL'
}, {
    p: 'Storage',
    v: '32MB internal, 2 x SD/SDHC card slot (cards up to 32GB)'
}, {
    p: 'File format',
    v: 'MOV (H.264), JPEG, ADPCM'
}, {
    p: 'Interface',
    v: 'USB 2.0, TV-Out, earphone jack, MIC input'
}, {
    p: 'Energy source',
    v: 'rechargeable C-NP40 Li-ion battery or 2 x AA alcaline batteries'
}, {
    p: 'Dimensions',
    v: '112 x 50,3 x 59,5'
}, {
    p: 'Weight',
    v: 'ca. 234g'
}, {
    p: 'Accessories',
    v: 'Software, cable, 2 x AA batteries'
}, {
    p: 'OS requirements',
    v: 'XP / Vista / 7'
}];

const lang = {
    zh_cn,
    zh_tw,
    en,
};

// tslint:disable-next-line:no-string-literal
export default lang[locale] || lang['zh_cn'];