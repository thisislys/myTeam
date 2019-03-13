// pages/routerOne/one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
/**
 * 点击跳转到其他小程序
 */
jump(){
  wx.navigateToMiniProgram({
    appId:'wx7aea2003580a94e2',
    path:'pages/index/index',
    extraData:{
      foo:'bar'
    },
    envVersion:'develop',
    success: (result)=>{
      
    },
    fail: ()=>{},
    complete: ()=>{}
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoadA')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReadyA')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShowA')

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHideA')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnloadA')

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefreshA')

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(' onReachBottomA')

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessageA')
    return {
      withShareTicket: true

    }

  }
})