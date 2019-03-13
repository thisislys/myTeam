//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    array: [{
      img: './img/s1.png',
      tit: "放送表"
    }, {
      img: './img/s2.png',
      tit: "分类"
    }, {
      img: './img/s3.png',
      tit: "榜单"
    }, {
      img: './img/s4.png',
      tit: "完结"
    }],
    arrays: [{
      img: './img/goods1.png',
      tit: "狂想情人",
      con: '记住了，渣男必须死'
    }, {
      img: './img/goods2.png',
      tit: "魔法圣女",
      con: "变身魔法少女"
    }, {
      img: './img/goods3.png',
      tit: "攻略计",
      con: '比比谁有心计'
    }],
    imgUrls: [
      './img/bigimg1.png',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../list/list'
    })
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

  },
  // changeIndicatorDots(e) {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // },
  // changeAutoplay(e) {
  //   this.setData({
  //     autoplay: !this.data.autoplay
  //   })
  // },
  // intervalChange(e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },
  // durationChange(e) {
  //   this.setData({
  //     duration: e.detail.value
  //   })
  // }
})