const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 封装网络请求
const request = (url, data={}, header={}, method='GET')=>{
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      header,
      method,
      success: res=>{
        // if (statusCode != 200){

        // }else{

        // }
        resolve(res.data);
      },
      fail: res=>{
        reject(res);
      }
    })
  })
}

module.exports = {
  formatTime: formatTime,
  request
}
