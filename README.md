# v-input-trim
## 说明
由于使用v-model.trim去空格会导致输入时无法在内容前后输入空格，无法满足产品要求，因此设计了该v-input-trim指令。
使用v-input-trim指令输入框, 失焦后会自动清除输入内容前后的所有空格。
可支持原生input/textarea输入框，element-ui的el-input输入组件或Ant Design of Vue的a-input输入组件。

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


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
