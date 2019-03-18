// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch:false,
    nickname:'',
    imgUrl:''
  },
  handle:function(e){
    console.log(e)
    //e.detaill.errMsg
    if (e.detail.errMsg === "getUserInfo: fail getaddrinfo ENOTFOUND servicewechat.com servicewechat.com: 443"){
      wx.openSetting({
        success(res) {    
          console.log(res.authSetting)
          // res.authSetting = {
          //   "scope.userInfo": true,
          //   "scope.userLocation": true
          // }
        }
      })
    }else{
      this.setData({
        nickname: e.detail.userInfo.nickName,
        imgUrl: e.detail.userInfo.avatarUrl
      })
    }
    this.setData({
      switch:true
    })
    
  },
  cancel:function(){
    this.setData({
      switch: false
    })
  },
  sure:function(){
    this.setData({
      switch: false
    })
    wx.switchTab({
      url: '../home/home',
    })
    // wx.setStorageSync({
    //   nickname:this.data.nickname,
    //   imgUrl: this.imgUrl
    // })
   
    // wx.getSetting({
    //   success(res) {
    //     console.log(res.authSetting)
    //     // res.authSetting = {
    //     //   "scope.userInfo": true,
    //     //   "scope.userLocation": true
    //     // }
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.startRecord()
            }
          })
        }
      }
    })
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