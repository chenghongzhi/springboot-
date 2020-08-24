    var geoCoordMap = {
        '黑龙江省': [127.9688, 45.368],
        '内蒙古自治区': [110.3467, 41.4899],
        "吉林省": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁省": [123.1238, 42.1216],
        "河北省": [114.4995, 38.1006],
        "天津市": [117.4219, 39.4189],
        "山西省": [112.3352, 37.9413],
        "陕西省": [109.1162, 34.2004],
        "甘肃省": [103.5901, 36.3043],
        "宁夏回族自治区": [106.3586, 38.1775],
        "青海省": [101.4038, 36.8207],
        "新疆维吾尔自治区": [87.9236, 43.5883],
        "西藏自治区": [91.11, 29.97],
        "四川省": [103.9526, 30.7617],
        "重庆市": [108.384366, 30.439702],
        "山东省": [117.1582, 36.8701],
        "河南省": [113.4668, 34.6234],
        "江苏省": [118.8062, 31.9208],
        "安徽省": [117.29, 32.0581],
        "湖北省": [114.3896, 30.6628],
        "浙江省": [119.5313, 29.8773],
        "福建省": [119.4543, 25.9222],
        "江西省": [116.0046, 28.6633],
        "湖南省": [113.0823, 28.2568],
        "贵州省": [106.6992, 26.7682],
        "云南省": [102.9199, 25.4663],
        "广东省": [113.12244, 23.009505],
        "广西壮族自治区": [108.479, 23.1152],
        "海南省": [110.3893, 19.8516],
        '上海市': [121.4648, 31.2891],
        '香港特别行政区': [114.173355, 22.320048],
        '澳门特别行政区': [113.54909, 22.198951],
        '台湾省': [121.509062, 25.044332]
    };
    var LDjson = {
        '黑龙江省': {
            "提交数量": 50000000000,
            "确认数量": 4,
            "处置数量": 3
        },
        '内蒙古自治区': {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "吉林省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        '北京市': {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "辽宁省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "河北省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "天津市": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "山西省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "陕西省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "甘肃省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "宁夏回族自治区": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "青海省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "新疆维吾尔自治区": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "西藏自治区": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "四川省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "重庆市": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "山东省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "河南省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "江苏省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "安徽省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "湖北省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "浙江省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "福建省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "江西省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "湖南省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "贵州省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "云南省": {
            "提交数量": 52,
            "确认数量": 42,
            "处置数量": 3
        },
        "广东省": {
            "提交数量": 15,
            "确认数量": 14,
            "处置数量": 3
        },
        "广西壮族自治区": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        "海南省": {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        '上海市': {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        '香港特别行政区': {
            "提交数量": 9,
            "确认数量": 8,
            "处置数量": 3
        },
        '澳门特别行政区': {
            "提交数量": 5,
            "确认数量": 4,
            "处置数量": 3
        },
        '台湾省': {
            "提交数量": 5009,
            "确认数量": 500000000000,
            "处置数量": 10
        }
    };