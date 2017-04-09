function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getAppTitle() {
  return getApp().globalData.appTitle
}

//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
function getSlideDirection(start, end) {
  var dy = start.Y - end.Y;
  var dx = end.X - start.X;
  var result = 0;
  //如果滑动距离太短
  if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
    //未滑动
    return result;
  }
  //返回滑动的角度
  var angle = Math.atan2(dy, dx) * 180 / Math.PI;
  if (angle >= -45 && angle < 45) {
    //向右
    result = 4;
  }
  else if (angle >= 45 && angle < 135) {
    //向上
    result = 1;
  }
  else if (angle >= -135 && angle < -45) {
    //向下
    result = 2;
  }
  else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
    //向左
    result = 3;
  }
  return result;
}

/**
  * 计算滑动角度
  * @param {Object} start 起点坐标
  * @param {Object} end 终点坐标
  */
function angle(start, end) {
  var _X = end.X - start.X,
    _Y = end.Y - start.Y
  //返回角度 /Math.atan()返回数字的反正切值
  return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
}

module.exports = {
  formatTime: formatTime,
  getAppTitle: getAppTitle,
  getSlideDirection: getSlideDirection,
  angle: angle
}
