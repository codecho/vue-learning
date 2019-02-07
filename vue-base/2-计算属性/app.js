var vm = new Vue({
    el: "#app",
    data: {
        a: 0,
        b: 0,
        age: 20,
        firstName: '',
        lastName: '',
        fullName: ''
    },
    methods: {
        // addA:function(){
        //     console.log("addA...");
        //     return this.a + this.age;
        // },
        // addB:function(){
        //     console.log("addB...");
        //     return this.b + this.age;
        // },
        // testMethod:function(){
        //     console.log("testMethos...");
        // }
    },
    // 执行时机：初始化显示、相关的属性发生变化
    computed: {
        addA: function () {
            console.log('add 1 to A');
            return this.a + this.age;
        },
        addB: function () {
            console.log('add 1 to B');
            return this.b + this.age;
        },

        // 计算属性的gettter、setter
        fullName2: {
            // 读取属性值
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            // 监视属性值变化
            set: function (val) {
                var name = val.split(' ');
                this.firstName = name[0];
                this.lastName = name[1];
            }
        }
    },

    // watch:侦听属性   观察和响应 Vue 实例上的数据变动
    watch: {
        // 监视firstName是否发生变化
        firstName: function (newVal, oldVal) {
            this.fullName = newVal + ' ' + this.lastName;
        },
        // lastName: function (newVal, oldVal) {
        //     this.fullName = this.firstName + newVal;
        // }
    }
});

// 使用命令式的 vm.$watch API
vm.$watch('lastName', function (val) {
    this.fullName = this.firstName + ' ' + val;
});

/*
    1、计算属性：computed
        在computed中定义计算属性的方法，使用{{方法名}}获取结果
    2、侦听属性：watch
        配置watch属性或使用vm.$watch()侦听属性变化
    2、计算属性的getter、setter：
        计算属性是基于它们的依赖进行缓存的，只在相关依赖发生改变时它们才会重新求值
        通过getter、setter显示和侦听属性
 */

<!-- 如果是耗时、大量搜索时就要使用computed属性 -->
<!-- methods属性中的方法每次都会重复渲染，因此效率不高 -->
<!-- 在Vue中使用的虚拟DOM，拷贝一份真实的DOM，操作的是虚拟DOM，如果虚拟DOM和真实DOM不同，才会触发相应的方法，否则计算属性不会触发相应的方法 -->
<!-- 如果是methods属性中的方法，所有的方法都会执行一次 -->