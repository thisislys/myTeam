// pages/changeInfo/changeInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:{},
    time:{},
    jutiTime:{},
    isTrue:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  delData(){
    wx.clearStorageSync('userInfo');
  
    wx.navigateTo({
          url: '../index/index',
    })
    // wx.removeStorage({
    //   key: 'uesrInfo',
    //   success: function(res) {
    //     console.log(res,'2323')
    //     // wx.navigateTo({
    //     //   url: '../index/index',
    //     // })
    //   },
    // })
   
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
    
    let newData=wx.getStorageSync("userInfo");

    console.log(newData,'565656')
    this.setData({
      name: newData.obj.name,
      time: newData.obj.time,
      jutiTime: newData.obj.jutiTime
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