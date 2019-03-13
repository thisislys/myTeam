//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    array: [{
      tit: "机票",
      img: './img/1.png'
    }, {
      tit: "酒店客栈",
      img: './img/2.png'
    }, {
      tit: "火车票",
      img: './img/3.png'
    }, {
      tit: "汽车票",
      img: './img/4.png'
    }, {
      tit: "用车",
      img: './img/5.png'
    }, {
      tit: "旅游线路",
      img: './img/6.png'
    }, {
      tit: "周边游",
      img: './img/7.png'
    }, {
      tit: "领里程",
      img: './img/9.png'
    }, {
      tit: "门票",
      img: './img/8.png'
    }, {
      tit: "全部",
      img: './img/10.png'
    }, ],
    array2: [
      '国际机票', '签证', '国际酒店', '国际租车', '接送机', '境外上网', '景点票务', '当地玩乐'
    ],
    nav: [{
      tit: "首页",
      img: './img/1.png'
    }, {
      tit: "发现",
      img: './img/2.png'
    }, {
      tit: "目的地",
      img: './img/3.png'
    }, {
      tit: "行程",
      img: './img/8.png'
    }, {
      tit: "我的",
      img: './img/4.png'
    }]
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})