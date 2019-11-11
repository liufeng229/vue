import Vue from 'vue'
import VueRouter from 'vue-router'
import count from '../views/count/index.vue'
import shopcart from '../views/shopcart/index.vue'
import talk from '../views/talk/index.vue'
import type from '../views/type/index.vue'
import goods from '../views/goods/index.vue'
import main from "../views/main"
import index from "../views/index/index.vue"


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path:"/",redirect: "/index"
    // },
    // {
    //   path:"/index",component:index
    // },
    // {
    //   path : '/count',
    //   name : 'count',
    //   component :count
    // },
    // {
    //   path : '/shopcart',
    //   name : 'shopcart',
    //   component :shopcart
    // },
    // {
    //   path : '/talk',
    //   name : 'talk',
    //   component :talk
    // },
    // {
    //   path : '/type',
    //   name : 'type',
    //   component :type
    // },
    // {
    //   path : '/goods',
    //   name : 'googs',
    //   component :goods
    // }
    {
      path:"/",redirect: "/main/index"
    },
    {path:"/main",
      component:main,
      children:[
        {path:"index",component:index},
        {path : 'count', name : 'count', component :count},
        {path : 'shopcart', name : 'shopcart',component :shopcart},
        {path : 'talk', name : 'talk', component :talk},
        {path : 'type', component :type},
        {path : 'goods', name : 'googs', component :goods}
      ]
    }
  ]
})

