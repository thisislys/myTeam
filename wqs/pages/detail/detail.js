// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[],
    count:1,
    end:6
  },
  getData:function(start,end){
    wx.request({
      url: "http://manhua.weibo.cn/wbcomic/home/page_recommend_list?mca=h5_recommend_male&_type=h5",
      method: "get",
      success: (res) => {
        this.setData({
          listArr: res.data.data.h5_recommend_male_xiaobian_recommend.slice(start,end)
        })
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData(0,6)
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
    this.data.count = 1;
    this.getData(0,6)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(this.data.count++)
    this.setData({
      end:this.data.count*6
    })
    console.log(this.data.count)
    this.getData(0,this.data.end)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})