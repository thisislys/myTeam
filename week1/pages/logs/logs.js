//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [
      {
        "time":"03月14号",
        "change":"已经关闭"
      }, {
        "time": "03月14号",
        "change": "已经关闭"
      }, {
        "time": "03月15号",
        "change": "可以预约"
      }, {
        "time": "03月16号",
        "change": "已经关闭"
      }, {
        "time": "03月17号",
        "change": "已经关闭"
      },
      {
        "time": "03月18号",
        "change": "已经关闭"
      },
      {
        "time": "03月19号",
        "change": "已经关闭"
      },
    ],
    times:[
        {
          "timer": "8-11:00",
          "cont": "开放"       
      }, {
        "timer": "1-13:00",
        "cont": "开放"
      }, {
        "timer": "15-17:00",
        "cont": "开放"
      }, {
        "timer": "18-20:00",
        "cont": "开放"
      }
    ],
    ind:2,
    indid:2,
    height: 20,
    isShow:false,
    focus: false,
    time:"",
    jutiTime:""
  },
  bindButtonTap() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit(e) {
    //获取文本框的值  进进项本地存储
    console.log(e.detail.value.textarea);
    let obj={
      name: e.detail.value.textarea,
      time: this.data.time,
      jutiTime: this.data.jutiTime
    }

    console.log(obj)
      wx.setStorageSync('userInfo',{
        obj
      });
    wx.navigateTo({
      url: '../succes/success?name=' + obj.name + '&time=' + obj.time +'&jutiTime='+obj.jutiTime
     })
  },
  addClass(e){
    console.log(e._relatedInfo.anchorTargetText);
    this.setData({
      isShow:!this.data.isShow,
      ind: e.target.dataset.ind,
      time: e._relatedInfo.anchorTargetText
    });
  },
  addTime(e) {
    console.log(e._relatedInfo.anchorTargetText, '656');
    this.setData({
      indid: e.target.dataset.indid,
      jutiTime: e._relatedInfo.anchorTargetText
    });
  },
  // onLoad: function () {
  //   this.setData({
  //     logs: (wx.getStorageSync('logs') || []).map(log => {
  //       return util.formatTime(new Date(log))
  //     })
  //   })
  // }
})
