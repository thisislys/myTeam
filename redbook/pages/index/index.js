//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    isShow:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isShow:false
  },
  onLoad() {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              wx.showModal({
                title:'可乐在冒泡',
                content: '小红薯',
                success:()=>{
                    wx.switchTab({
                    url: '/pages/shop/shop',
                  })
                }
              })
            },
            fail() {
              {
                wx.switchTab({
                  url: '/pages/login/login',
                })
              }
            }
          })
        }
      }
    })
  },
  // bindGetUserInfo(e) {
  //   console.log(e.detail.userInfo);
  //   this.setData=true;
  // }
})