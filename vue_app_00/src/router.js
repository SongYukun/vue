import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//src/router.js配置组件访问路由
//1.引入自定义组件
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import NewsContainer from "./components/news/NewsContainer.vue"
import StudyContainer from "./components/tabbar/StudyContainer.vue"
import ShopContainer from "./components/tabbar/ShopContainer.vue"
import AccountContainer from "./components/tabbar/AccountContainer.vue"
import NewsDetailContainer from "./components/news/NewsDetailContainer.vue"
import GoodList from "./components/goods/GoodList.vue"
import Goodsinfo from "./components/goods/Goodsinfo.vue"
import DetailList from "./components/details/DetailList.vue"
import List from "./components/details/List.vue"
import AboutCount from "./components/about/AboutCount.vue"
Vue.use(Router)


//2.指定该组件的访问路径
export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/home',component:HomeContainer},
    {path:'/home/newslist',component:NewsContainer},
    {path:'/home/goodslist',component:GoodList},
    {path:'/home/goodsinfo/:id',component:Goodsinfo,name:"goodsinfo"},
    {path:'/study',component:StudyContainer},
    {path:'/shop',component:ShopContainer},
    {path:'/account',component:AccountContainer},
    {path:'/newsdetail/:id',component:NewsDetailContainer},
    {path:'/home/details/List',component:List},
    {path:'/home/details/DetailList',component:DetailList},
    {path:'/about',component:AboutCount}
  ],linkActiveClass:"mui-active" //覆盖默认路由高亮类
}) 
