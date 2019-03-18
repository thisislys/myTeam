// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dat: [{
      "id": 0,
      "nm":"推荐",
      "list": [{
        "img": "../../img/2 (1).jpg",
        "content": "香港购物log on 最全日系产品店区你想要的这里都有",
        "pic": "../../img/2 (1).jpg",
        "sum": "3299"
      }, {
        "img": "../../img/2 (2).jpg",
        "content": "香港购物log on 最全日系产品店区你想要的这里都有",
        "pic": "../../img/2 (2).jpg",
        "sum": "3299"
      }, {
        "img": "../../img/2 (3).jpg",
        "content": "香港购物log on 最全日系产品店区你想要的这里都有",
        "pic": "../../img/2 (3).jpg",
        "sum": "3299"
      }, {
        "img": "../../img/2 (4).jpg",
        "content": "香港购物log on 最全日系产品店区你想要的这里都有",
        "pic": "../../img/2 (4).jpg",
        "sum": "3299"
      }, {
        "img": "../../img/2 (5).jpg",
        "content": "香港购物log on 最全日系产品店区你想要的这里都有",
        "pic": "../../img/2 (5).jpg",
        "sum": "3299"
      }, {
        "img": "../../img/2 (6).jpg",
        "content": "香港购物log on 最全日系产品店区你想要的这里都有",
        "pic": "../../img/2 (6).jpg",
        "sum": "3299"
      }, {
        "img": "../../img/2 (7).jpg",
        "content": "香港购物log on 最全日系产品店区你想要的这里都有",
        "pic": "../../img/2 (7).jpg",
        "sum": "3299"
      }]
    }, {
        "id": 1,
        "nm": "时尚",
        "list": [{
          "img": "../../img/2 (1).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (1).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (2).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (2).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (3).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (3).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (4).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (4).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (5).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (5).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (6).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (6).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (7).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (7).jpg",
          "sum": "3299"
        }]
      }, {
        "id": 2,
        "nm": "美妆",
        "list": [{
          "img": "../../img/2 (1).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (1).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (2).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (2).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (3).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (3).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (4).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (4).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (5).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (5).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (6).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (6).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (7).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (7).jpg",
          "sum": "3299"
        }]
      }, {
        "id": 3,
        "nm": "美食",
        "list": [{
          "img": "../../img/2 (1).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (1).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (2).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (2).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (3).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (3).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (4).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (4).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (5).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (5).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (6).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (6).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (7).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (7).jpg",
          "sum": "3299"
        }]
      }, {
        "id":4,
        "nm": "运动",
        "list": [{
          "img": "../../img/2 (1).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (1).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (2).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (2).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (3).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (3).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (4).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (4).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (5).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (5).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (6).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (6).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (7).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (7).jpg",
          "sum": "3299"
        }]
      }, {
        "id": 5,
        "nm": "旅行",
        "list": [{
          "img": "../../img/2 (1).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (1).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (2).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (2).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (3).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (3).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (4).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (4).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (5).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (5).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (6).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (6).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (7).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (7).jpg",
          "sum": "3299"
        }]
      }, {
        "id": 6,
        "nm": "居家",
        "list": [{
          "img": "../../img/2 (1).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (1).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (2).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (2).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (3).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (3).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (4).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (4).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (5).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (5).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (6).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (6).jpg",
          "sum": "3299"
        }, {
          "img": "../../img/2 (7).jpg",
          "content": "香港购物log on 最全日系产品店区你想要的这里都有",
          "pic": "../../img/2 (7).jpg",
          "sum": "3299"
        }]
      }],
      act:0
  },
  ck(e){
    this.setData({
      act: e.currentTarget.dataset.id
    })
  },
  jump(){
    // wx.getSetting({
    //   success(res) {
    //     if (!res.authSetting['scope.wx.getWeiXin']) {
    //       wx.authorize({
    //         scope: 'scope.wx.getgetWeiXin',
    //         success() {
    //           wx.startRecord()
    //         }
    //       })
    //     }
    //   }
    // })
    wx.openSetting({
      success(res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true
        //   "scope.userLocation": true
        // }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(this.data.dat)
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