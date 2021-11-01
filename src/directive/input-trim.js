/*
 * 功能：el-input 组件输入框失焦后去掉前后空格
 * 用法
 * <el-input v-input-trim></el-input>
 */
const inputTrim = {
  bind: (el, binding, vnode) => {
    // console.log(el.tagName);
    let inputEl
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      inputEl = el
    } else {
      inputEl = el.getElementsByTagName('input')[0] || el.getElementsByTagName('textarea')[0]
    }
    if (!inputEl) {
      return
    }

    function dispatch(el, type) {
      var e = document.createEvent("HTMLEvents");
      e.initEvent(type, true, false);
      el.dispatchEvent(e);
    }
    inputEl.addEventListener('blur', (e) => {
      inputEl.value = inputEl.value.trim()
      dispatch(inputEl, "input");
    })
  }
}

export default (Vue) => {
  Vue.directive('input-trim', inputTrim)
}