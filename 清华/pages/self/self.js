// pages/self/self.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dList:[{
      date:"3月14日",
      txt:"今日关闭",
      open:false
    }, {
        date: "3月15日",
        txt: "周五.关闭",
        open: false
      }, {
        date: "3月16日",
        txt: "周六.开放",
        open: true
      }, {
        date: "3月17日",
        txt: "周日.开放",
        open: true
      }, {
        date: "3月18日",
        txt: "周一.关闭",
        open: false
      }, {
        date: "3月19日",
        txt: "周二.关闭",
        open: false
      }, {
        date: "3月20日",
        txt: "周三.关闭",
        open: false
      }, {
        date: "3月21日",
        txt: "周四.关闭",
        open: false
      }],
      ind:null,
      show:false,
      idx: null,
      timer: '',
      day:'',
      dateList:[{
        txt:"9:00-10:00"
      }, {
          txt: "10:00-11:00"
        }, {
          txt: "14:00-15:00"
        }, {
          txt: "15:00-16:00"
        }]
  },
  every:function(e){
    this.setData({
      ind: e.currentTarget.dataset.id,
      day: e._relatedInfo.anchorRelatedText.slice(0, -4),
      show:true
    })
  },
  ck:function(e){
    console.log(e._relatedInfo.anchorRelatedText.slice(0,-2))
    this.setData({
      idx: e.currentTarget.dataset.id,
      timer: e._relatedInfo.anchorRelatedText.slice(0, -2)
    })
  },
  jump:function(){
    wx.setStorageSync('timer',this.data.timer)
    wx.setStorageSync('day', this.data.day)
    wx.navigateTo({
      url: '../sure/sure',
    })
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})