// 引入子路由
import Frame from '../frame/frame.vue'

// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'

// 引入子页面
import userIndex from '../page/user/index.vue'
import userInfo from '../page/user/info.vue'
import userLove from '../page/user/love.vue'

// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content/:id',
    component: content
  },
  {
    path: '/user',
    component: Frame,
    children: [
      {path: '/',component: userIndex},
      {path: 'info',component: userInfo},
      {path: 'love',component: userLove}
    ]
  }
]