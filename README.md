# vue_demo_01
Vue2+VueRouter2+Webpack+Axios 构建项目

commit_01 
使用淘宝 npm 镜像源安装项目依赖，安装方法npm install -g cnpm –registry=https://registry.npm.taobao.org

vue-router路由配置，使用路由的步骤，在路由配置文件中引入页面模板；

在根目录下/config/index.js配置文件中设置端口port: 8080,在根目录下/build/webpack.base.conf.js文件中关闭格式检查插件eslint，注释代码即可；

使用scss文件预编译，安装sass-loader和node-sass的npm包；项目组织结构，一个单页面文件，一个样式，在根组件中引入样式文件/* <style lang="scss">@import "./style/style";</style> */

配置axios，从接口获取到数据，并且渲染到页面当中；1.main.js绑定api/index.js文件，将API方法绑定到全局 2.学习理解axios插件 3.在vue模板中调用绑定的方法 4.组件渲染完成时，执行函数

将接口代理到本地，前后端分离开发，vue-cli本地环境代理数据接口设置和解决跨域，config/index.js文件中，proxyTable: {}, 这一行，就是给我们配置代理的

编写公共工具函数，将方法独立出来，然后在所有的地方都可以使用，与接口请求函数绑定到全局方法相同，在组件中使用函数方法<time v-text="$utils.goodTime(i.create_at)"></time>
我们在 script 区域，引用一个函数是使用 this.getData 或者 this.list 这样的代码引用的，但是在 template 中，我们是不加 this 的

path: '/content/:id', 中，使用了 :id 动态路由匹配，需要从 url 中获取 id 然后根据这个 id 来进行数据的查询，<router-link :to="'/content/' + i.id">{{ i.title }}</router-link>

打包项目并发布到子目录：nodejs环境下全局安装http-server，替代apache启动http服务；在config/index.js文件中，assetsPublicPath: '/content/',设置将项目打包到子目录路径

打包项目图片等资源的处理：使用 '../static/image/lyf.jpg' 这样的路径方式来调用图片，字体图标，js 文件等都是类似的处理方法
在项目中使用 jQuery，编辑 /index.html 在 head 区域引入jQuery，去掉 eslint 报错 ‘$’ is not defined，在 env 区间里面加上 jquery: true 参数即可，一般不在vue项目中使用 jQuery

集成UEditor百度富文本编辑器(UEditor 没有 npm 安装，需要我们自己手工引入进来，下载 UEditor 源码):1.main.js 引用 UEditor 2.创建 UEditor VUE 组件，在 /src/components/ 目录下创建 ue.vue 文件，作为我们的编辑器组件文件 3.在其他页面引用该组件