<template>
  <div class="mui-content">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
          新消息通知
        </a>
      </li>
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
          隐私
        </a>
      </li>
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right">
          通用
        </a>
      </li>
    </ul>
    <ul class="mui-table-view" style="margin-top: 25px;">
      <li class="mui-table-view-cell">
        <a id="about" class="mui-navigate-right">
          关于课堂
        </a>
      </li>
    </ul>
    <ul class="mui-table-view" style="margin-top: 25px;">
      <li class="mui-table-view-cell">
        <a style="text-align: center;color: #FF3B30;">
          <router-link to="about">登录</router-link>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    methods:{},
    created(){}
  }
</script>
<style>

</style>
