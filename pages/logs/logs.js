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
    this.data.logs.forEach(function (v, i) {
      if (v.isTouchMove) {
        v.isTouchMove = false;
      }
    })
    this.setData({ logs: this.data.logs, startX: e.changedTouches[0].clientX, startY: e.changedTouches[0].clientY })
    // console.log(e)
  },
  touchmove: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var touchMoveX = e.changedTouches[0].clientX
    var touchMoveY = e.changedTouches[0].clientY
    var angle = this.angle({ X: this.data.startX, Y: this.data.startY }, { X: touchMoveX, Y: touchMoveY })
    this.data.logs.forEach(function (v, i) {
      v.isTouchMove = false
      if (Math.abs(angle) > 30) {
        return;
      }
      if (i === index) {
        if (touchMoveX > that.data.startX) {
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
      data: this.data.logs
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
})
