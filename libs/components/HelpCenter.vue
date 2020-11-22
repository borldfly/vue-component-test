<template>
  <div class="helpCenter">
    {{componentTxt}}
  </div>
</template>
<script>
export default {
  name: 'HelpCenter',
  props: {
    componentTxt: {
      type: String,
      required: true,
      default:() => '我是测试插件'
    }
  }
}
</script>
<style scoped>
  .helpCenter {
    color: darkblue;
  }
</style>