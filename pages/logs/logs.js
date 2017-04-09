//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    startX: 0,
    startY: 0
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return ({ content: util.formatTime(new Date(log)), isTouchMove: false })
      })
    })
  },
  touchstart: function (e) {
    var changedTouches = e.changedTouches[0]
    this.data.logs.forEach(function (v, i) {
      if (v.isTouchMove) {
        v.isTouchMove = false;
      }
    })
    this.setData({ logs: this.data.logs, startX: changedTouches.clientX, startY: changedTouches.clientY })
  },
  touchmove: function (e) {
    var index = e.currentTarget.dataset.index
    var touchMoveX = e.changedTouches[0].clientX
    var touchMoveY = e.changedTouches[0].clientY
    var startX = this.data.startX
    var startY = this.data.startY
    //var angle = util.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY })
    var angle = util.getSlideDirection({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY })
    this.data.logs.forEach(function (v, i) {
      v.isTouchMove = false
      // if (Math.abs(angle) > 30) {
      //   return;
      // }
      if (angle < 3) {
        return;
      }
      if (i === index) {
        if (touchMoveX > startX) {
          v.isTouchMove = false;
        } else {
          v.isTouchMove = true;
        }
      }
    })
    this.setData({ logs: this.data.logs })
  },
  del: function (e) {
    var index = e.currentTarget.dataset.index
    this.data.logs.splice(index, 1)
    this.setData({ logs: this.data.logs })
    wx.setStorage({
      key: "logs",
      data: (this.data.logs || []).map(function (log) {
        return (new Date(log.content).getTime())
      })
    })
  }

})
