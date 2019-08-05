//=====================================Array==============================

/**
 * 查找指定的元素在数组中的位置
 */
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
/*
 *  方法:Array.remove(obj)
 *  功能:删除数组元素.
 *  参数:要删除的对象.
 *  返回:在原数组上修改数组
 */
Array.prototype.remove = function(obj) {
  if (null == obj) {
    return;
  }
  for (var i = 0, n = 0; i < this.length; i++) {
    if (this[i] != obj) {
      this[n++] = this[i];
    }
  }
  this.length -= 1;
};
/*
 *  方法:Array.removeAt(Index)
 *  功能:删除数组元素.
 *  参数:Index删除元素的下标.
 *  返回:在原数组上修改数组
 */
Array.prototype.removeAt = function(Index) {
  if (isNaN(Index) || Index > this.length) {
    return false;
  }
  for (var i = 0, n = 0; i < this.length; i++) {
    if (this[i] != this[Index]) {
      this[n++] = this[i];
    }
  }
  this.length -= 1;
};

/*
 *  方法:Array.Contains(obj)
 *  功能:确定某个元素是否在数组中.
 *  参数:要查找的Object对象
 *  返回:找到返回true,否则返回false;
 */
Array.prototype.contains = function(obj) {
  if (null == obj) {
    return;
  }
  for (var i = 0, n = 0; i < this.length; i++) {
    if (this[i] == obj) {
      return true;
    }
  }

  return false;
};

/*
 *  方法:Array.Clear()
 *  功能:消空数组元素.
 *  参数:无.
 *  返回:空数组
 */
Array.prototype.clear = function() {
  this.length = 0;
};

//=====================================Date==============================

Date.prototype.format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
