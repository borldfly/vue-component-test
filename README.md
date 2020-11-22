1.Vue插件全局属性以及方法

复制代码
//引入组件
import ComponentName from url;

//定义加载方法
const install= (Vue,option) => {
   //1.常规方法
   //新增插件1 
   Vue.component('ComponentName',ComponentName);
   //新增方法
   Vue.prototype.funcName = () => {}; 
   //新增参数
   Vue.$cname = xxx;

   //2.通过混入的方式
   //新增插件2
   Vue.mixin({
        data() {
             return {
                  cname: xxx
             }
        },
        components: { ComponentName },
        methods: {
             funcName() {}
        }
   });
};

//暴露方法
export default { install }
复制代码
 

2.发布工作

(1) 新建一个文件夹，执行npm init 初始化打包文件

(2) 配置pageage.json里面的version、name

(3) 文件路径，这里是参考https://www.cnblogs.com/luozhihao/p/7414419.html的文件路径

复制代码
├── lib // 插件源码
│   ├── components // 组件目录
│   │   └── componentName.vue // 组件文件
│   └── index.js  // 插件入口文件
├── index.js // 入口文件
└── package.json  // 包管理文件
复制代码
(4) 发布步骤  特别注意：注册后要进行邮箱验证，否则会报403：Fobbidden，这里耗了很长时间！！！

复制代码
1.访问 https://www.npmjs.com/ 进行注册
2.注册完成，进入待发布的目录（记住，里面只需要package.json以及待发布文件夹）
3.进入目录后，输入npm login进行登录，然后按照注册的username、password、email输入即可
4.登录完成会提示 'Logged in as xxx on https://registry.npmjs.org/.'
  常见的报错信息
  1. --4082 未登录，需要重新登录
  2. 402 私人文件上传报错，改成公共文件上传就好了  npm publish --access=public
  3. 403：Fobbidden 进行邮箱验证
  如果一直登录不进去，可能是有缓存
  1.清空C:\Users\xxx\.npmrc文件，再次登录即可；
  2.npm cache clean --force
5.执行包的发布命令：npm publish --access=public
复制代码
(5) 版本维护：每次发布新包修改一下版本号