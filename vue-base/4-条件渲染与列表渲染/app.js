new Vue({
    el: "#app",
    data: {
        love: true,
        code: 200,
        types: ['哈士奇', '阿拉斯加', '萨摩耶'],
        dogs: [
            {name: '二哈', age: 3},
            {name: '阿拉撕家', age: 4},
            {name: '微笑天使', age: 2}
        ]
    },

    // 由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
    // 当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
    // 当你修改数组的长度时，例如：vm.items.length = newLength
    // 为了解决第一类问题，以下两种方式都可以实现和vm.items[indexOfItem] = newValue 相同的效果，同时也将触发状态更新：
    // Vue.set  Vue.set(vm.items, indexOfItem, newValue)
    // Array.prototype.splice   vm.items.splice(indexOfItem, 1, newValue)
    // 也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名    vm.$set(vm.items, indexOfItem, newValue)
    // 为了解决第二类问题，你可以使用 splice：
    // vm.items.splice(newLength)
    methods: {
        deleteDog: function (index) {
            this.dogs.splice(index, 1);
        },
        updateDog: function (index, newDog) {
            // 改变的是数组内部结构而不是数组本身
            // this.dogs[index] = newDog;

            // Vue.set(this.dogs, index, newDog);
            this.dogs.splice(index, 1, newDog);
        }
    }
});