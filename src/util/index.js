import fs from 'fs'

const redColors = [
    { key: 'red_10', name: '红色 10%', R: 249, G: 237, B: 228, hex: '#F9EDE4' },
    { key: 'red_20', name: '红色 20%', R: 242, G: 217, B: 199, hex: '#F2D9C7' },
    { key: 'red_30', name: '红色 30%', R: 234, G: 196, B: 171, hex: '#EAC4AB' },
    { key: 'red_40', name: '红色 40%', R: 227, G: 175, B: 144, hex: '#E3AF90' },
    { key: 'red_60', name: '红色 60%', R: 215, G: 131, B: 95, hex: '#D7835F' },
    { key: 'red_80', name: '红色 80%', R: 204, G: 86, B: 55, hex: '#CC5637' },
    { key: 'red_100', name: '红色 100%', R: 197, G: 0, B: 24, hex: '#C50018' },
    { key: 'gsf', name: '甘石粉', R: 249, G: 239, B: 238, hex: '#F9EFEE' },
    { key: 'doh', name: '淡藕合', R: 239, G: 233, B: 237, hex: '#EFE9ED' },
    { key: 'qzt', name: '浅紫藤', R: 238, G: 236, B: 241, hex: '#EEECF1' },
    { key: 'fz', name: '粉棕', R: 236, G: 229, B: 218, hex: '#ECE5DA' },
    { key: 'yef', name: '婴儿粉', R: 245, G: 228, B: 222, hex: '#F5E4DE' },
    { key: 'bkf', name: '贝壳粉', R: 226, G: 189, B: 174, hex: '#E2BDAE' },
    { key: 'hln', name: '火烈鸟', R: 213, G: 165, B: 166, hex: '#D5A5A6' },
    { key: 'fhc', name: '粉红彩', R: 249, G: 238, B: 237 },
    { key: 'ys', name: '樱色', R: 244, G: 224, B: 227 },
    { key: 'ffx', name: '粉凤仙', R: 239, G: 216, B: 215 },
    { key: 'qjr', name: '俏佳人', R: 245, G: 228, B: 227 },
    { key: 'qxy', name: '浅血牙', R: 234, G: 205, B: 209 },
    { key: 'th', name: '退红', R: 234, G: 196, B: 105 },
    { key: 'mdfh', name: '牡丹粉红', R: 221, G: 157, B: 156 },
    { key: 'dks', name: '蛋壳色', R: 249, G: 237, B: 228 },
    { key: 'os', name: '藕色', R: 234, G: 196, B: 171 },
    { key: 'nks', name: '奶咖色', R: 219, G: 184, B: 161 },
    { key: 'ms', name: '木色', R: 219, G: 189, B: 153 },
    { key: 'ycr', name: '一斥染', R: 222, G: 160, B: 174 },
    { key: 'xyh', name: '香叶红', R: 211, G: 120, B: 122 },
    { key: 'hbh', name: '红百合', R: 189, G: 117, B: 169 },
    { key: 'syj', name: '十样锦', R: 233, G: 196, B: 167 },
    { key: 'pf', name: '品粉', R: 226, G: 191, B: 170 },
    { key: 'fh', name: '粉红', R: 229, G: 182, B: 171 },
    { key: 'mth', name: '蜜糖红', R: 220, G: 169, B: 151 },
    { key: 'hhh', name: '合欢红', R: 221, G: 155, B: 160 },
    { key: 'qz', name: '浅棕', R: 213, G: 170, B: 130 },
    { key: 'fkc', name: '粉葵彩', R: 215, G: 155, B: 119 },
    { key: 'df', name: '淡绯', R: 238, G: 207, B: 201 },
    { key: 'rs', name: '肉色', R: 231, G: 187, B: 191 },
    { key: 'zwf', name: '紫薇粉', R: 218, G: 187, B: 187 },
    { key: 'ys', name: '樱鼠', R: 205, G: 182, B: 169 },
    { key: 'ms', name: '梅鼠', R: 177, G: 149, B: 155 },
    { key: 'shzs', name: '珊瑚珠色', R: 217, G: 143, B: 130 },
    { key: 'ss', name: '柿色', R: 219, G: 147, B: 124 },
    { key: 'nm', name: '奶檬', R: 222, G: 202, B: 188 },
    { key: 'fxf', name: '凤仙粉', R: 191, G: 156, B: 164 },
    { key: 'hh', name: '荷花', R: 212, G: 155, B: 153 },
    { key: 'rh', name: '肉红', R: 193, G: 134, B: 127 },
    { key: 'amh', name: '暗梅红', R: 186, G: 126, B: 123 },
    { key: 'gt', name: '古陶', R: 178, G: 115, B: 102 },
    { key: 'fsyh', name: '粉芍药花', R: 199, G: 100, B: 132 },
    { key: 'fsyh', name: '粉芍药花', R: 199, G: 100, B: 132 },
    { key: 'tf', name: '桃粉', R: 217, G: 144, B: 160 },
    { key: 'bh', name: '薄红', R: 212, G: 123, B: 139 },
    { key: 'cch', name: '长春花', R: 207, G: 104, B: 140 },
    { key: 'fmys', name: '粉猫眼石', R: 177, G: 127, B: 162 },
    { key: 'sch', name: '山茶红', R: 206, G: 97, B: 116 },
    { key: 'rf', name: '热粉', R: 204, G: 85, B: 106 },
    { key: 'yh', name: '玉红', R: 183, G: 75, B: 77 },
    { key: 'qh', name: '浅红', R: 212, G: 125, B: 144 },
    { key: 'hms', name: '红梅色', R: 208, G: 109, B: 139 },
    { key: 'ccs', name: '长春色', R: 188, G: 105, B: 115 },
    { key: 'qf', name: '浅绯', R: 191, G: 79, B: 88 },
    { key: 'fts', name: '绯褪色', R: 197, G: 94, B: 84 },
    { key: 'yh', name: '艳红', R: 205, G: 92, B: 97 },
    { key: 'hps', name: '桧皮色', R: 176, G: 117, B: 30 },
]

const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const red = componentToHex(r).toUpperCase();
    const green = componentToHex(g).toUpperCase();
    const blue = componentToHex(b).toUpperCase();

    return "#" + red + green + blue;
}

redColors.forEach(item => {
    item.hex = rgbToHex(item.R, item.G, item.B);
})

console.log(redColors);
fs.writeFile('./src/util/colors.txt', JSON.stringify(redColors), null, () => {})