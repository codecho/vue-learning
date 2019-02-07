//实例化vue对象
var app = new Vue({
    el: '#app',
    data: {
        message: 'empty',
        count: 0,
        url: '<a href="https://cn.vuejs.org/v2/guide/">Vue.js</a>',
        imgUrl: 'https://cn.vuejs.org/images/logo.png'
    },
    methods: {
        increaseCount: function () {
            this.count++;
        }
    }

});

/**
 * MVVM:
 *  model: 模型，数据对象
 *  view: 视图，模板页面
 *  viewmodel: 视图模型(Vue实例)
 */

/**
 * el：element 需要vue管理的元素，一定要是html中的根容器元素
 * data：用于数据的存储
 * methods：用来定义方法
 *      通过this.name来获取属性值
 *      通过{{ hello("我是") }}来调用methods中定义的hello(str)方法，并传入一个参数
 * data-binding：给属性绑定相应的值
 */

