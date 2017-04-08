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
    this.data.examData.forEach(function(v,i){
     if (i===index){
       v.isClick=true;
     }
    })
    this.setData({ examData: this.data.examData })
  }

})