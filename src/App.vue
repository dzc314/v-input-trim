<template>
  <div id="app">
    <el-alert
      class="info"
      title="使用v-input-trim指令输入框, 失焦后会自动清除输入内容前后的所有空格"
      type="success"
      :closable="false"
    >
    </el-alert>
    <h3 class="demo-result">
      {{
        `输入内容：【${value}】前有${beforeSpaceNum}个空格，后有${afterSpaceNum}个空格`
      }}
    </h3>
    <h4>
      <p>原生input输入框</p>
      <input v-input-trim v-model="value" />
    </h4>
    <h4>
      <p>原生textarea输入框</p>
      <textarea v-input-trim v-model="value" />
    </h4>
    <h4>
      <p>Element-ui：el-input组件输入框</p>
      <el-input v-input-trim v-model="value"></el-input>
    </h4>
    <h4>
      <p>Element-ui：el-input组件,类型为textarea输入框</p>
      <el-input v-input-trim type="textarea" v-model="value"></el-input>
    </h4>
    <h4>
      <p>Ant Design of Vue：a-input输入框</p>
      <a-input v-input-trim v-model="value"></a-input>
    </h4>
    <h4>
      <p>Ant Design of Vue：a-input, textarea输入框</p>
      <a-input v-input-trim v-model="value" type="textarea"></a-input>
    </h4>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  value = "";
  get beforeSpaceNum(): number {
    const matchResult = this.value.match(/^ +/);
    if (matchResult) {
      return matchResult[0].length;
    }
    return 0;
  }
  get afterSpaceNum(): number {
    const matchResult = this.value.match(/ +$/);
    if (matchResult) {
      return matchResult[0].length;
    }
    return 0;
  }
}
</script>

<style>
#app {
  font-family: Arial, "Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 60px auto;
  width: 60%;
  color: #333;
}
.info .el-alert__title {
  font-size: 20px;
  line-height: 1;
  font-weight: bold;
}
.demo-result {
  white-space: pre;
  margin-top: 30px;
}
</style>
