new Vue({
    el: "#app",
    data: {
        count: 100
    },
    beforeCreate: function () {
        console.log('beforeCreate......');
    },
    created: function () {
        console.log('created......');
    },
    beforeMount: function () {
        console.log('beforeMount......');
    },
    mounted: function () {
        console.log('mounted......');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate......');
    },
    update: function () {
        console.log('update......');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy');
    },
    destroyed: function () {
        console.log('destroyed......');
    },
    methods: {
        destroyVM: function () {
            console.log('调用vm.$destroy()');
            this.$destroy();
        }
    }
});