// pages/item/item.js
Page({
  data: {
    examData: [],
    isShow: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    //console.log(options)
    for (var i = 1; i <= 100; i++) {
      this.data.examData.push({
        content: i,
        isClick: false
      });
    }
    this.setData({ examData: this.data.examData })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    console.log(this.data.isShow)
    this.setData({ isShow: !this.data.isShow })
    console.log(this.data.isShow)
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  itemClick: function (e) {
    var index = e.currentTarget.dataset.index;
    //console.log(e);
    //this.data.examData[index].isClick = true;
    // this.setData({ examData: this.data.examData })
    var that = this;
    this.data.examData.forEach(function (v, i) {
      if (i === index) {
        v.isClick = true;
      }
    })
    //渲染页面
    that.setData({ examData: that.data.examData })
    // wx.showModal({
    //   title: '提示',
    //   content: '这是一个模态弹窗',
    //   success: function (res) {
    //     if (res.confirm) {
    //       that.data.examData.forEach(function (v, i) {
    //         if (i === index) {
    //           v.isClick = true;
    //         }
    //       })
    //       //渲染页面
    //       that.setData({ examData: that.data.examData })
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })

    // wx.showActionSheet({
    //   itemList: ['A', 'B', 'C'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })
    // wx.setNavigationBarTitle({
    //   title: '当前页面'
    // })

    // wx.chooseImage({
    //   count: 1, // 默认9
    //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //   success: function (res) {
    //     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    //     var tempFilePaths = res.tempFilePaths
    //   }
    // })
wx.makePhoneCall({
  phoneNumber: '1340000' //仅为示例，并非真实的电话号码
})

  }

})