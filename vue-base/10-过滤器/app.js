// 在创建 Vue 实例之前全局定义过滤器
Vue.filter('globalDateFormat', function (date, format) {
    return moment(date).format(format || 'YYYY-MM-DD HH:mm:ss');
})

new Vue({
    el: "#app",
    data: {
        date: new Date()
    },
    // 在一个组件的选项中定义本地的过滤器
    filters: {
        dateFormat: function (date, format = 'YYYY-MM-DD HH:mm:ss') {
            return moment(date).format(format);
        }
    }
});