// index.js
Page({
  data: { msg: "" },
  getPhoneNumber(e) {
    console.log(e.detail.code);
  },
  login() {
    wx.login({
      success: (res) => {
        wx.showToast({
          title: '登录成功',
        })
        wx.getUserInfo({
          success: (res) => {
            wx.showToast({
              title: '获取用户信息成功' + JSON.stringify(res),
            })
            console.log(JSON.stringify(res));

            this.setData({
              msg: res.userInfo.nickName
            });
          },
          fail: (err) => {
            wx.showToast({
              title: '获取用户信息失败',
              icon: 'error',
            })
          }
        })
      },
      fail: (err) => {
        wx.showToast({
          title: '登录失败',
        })
      }
    })
  },
  photo() {
    this.setData({
      msg: "Hello World"
    });
    wx.scanCode({
      success: (res) => {
        console.log(`扫描到二维码：${res}`);
        this.setData({
          msg: JSON.stringify(res)
        });
      }
    })
    wx.createCameraContext()
  }
})
