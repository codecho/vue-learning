// 通过全局方法 Vue.use() 使用插件。它需要在你调用 new Vue() 启动应用之前完成：
Vue.use(MyPlugin)

// 使用插件的全局方法
Vue.myGlobalMethod()

const vm = new Vue({
    el: "#app",
    data: {
        input1: ''
    }
});

// 使用插件的实例方法
vm.$myMethod()