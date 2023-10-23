Page({
  navigateTo() {
    // wx.navigateTo({
    //   url: '../index/index',
    // })
    wx.navigateBack();
    const appBaseInfo = wx.getAppBaseInfo();
    console.log(appBaseInfo.SDKVersion)
    console.log(appBaseInfo.enableDebug)
    console.log(appBaseInfo.host)
    console.log(appBaseInfo.language)
    console.log(appBaseInfo.version)
    console.log(appBaseInfo.theme)
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