Page({
  data: {
    show: false,
    buttons: [{
      text: '取消'
    }, {
      text: '确认'
    }],
  },
  navigateTo() {
    wx.switchTab({
      url: '../index/index',
    });
    console.log("hello hello");
  },
  fetchData() {
    this.setData({
      show: true
    });
    wx.request({
      url: 'https://dp.zhito.com:39020/api/user/list/all',
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  tapDialogButton({
    detail
  }) {
    console.log(detail);
    this.setData({
      show: false
    });
  }
})