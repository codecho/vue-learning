// 自定义插件
(function () {
    // 要暴露的插件对象
    const MyPlugin = {}
    // Vue.js 的插件应该有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
            console.log('Vue对象的全局方法myGlobalMethod()......')
        }

        // 2. 添加全局资源
        Vue.directive('my-directive', function (el, binding) {
            // 将该标签的value转化为大写
            el.textContent = binding.value.toUpperCase()
        })

        // // 3. 注入组件
        // Vue.mixin({
        //     created: function () {
        //         // 逻辑...
        //     }
        //     ...
        // })

        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log('Vue实例的实例方法$myMethod()......')
        }
    }
    // 暴露插件
    window.MyPlugin = MyPlugin
})()