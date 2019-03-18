// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    everylist:[],
    list: [{
      info: '热门',
      id: 0,
      cont: [
        {
          name: "热门1",
          num: 1256,
          icon:"../../images/cont1.png",
          cont:"今天还军事技术升级详情好",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
        },
        {
          name: "热门2",
          num: 1256,
          cont:"不同体香搭配大家打架闹事",
          icon: "../../images/cont2.png",
          cont: "不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr: "../../images/uesr2.png"
        },
        {
          name: "热门3",
          num: 1256,
          cont:"不同体香次奥小猫澳门",
          icon: "../../images/cont3.png",
          cont: "不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr: "../../images/uesr3.png"
        }, {
          name: "热门4",
          num: 1256,
          cont:"不同体香搭配大家打架闹事",
           icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
        }
      ]
    }, {
        info: '美妆',
        id: 1,
        cont: [
          {
            name: "美妆1",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont4.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr4.png"
          },
          {
            name: "美妆2",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont2.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr2.png"
          },
          {
            name: "美妆3",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont3.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr3.png"
          }, {
            name: "美妆4",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          }
        ]
      }, {
        info: '日常',
        id: 2,
        cont: [
          {
            name: "日常1",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont2.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr2.png"
          },
          {
            name: "日常2",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont3.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr3.png"
          },
          {
            name: "日常3",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont4.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr4.png"
          }, {
            name: "日常4",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          }
        ]
      }, {
        info: '男装',
        id: 3,
        cont: [
          {
            name: "男装1",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont3.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr3.png"
          },
          {
            name: "男装2",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont2.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr2.png"
          },
          {
            name: "男装3",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          }, {
            name: "男装4",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          }
        ]
      }, {
        info: '爆款',
        id: 4,
        cont: [
          {
            name: "爆款1",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          },
          {
            name: "爆款2",
            num: 1256,
            cont:"十九世时不时的是不同体香搭配大家打架闹事",
             icon:"../../images/cont2.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr3.png"
          },
          {
            name: "爆款3",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont4.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr2.png"
          }, {
            name: "爆款4",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          }
        ]
      }, {
        info: '水果',
        id: 5,
        cont: [
          {
            name: "水果1",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          },
          {
            name: "水果2",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          },
          {
            name: "水果3",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          }, {
            name: "水果4",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          }
        ]
      }, {
        info: '女生',
        id: 6,
        cont: [
          {
            name: "女生1",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          },
          {
            name: "女生2",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
             icon:"../../images/cont1.png",
          cont:"不同体香搭配大家打架闹事",
          text: "哈哈哈哈哈哈",
          uesr:"../../images/uesr1.png"
          },
          {
            name: "女生3",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
            text: "哈哈哈哈哈哈"
          }, {
            name: "女生4",
            num: 1256,
            cont:"不同体香搭配大家打架闹事",
            text: "哈哈哈哈哈哈"
          }
        ]
      }],
    ind:0,
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
  //  this.setData(this.list);
    this.setData({
      everylist: this.data.list[0].cont
    })
  },
  addActive(ind) {
    // console.log('121', ind._relatedInfo.anchorTargetText)
    // data:this.list[ind]
    let newInd=ind.target.dataset.ind;
    this.setData({
      ind:newInd,
      everylist:this.data.list[newInd].cont
    },()=>{
      console.log(this.data.everylist)
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