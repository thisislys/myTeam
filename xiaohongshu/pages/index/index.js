import { request } from '../../utils/util.js'
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setStorageSync('detail', JSON.stringify())
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
    let data = wx.getStorageSync('list');
    data = JSON.parse(data);
    this.setData({
      list: data.data
    })
  },

  // 跳转详情
  goDetail(e){
    wx.navigateTo({
      url: '/pages/index/detail/detail?id='+e.currentTarget.dataset.id,
    })
  },

  // 封装获取分类数组的方法
    loadData: (oid, page=1, pageSize=30)=>{
      return request(
        'https://www.xiaohongshu.com/sapi/wx_mp_api/sns/v1/homefeed',
        {
          oid,
          page,
          pageSize
        }
      )
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