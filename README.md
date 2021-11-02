# v-input-trim
## 说明
由于element-ui的el-input使用v-model.trim去空格会导致输入时无法在内容前后输入空格，无法满足产品要求，因此设计了该v-input-trim指令。
使用v-model配合v-input-trim指令输入框, 失焦后会自动清除输入内容前后的所有空格。
也可支持原生input/textarea输入框，当然原生输入框建议可以直接用带trim修饰符指令v-model.trim进行去空格处理

## 通过NPM安装
```
npm i v-input-trim -S
```

### 引入组件
```
<!-- main.js 全局引用 -->
import Vue from 'vue';
import inputTrim from "v-input-trim";
Vue.use(inputTrim);
```

### 使用
```
<el-input v-input-trim v-model="value"></el-input>

更多使用方式可查看src/App.vue
```


### 相关问题
查看 [关于el-input使用v-model.trim的问题](https://github.com/ElemeFE/element/issues/19165).
