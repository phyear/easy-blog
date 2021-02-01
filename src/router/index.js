import { createRouter, createWebHistory } from 'vue-router'
import FrontIndex from '../views/FrontView/FrontIndex'
import ManageIndex from '../views/ManageView/ManageIndex'

const routes = [
 {
   path:"/",
   component: FrontIndex
 },
 {
  path:"/admin",
  component: ManageIndex,
  name:'admin',
  children:[
    {
      path:'/admin/first',
      name:'firstPage',
      component: () => import("../views/ManageView/firstPage")
    },
    {
      path:'/admin/articleManage',
      name:'articleManage',
      component: () => import("../views/ManageView/article/ArticleMain")
    },
    {
      path:'/admin/articleEditor',
      name:'articleEditor',
      component: () => import("../views/ManageView/article/ArticleEdite")
    }
  ]
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
