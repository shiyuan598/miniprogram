Page({
  navigateTo() {
    // wx.navigateTo({
    //   url: '../index/index',
    // })
    wx.navigateBack();
  },
  fetchData() {
    wx.request({
      url: 'https://dp.zhito.com:39020/api/user/list/all',
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(err);
      }
    })
  }
})