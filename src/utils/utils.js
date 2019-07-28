/**
 * 格式化时间
 *
 * @param {time} 时间
 * @param {cFormat} 格式
 * @return {String} 字符串
 *
 * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
 */
export const foramatDate = (time, format = "{y}-{m}-{d} {h}:{i}:{s}") => {
  if ((time + "").length === 10) {
    time = +time * 1000;
  }
  var date;
  if (typeof time === "object") {
    date = time;
  } else {
    date = new Date(time);
  }
  var formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    var value = formatObj[key];
    if (key === "a")
      return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
};

export const hasClass = (ele, cls) => {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
};
//为指定的dom元素添加样式
export const addClass = (ele, cls) => {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
};
//删除指定dom元素的样式
export const removeClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
};
//如果存在(不存在)，就删除(添加)一个样式
export const toggleClass = (ele, cls) => {
  if (hasClass(ele, cls)) {
    removeClass(ele, cls);
  } else {
    addClass(ele, cls);
  }
};
