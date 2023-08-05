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
    { key: 'yh', name: '嫣红', R: 209, G: 120, B: 125 },
    { key: 'fn', name: '粉暖', R: 212, G: 125, B: 124 },
    { key: 'ssh', name: '甚三红', R: 211, G: 120, B: 111 },
    { key: 'yh', name: '银红', R: 204, G: 83, B: 74 },
    { key: 'xxh', name: '猩猩红', R: 200, G: 59, B: 51 },
    { key: 'gqh', name: '宫墙红', R: 147, G: 62, B: 42 },
    { key: 'zh', name: '中红', R: 196, G: 76, B: 103 },
    { key: 'qf', name: '浅粉', R: 242, G: 218, B: 217 },
    { key: 'shf', name: '珊瑚粉', R: 227, G: 188, B: 190 },
    { key: 'scf', name: '山茶粉', R: 206, G: 97, B: 122 },
    { key: 'scs', name: '山茶色', R: 187, G: 90, B: 110 },
    { key: 'qws', name: '蔷薇色', R: 197, G: 33, B: 98 },
    { key: 'mdh', name: '牡丹红', R: 183, G: 0, B: 108 },
    { key: 'lhs', name: '栗红色', R: 153, G: 65, B: 30 },
    { key: 'df', name: '淡粉', R: 234, G: 198, B: 205 },
    { key: 'cmh', name: '春梅红', R: 217, G: 141, B: 147 },
    { key: 'zhs', name: '紫红色', R: 206, G: 151, B: 190 },
    { key: 'xgh', name: '西瓜红', R: 204, G: 85, B: 99 },
    { key: 'mgh', name: '玫瑰红', R: 197, G: 33, B: 98 },
    { key: 'yh', name: '洋红', R: 194, G: 0, B: 123 },
    { key: 'hcs', name: '红茶色', R: 140, G: 80, B: 38 },
    { key: 'hbl', name: '红巴梨', R: 212, G: 151, B: 130 },
    { key: 'nf', name: '浓粉', R: 217, G: 143, B: 144 },
    { key: 'glh', name: '高粱红', R: 183, G: 50, B: 55 },
    { key: 'fh', name: '绯红', R: 198, G: 41, B: 38 },
    { key: 'sf', name: '深绯', R: 171, G: 28, B: 35 },
    { key: 'chh', name: '茶花红', R: 177, G: 0, B: 47 },
    { key: 'yjh', name: '月季花', R: 190, G: 36, B: 95 },
    { key: 'hmf', name: '红梅粉', R: 234, G: 198, B: 198 },
    { key: 'mgf', name: '玫瑰粉', R: 214, G: 132, B: 152 },
    { key: 'zh', name: '朱红', R: 204, G: 86, B: 48 },
    { key: 'sh', name: '深红', R: 169, G: 72, B: 53 },
    { key: 'syh', name: '深洋红', R: 184, G: 0, B: 64 },
    { key: 'jh', name: '酒红', R: 154, G: 0, B: 63 },
    { key: 'zgh', name: '中国红', R: 185, G: 20, B: 30 },
    { key: 'ts', name: '桃色', R: 199, G: 120, B: 148 },
    { key: 'kh', name: '枯红', R: 174, G: 114, B: 126 },
    { key: 'yzh', name: '胭脂红', R: 157, G: 75, B: 93 },
    { key: 'bsh', name: '宝石红', R: 170, G: 17, B: 81 },
    { key: 'ph', name: '品红', R: 176, G: 0, B: 109 },
    { key: 'njh', name: '浓酒红', R: 154, G: 0, B: 62 },
    { key: 'pts', name: '葡萄色', R: 135, G: 0, B: 81 },
    { key: 'ydh', name: '印度红', R: 188, G: 123, B: 93 },
    { key: 'mhs', name: '米红色', R: 218, G: 144, B: 106 },
    { key: 'sh', name: '赦红', R: 192, G: 128, B: 83 },
    { key: 's', name: '柿子', R: 201, G: 115, B: 66 },
    { key: 'xj', name: '雄精', R: 191, G: 109, B: 22 },
    { key: 'ztd', name: '棕泰迪', R: 127, G: 85, B: 47 },
    { key: 'tch', name: '陶瓷红', R: 209, G: 108, B: 41 },
    { key: 'dzsj', name: '淡紫水晶', R: 207, G: 196, B: 206 },
    { key: 'fh', name: '妃红', R: 183, G: 120, B: 89 },
    { key: 'sh', name: '鼠红', R: 168, G: 121, B: 106 },
    { key: 'zctc', name: '宗传唐茶', R: 155, G: 95, B: 80 },
    { key: 'zzc', name: '朱赭彩', R: 166, G: 78, B: 56 },
    { key: 'zs', name: '朱砂', R: 144, G: 67, B: 42 },
    { key: 'cms', name: '草莓色', R: 199, G: 45, B:49 },
    { key: 'xh', name: '腥红', R: 202, G: 70, B:23 },
    { key: 'cs', name: '辰砂', R: 181, G: 93, B:62 },
    { key: 'omh', name: '欧曼红', R: 171, G: 82, B: 37 },
    { key: 'ahc', name: '暗红橙', R: 189, G: 89, B:19 },
    { key: 'zh', name: '砖红', R: 157, G: 74, B:48 },
    { key: 'lhh', name: '榴花红', R: 160, G: 68, B:12 },
    { key: 'syh', name: '深釉红', R: 142, G: 55, B:0 },
    { key: 'bgh', name: '北瓜黄', R: 217, G: 139, B:52 },
    { key: 'hd', name: '黄丹', R: 208, G: 104, B:42 },
    { key: 'hys', name: '红罂粟', R: 204, G: 83, B:36 },
    { key: 'js', name: '橘色', R: 194, G: 102, B:67 },
    { key: 'xm', name: '芯木', R: 176, G: 100, B:70 },
    { key: 'qd', name: '铅丹', R: 199, G: 100, B:79 },
    { key: 'fs', name: '妃色', R: 204, G: 86, B:55 },
    { key: 'sss', name: '柿涩色', R: 179, G: 96, B:32 },
    { key: 'lm', name: '栗梅', R: 159, G: 82, B:32 },
    { key: 'qc', name: '雀茶', R: 177, G: 80, B:63 },
    { key: 'xdc', name: '小豆茶', R: 158, G: 85, B:72 },
    { key: 'hss', name: '红柿色', R: 201, G: 78, B:24 },
    { key: 'zs', name: '朱色', R: 189, G: 60, B:29 },
    { key: 'cs', name: '赤色', R: 191, G: 14, B:27 },
    { key: 'lgz', name: '蓝光紫', R: 196, G: 154, B:178 },
    { key: 'slgz', name: '深蓝光紫', R: 152, G: 94, B:127 },
    { key: 'th', name: '土红', R: 171, G: 115, B:125 },
    { key: 'zj', name: '紫酱', R: 142, G: 96, B:104 },
    { key: 'xd', name: '小豆', R: 127, G: 77, B:76 },
    { key: 'af', name: '暗绯', R: 115, G: 78, B:77 },
    { key: 'hhyh', name: '红海芋花', R: 161, G: 42, B:74 },
    { key: 'shz', name: '珊瑚朱', R: 212, G: 120, B:94 },
    { key: 'hth', name: '海棠红', R: 191, G: 86, B:99 },
    { key: 'zss', name: '朱砂色', R: 166, G: 77, B:100 },
    { key: 'yxht', name: '银星海棠', R: 168, G: 55, B:85 },
    { key: 'hgz', name: '华贵紫', R: 160, G: 108, B:151 },
    { key: 'qn', name: '牵牛', R: 131, G: 38, B:109 },
    { key: 'zhh', name: '中红灰', R: 139, G: 89, B:68 },
    { key: 'h', name: '荷', R: 198, G: 120, B:163 },
    { key: 'nhz', name: '霓虹紫', R: 175, G: 79, B:148 },
    { key: 'ymgh', name: '洋玫瑰红', R: 197, G: 33, B:98 },
    { key: 'ql', name: '青莲', R: 162, G: 0, B:125 },
    { key: 'zz', name: '踯躅', R: 203, G: 84, B:117 },
    { key: 'jy', name: '今样', R: 178, G: 84, B:98 },
    { key: 'hszm', name: '红酸枝木', R: 114, G: 57, B:57 },
    { key: 'mds', name: '牡丹色', R: 199, G: 55, B:104 },
    { key: 'qsf', name: '浅苏芳', R: 174, G: 55, B:99 },
    { key: 'ms', name: '莓色', R: 160, G: 18, B:79 },
    { key: 'zhs', name: '朱红色', R: 178, G: 40, B:57 },
    { key: 'ys', name: '鸢色', R: 114, G: 52, B:38 },
    { key: 'jjhy', name: '尖晶红玉', R: 191, G: 36, B:57 },
    { key: 'hhs', name: '红桦色', R: 152, G: 30, B:51 },
    { key: 'qnh', name: '牵牛花', R: 174, G: 59, B:72 },
    { key: 'xs', name: '茜色', R: 178, G: 52, B:77 },
    { key: 'yts', name: '樱桃色', R: 173, G: 48, B:73 },
    { key: 'hj', name: '红焦', R: 168, G: 43, B:80 },
    { key: 'hmh', name: '红梅花', R: 168, G: 31, B:77 },
    { key: 'xrh', name: '旭日红', R: 197, G: 0, B:48 },
    { key: 'dh', name: '大红', R: 196, G: 0, B:63 },
    { key: 'lh', name: '榴花', R: 176, G: 74, B:68 },
    { key: 'hcsh', name: '红长寿花', R: 186, G: 56, B:64 },
    { key: 'he', name: '红鹗', R: 148, G: 36, B:40 },
    { key: 'sng', name: '圣女果', R: 193, G: 59, B:27 },
    { key: 'nfh', name: '霓粉红', R: 196, G: 0, B:68 },
    { key: 'xhs', name: '西红柿', R: 196, G: 37, B:33 },
    { key: 'fqh', name: '番茄红', R: 167, G: 0, B:38 },
    { key: 'yzs', name: '胭脂色', R: 175, G: 0, B:47 },
    { key: 'tlh', name: '天龙红', R: 188, G: 59, B:53 },
    { key: 'yz', name: '银朱', R: 190, G: 55, B:60 },
    { key: 'ch', name: '赤红', R: 191, G: 12, B:38 },
    { key: 'tmh', name: '铁马红', R: 185, G: 20, B:30 },
    { key: 'smd', name: '深牡丹', R: 158, G: 0, B:44 },
    { key: 'xch', name: '苋菜红', R: 167, G: 37, B:43 },
    { key: 'mdfh', name: '牡丹粉红', R: 221, G: 157, B:156 },
    { key: 'hhh', name: '豪华红', R: 185, G: 114, B:109 },
    { key: 'sf', name: '深粉', R: 214, G: 132, B:125 },
    { key: 'rdf', name: '热带粉', R: 215, G: 131, B:95 },
    { key: 'hh', name: '红褐', R: 196, G: 149, B:95 },
    { key: 'sjh', name: '深酒红', R: 89, G: 31, B:48 },
    { key: 'tmh', name: '桃木红', R: 83, G: 39, B:43 },
    { key: 'rdz', name: '热带赭', R: 134, G: 95, B:70 },
    { key: 'zt', name: '紫铜', R: 122, G: 83, B:65 },
    { key: 'zh', name: '棕黑', R: 128, G: 76, B:46 },
    { key: 'bb', name: '弁柄', R: 132, G: 83, B:67 },
    { key: 'zsb', name: '紫扇贝', R: 146, G: 90, B:92 },
    { key: 'hhp', name: '红桧皮', R: 115, G: 77, B:70 },
    { key: 'hlc', name: '海老茶', R: 101, G: 66, B:68 },
    { key: 'qfxz', name: '浅凤仙紫', R: 200, G: 129, B:175 },
    { key: 'xyh', name: '象牙红', R: 155, G: 56, B:61 },
    { key: 'yz', name: '燕脂', R: 136, G: 51, B:68 },
    { key: 'hhs', name: '褐红色', R: 135, G: 39, B:55 },
    { key: 'mg', name: '玫瑰', R: 126, G: 54, B:66 },
    { key: 'nhzh', name: '耐火砖红', R: 160, G: 65, B:40 },
    { key: 'mlh', name: '茉莉红', R: 147, G: 36, B:68 },
    { key: 'hych', name: '红迎春花', R: 201, G: 64, B:63 },
    { key: 'dht', name: '煅黄土', R: 134, G: 78, B:70 },
    { key: 'xs', name: '玄色', R: 130, G: 62, B:54 },
    { key: 'yh', name: '釉红', R: 124, G: 49, B:0 },
    { key: 'jghh', name: '鸡冠花红', R: 106, G: 0, B:38 },
    { key: 'zh', name: '紫红', R: 123, G: 0, B:34 },
    { key: 'zh', name: '枣红', R: 104, G: 0, B:24 },
    { key: 'ycs', name: '鸢茶色', R: 119, G: 68, B:37 },
    { key: 'lps', name: '栗皮色', R: 107, G: 67, B:69 },
    { key: 'hlcs', name: '海老茶色', R: 119, G: 40, B:38 },
    { key: 'xhs', name: '茜红色', R: 147, G: 27, B:60 },
    { key: 'sfs', name: '苏芳色', R: 115, G: 15, B:56 },
    { key: 'zf', name: '紫锋', R: 104, G: 0, B:24 },
    { key: 'jz', name: '京紫', R: 83, G: 42, B:86 },
    { key: 'qnz', name: '牵牛紫', R: 100, G: 12, B:83 },
    { key: 'zz', name: '枣紫', R: 94, G: 0, B:0 },
    { key: 'hz', name: '黑紫', R: 78, G: 0, B:0 },
    { key: 'qz', name: '绀紫', R: 66, G: 0, B:37 },
    { key: 'azyh', name: '暗紫苑红', R: 128, G: 25, B:43 },
    { key: 'qpz', name: '茄皮紫', R: 51, G: 13, B:31 },
    { key: 'grs', name: '瓜瓤色', R: 216, G: 136, B:95 },
    { key: 'ms', name: '暮色', R: 198, G: 112, B:69 },
    { key: 'ds', name: '丹色', R: 201, G: 122, B:62 },
    { key: 'mhs', name: '木红色', R: 157, G: 96, B:69 },
    { key: 'amsc', name: '爱马仕橙', R: 211, G: 115, B:45 },
    { key: 'zs', name: '赭色', R: 165, G: 74, B:47 },
    { key: 'zs', name: '曙色', R: 176, G: 72, B:17 },
    { key: 'blh', name: '菠萝红', R: 212, G: 120, B:62 },
    { key: 'mjh', name: '莓酱红', R: 207, G: 100, B:50 },
    { key: 'slh', name: '石榴红', R: 185, G: 36, B:62 },
    { key: 'zjs', name: '朱瑾', R: 200, G: 59, B:45 },
    { key: 'xyh', name: '夕阳红', R: 200, G: 59, B:39 },
    { key: 'js', name: '绛色', R: 173, G: 18, B:27 },
    { key: 'egh', name: '鹅冠红', R: 192, G: 42, B:48 },
    { key: 'ohs', name: '藕合色', R: 240, G: 212, B:188 },
    { key: 'mjh', name: '满江红', R: 162, G: 84, B:86 },
    { key: 'dms', name: '玳瑁色', R: 114, G: 62, B:55 },
    { key: 'exsh', name: '鹅血石红', R: 166, G: 59, B:48 },
    { key: 'dds', name: '淡豆沙', R: 133, G: 60, B:36 },
    { key: 'cs', name: '茶色', R: 125, G: 55, B:40 },
    { key: 'hs', name: '褐色', R: 125, G: 66, B:0 },
];

