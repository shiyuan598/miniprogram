// index.js
Page({
  data: { msg: "", image: "" },
  getPhoneNumber(e) {
    console.log(e.detail.code);
  },
  login() {
    wx.login({
      success: (res) => {
        console.log(res);
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
    // wx.scanCode({
    //   success: (res) => {
    //     console.log(`扫描到二维码：${res}`);
    //     this.setData({
    //       msg: JSON.stringify(res)
    //     });
    //   }
    // })
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ["album", "camera"],
      success: (res) => {
        console.log(res.data, res.tempFiles);
        this.setData({image: res.tempFiles[0].tempFilePath})
        const tempFilePath = res.tempFiles[0].tempFilePath;
        wx.uploadFile({
          filePath: tempFilePath,
          name: 'file',
          url: 'http://172.16.12.84:9030/upload',
          success: (res) => {
            console.log("上传成功");
            const data = JSON.parse(res.data);
            console.log(data);
          },
          fail: (err) => {
            console.log("上传失败", err);
          }
        })
      }
    })
  }
})
