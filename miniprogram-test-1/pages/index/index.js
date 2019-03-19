//index.js
const util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    logs: [],
    array: [{
      img: '../image/icon1.png',
      tit: "放送表"
    }, {
        img: '../image/icon2.png',
      tit: "分类"
    }, {
        img: '../image/icon3.png',
      tit: "榜单"
    }, {
        img: '../image/icon4.png',
      tit: "完结"
    }],
    arrays: [{
      img: '../image/1.png',
      tit: "狂想情人",
      con: '记住了，渣男必须死'
    }, {
        img: '../image/2.png',
      tit: "魔法圣女",
      con: "变身魔法少女"
    }, {
        img: '../image/3.png',
      tit: "攻略计",
      con: '比比谁有心计'
    }],
    movies: [
      { url: '../image/banner.png' },
      { url: '../image/banner.png' },
      { url: '../image/banner.png' },
      { url: '../image/banner.png' }
    ]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShareAppMessage: function () {
    console.log('onShareAppMessageA')
    return {
      withShareTicket: true

    }

  }
})

// Page({
//   data: {
//     imgUrls: [
//       './img/bigimg1.png',
//       './img/bigimg1.png',
//       './img/bigimg1.png',
//       './img/bigimg1.png'
//     ]
//   }
 
// })