const yellowColors = [
    { key: 'yellow_10', name: '黄色 10%', R: 255, G: 254, B: 238 },
    { key: 'yellow_20', name: '黄色 20%', R: 255, G: 252, B: 219 },
    { key: 'yellow_30', name: '黄色 30%', R: 255, G: 251, B: 200 },
    { key: 'yellow_50', name: '黄色 50%', R: 255, G: 247, B: 157 },
    { key: 'yellow_60', name: '黄色 60%', R: 255, G: 245, B: 134 },
    { key: 'yellow_80', name: '黄色 80%', R: 255, G: 242, B: 83 },
    { key: 'yellow_100', name: '安全黄色', R: 255, G: 240, B: 0 },
    { key: 'rh', name: '乳黄', R: 253, G: 246, B: 214 },
    { key: 'fcf', name: '富春坊', R: 252, G: 243, B: 196 },
    { key: 'rhs', name: '乳褐色', R: 240, G: 229, B: 203 },
    { key: 'ymh', name: '玉米黄', R: 238, G: 223, B: 189 },
    { key: 'dmc', name: '大麦彩', R: 232, G: 221, B: 185 },
    { key: 'zh', name: '枝黄', R: 226, G: 215, B: 185 },
    { key: 'ms', name: '米色', R: 220, G: 202, B: 169 },
    { key: 'xyh', name: '象牙黄', R: 252, G: 243, B: 196 },
    { key: 'xjh', name: '小鸠黄', R: 244, G: 238, B: 194 },
    { key: 'ys', name: '牙色', R: 237, G: 228, B: 180 },
    { key: 'gch', name: '甘草黄', R: 233, G: 219, B: 167 },
    { key: 'hbh', name: '黄百合', R: 240, G: 234, B: 182 },
    { key: 'zlz', name: '蒸栗子', R: 218, G: 209, B: 142 },
    { key: 'mlc', name: '木兰彩', R: 211, G: 199, B: 166 },
    { key: 'zls', name: '蒸栗色', R: 246, G: 242, B: 200 },
    { key: 'dls', name: '淡卵色', R: 253, G: 243, B: 180 },
    { key: 'dh', name: '淡黄', R: 248, G: 236, B: 165 },
    { key: 'bc', name: '白茶', R: 232, G: 217, B: 166 },
    { key: 'js', name: '肌色', R: 242, G: 218, B: 195 },
    { key: 'dxs', name: '淡香色', R: 238, G: 205, B: 158 },
    { key: 'xjh', name: '香蕉黄', R: 219, G: 211, B: 116 },
    { key: 'ls', name: '梨色', R: 244, G: 220, B: 175 },
    { key: 'scs', name: '沙茶色', R: 234, G: 211, B: 172 },
    { key: 'js', name: '绢色', R: 226, G: 200, B: 153 },
    { key: 'fs', name: '肤色', R: 234, G: 193, B: 116 },
    { key: 'scs', name: '沙尘色', R: 202, G: 181, B: 144 },
    { key: 'ms', name: '麦色', R: 196, G: 175, B: 131 },
    { key: 'ks', name: '枯色', R: 182, G: 159, B: 117 },
    { key: 'mls', name: '茉莉色', R: 247, G: 247, B: 209 },
    { key: 'xbh', name: '香槟黄', R: 240, G: 232, B: 170 },
    { key: 'ylh', name: '月亮黄', R: 252, G: 236, B: 107 },
    { key: 'xhs', name: '鲜黄色', R: 252, G: 233, B: 25 },
    { key: 'lqh', name: '连翘黄', R: 234, G: 204, B: 80 },
    { key: 'ahs', name: '暗黄色', R: 216, G: 201, B: 0 },
    { key: 'ls', name: '卵色', R: 245, G: 220, B: 125 },
    { key: 'nqh', name: '浓浅黄', R: 244, G: 218, B: 139 },
    { key: 'yt', name: '杨桃', R: 241, G: 237, B: 136 },
    { key: 'ycs', name: '樱草', R: 238, G: 234, B: 86 },
    { key: 'sfs', name: '松粉', R: 229, G: 231, B: 111 },
    { key: 'mlh', name: '茉莉黄', R: 229, G: 206, B: 118 },
    { key: 'nlh', name: '女郎花', R: 222, G: 215, B: 80 },
    { key: 'nmh', name: '柠檬黄', R: 218, G: 210, B: 80 },
    { key: 'bh', name: '白黄', R: 247, G: 241, B: 174 },
    { key: 'qh', name: '浅黄', R: 247, G: 238, B: 130 },
    { key: 'jhh', name: '金合欢', R: 229, G: 211, B: 81 },
    { key: 'hfy', name: '黄枫叶', R: 216, G: 190, B: 68 },
    { key: 'sh', name: '深黄', R: 226, G: 200, B: 15 },
    { key: 'sh', name: '沙黄', R: 234, G: 208, B: 158 },
    { key: 'th', name: '桃黄', R: 213, G: 162, B: 103 },
    { key: 'njh', name: '嫩姜黄', R: 252, G: 238, B: 129 },
    { key: 'jh', name: '姜黄', R: 247, G: 230, B: 119 },
    { key: 'sgh', name: '丝瓜花', R: 252, G: 236, B: 100 },
    { key: 'ch', name: '菜花', R: 245, G: 224, B: 93 },
    { key: 'ehs', name: '鹅黄色', R: 244, G: 230, B: 54 },
    { key: 'qxs', name: '秋香色', R: 211, G: 187, B: 29 },
    { key: 'nyc', name: '嫩芽彩', R: 208, G: 205, B: 170 },
    { key: 'ch', name: '草黄', R: 246, G: 230, B: 60 },
    { key: 'omh', name: '欧曼黄', R: 240, G: 204, B: 0 },
    { key: 'cj', name: '赤金', R: 238, G: 200, B: 64 },
    { key: 'th', name: '藤黄', R: 238, G: 199, B: 61 },
    { key: 'jqhh', name: '金雀花黄', R: 230, G: 199, B: 53 },
    { key: 'hy', name: '花叶', R: 238, G: 201, B: 94 },
    { key: 'yzs', name: '玉镯黍', R: 229, G: 191, B: 95 },
    { key: 'dhs', name: '淡黄色', R: 249, G: 233, B: 181 },
    { key: 'qts', name: '浅土色', R: 232, G: 204, B: 100 },
    { key: 'gh', name: '铬黄', R: 241, G: 207, B: 0 },
    { key: 'pph', name: '枇杷黄', R: 234, G: 189, B: 0 },
    { key: 'jzh', name: '金盏花', R: 228, G: 170, B: 1 },
    { key: 'kjs', name: '卡机色', R: 165, G: 135, B: 52 },
    { key: 'ts', name: '土色', R: 181, G: 142, B: 0 },
    { key: 'qjh', name: '秋菊黄', R: 251, G: 236, B: 152 },
    { key: 'hxc', name: '含羞草', R: 229, G: 211, B: 81 },
    { key: 'js', name: '金色', R: 207, G: 179, B: 0 },
    { key: 'lyh', name: '落叶黄', R: 214, G: 163, B: 17 },
    { key: 'jzs', name: '芥子色', R: 208, G: 196, B: 103 },
    { key: 'xms', name: '小麦色', R: 172, G: 155, B: 87 },
    { key: 'hhs', name: '黄褐色', R: 143, G: 122, B: 29 },
    { key: 'dyh', name: '淡月黄', R: 255, G: 244, B: 109 },
    { key: 'zgh', name: '中国黄', R: 232, G: 217, B: 0 },
    { key: 'hjh', name: '灰菊黄', R: 224, G: 220, B: 165 },
    { key: 'nblsh', name: '那不勒斯黄', R: 211, G: 203, B: 84 },
    { key: 'tzh', name: '土著黄', R: 179, G: 166, B: 65 },
    { key: 'skjb', name: '深卡机布', R: 130, G: 117, B: 35 },
    { key: 'shs', name: '深褐色', R: 107, G: 90, B: 0 },
    { key: 'jsq', name: '金丝雀', R: 247, G: 238, B: 70 },
    { key: 'yjs', name: '郁金香', R: 232, G: 217, B: 0 },
    { key: 'dqxy', name: '淡青朽叶', R: 201, G: 184, B: 81 },
    { key: 'ys', name: '油色', R: 209, G: 185, B: 58 },
    { key: 'ssbc', name: '桑色白茶', R: 206, G: 208, B: 156 },
    { key: 'hzs', name: '灰汁色', R: 198, G: 184, B: 151 },
    { key: 'gs', name: '干色', R: 198, G: 170, B: 110 },
    { key: 'dfs', name: '砥粉色', R: 226, G: 187, B: 128 },
    { key: 'ysss', name: '玉蜀黍色', R: 238, G: 202, B: 125 },
    { key: 'nyh', name: '奶油黄', R: 236, G: 196, B: 101 },
    { key: 'jc', name: '金茶', R: 224, G: 167, B: 82 },
    { key: 'xs', name: '香色', R: 222, G: 172, B: 141 },
    { key: 'hlc', name: '海螺橙', R: 219, G: 146, B: 92 },
    { key: 'lys', name: '落叶色', R: 199, G: 175, B: 110 },
];

export const  getContrastColor = (color) => {
    const r = 255 - parseInt(color.substr(1, 2), 16);
    const g = 255 - parseInt(color.substr(3, 2), 16);
    const b = 255 - parseInt(color.substr(5, 2), 16);
    return "#" + r.toString(16).padStart(2, "0") + g.toString(16).padStart(2, "0") + b.toString(16).padStart(2, "0");
}  

export const rgbToHex = (r = 0, g = 0, b = 0) => {
    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    const red = componentToHex(r).toUpperCase();
    const green = componentToHex(g).toUpperCase();
    const blue = componentToHex(b).toUpperCase();

    return "#" + red + green + blue;
}

export const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const thex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const tresult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(thex);
    if (tresult && tresult.length > 3) {
        return {
            r: parseInt(tresult[1], 16),
            g: parseInt(tresult[2], 16), 
            b: parseInt(tresult[3], 16)
        }
    }
}

// yellowColors.forEach(item => {
//     item.hex = rgbToHex(item.R, item.G, item.B);
// })


// fs.writeFile('./src/util/colors.txt', JSON.stringify(yellowColors), null, () => {})