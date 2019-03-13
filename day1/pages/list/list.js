// pages/list/list.js
let idx = 0;
let idx2 = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrays: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let arrays = []
    arrays.push({
      img: './img/goods1.png',
      star: "暗黑少女",
      tit: "狂想情人",
      con: '记住了，渣男必须死'
    }, {
      img: './img/goods2.png',
      star: "漫语动漫",
      tit: "魔法圣女",
      con: "变身魔法少女"
    }, {
      img: './img/goods3.png',
      star: "痴情叔叔",
      tit: "攻略计",
      con: '比比谁有心计'
    }, {
      img: './img/goods4.png',
      star: "暗黑少女",
      tit: "神说要有光",
      con: '我变成了女孩'
    }, {
      img: './img/goods5.png',
      star: "蜂群工作者",
      tit: "仙咒",
      con: '成仙之路'
    }, {
      img: './img/goods3.png',
      star: "暗黑少女",
      tit: "真理面具",
      con: '一起来揭开真相'
    })
    this.setData({
      arrays
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 点击触发小弹框
   */
  showtit(e) {
    let tit = e.target.dataset.tit;
    wx.showToast({
      title: tit,
      icon: 'success',
      duration: 1500,
      mask: true,
      // success: (result) => {

      // },
      // fail: () => {},
      // complete: () => {}
    });
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    let arrays = [];
    for (var i = 0, len = 7; i < len; i++) {
      idx++;
      arrays.push({
        img: `./img/goods${i+1}.png`,
        star: "暗黑少女",
        tit: "狂想情人" + idx,
        con: '记住了，渣男必须死'
      })
    }
    this.setData({
      arrays
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let arrays = this.data.arrays;
    let length = this.data.arrays.length;
    for (var i = 0, len = 7; i < len; i++) {
      idx2++;
      arrays.push({
        img: `./img/goods${i+1}.png`,
        star: "暗黑少女",
        tit: "狂想情人" + idx2,
        con: '记住了，渣男必须死'
      })
    }
    this.setData({
      arrays
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})