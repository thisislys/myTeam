// pages/remide/remide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reName:{},
    reTime:{},
    rejutiTime:{},
    isTrue:true
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
    if (wx.getStorageSync("userInfo")){
      let info = wx.getStorageSync("userInfo");
      // console.log(info.obj)
      this.setData({
        reName: info.obj.name,
        reTime: info.obj.time,
        rejutiTime: info.obj.jutiTime
      })
    }
    
 
  },
  changeData(){
    wx.navigateTo({
      url: '../changeInfo/changeInfo',
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let newData = wx.getStorageSync("userInfo");
    if (!newData.obj) {
      this.setData({
        isTrue: false
      })
    }
    
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