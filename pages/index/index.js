//index.js
var util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello',
    userInfo: {},
    grids: [
      { name: '章节练习' },
      { name: '顺序练习' },
      { name: '专项练习' },
      { name: '强化练习' },
      { name: '错题练习' },
      { name: '模拟考试' },
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onClickItem: function (e) {
    wx.navigateTo({
      url: '../item/item?f='+e.currentTarget.dataset.id
    })
  },
  onShow: function () {
    this.setData({ motto: app.globalData.appTitle })
  },
  onLoad: function () {
    console.log('onLoad')
    //调用应用实例的方法获取全局数据
    app.getUserInfo(
      userInfo => {
        this.setData({
          userInfo: userInfo
        })
      }
    )
  }
})
