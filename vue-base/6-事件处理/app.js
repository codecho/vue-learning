new Vue({
    el: "#app",
    data: {
        age: 23,
        x: 0,
        y: 0,
        input: ''
    },
    methods: {
        hitButton: function (msg, event) {
            alert('message:' + msg + '---event.target.innerHTML:' + event.target.innerHTML);
        },
        incAge: function (inc) {
            this.age += inc;
        },
        decAge: function (dec) {
            this.age -= dec;
        },
        showXY: function (event) {
            // console.log(event);
            //从event中获取相关属性
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        stopThis: function () {

        },
        stopShow: function (event) {
            event.stopPropagation();
        },
        stopSkip: function () {
            alert("禁止跳转");
        },
        pressEnter: function () {
            alert(this.input);
        }
    }
});