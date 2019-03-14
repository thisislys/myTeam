// pages/A/A.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
console.log('pull')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  console.log('down')
      setTimeout(()=>{
        wx.stopPullDownRefresh()
      },30000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    //自定义转发标题
    return {
      title: '康康康自定义啊啊啊',
      path: '/pages/A/A',
      imageUrl: "https://developers.weixin.qq.com/miniprogram/introduction/image/a.png?t=19031222"
    }
  }
})