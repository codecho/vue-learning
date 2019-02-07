new Vue({
    el: "#app",
    data: {
        name: '',
        order: 0,
        heroes: [
            {name: 'Yasuo', age: 23, nationality: '艾欧尼亚'},
            {name: "Jayce", age: 34, nationality: '皮尔特沃夫'},
            {name: "Riven", age: 28, nationality: '诺克萨斯'},
            {name: "Leblanc", age: 26, nationality: '诺克萨斯'},
            {name: "Akali", age: 24, nationality: '艾欧尼亚'},
            {name: "Azir", age: 999, nationality: '恕瑞玛'},
            {name: "Galio", age: 26, nationality: '德玛西亚'}
        ]
    },
    computed: {
        // 第一次显示时调用、相关的属性值发生变化时调用
        sortedHeroes: function () {
            // 获取数据
            const {name, order, heroes} = this;
            let hhh;
            // hhh = heroes.filter(p => p.name.indexOf(name) > -1);
            hhh = heroes.filter(function (hero) {
                return hero.name.indexOf(name) > -1;
            });

            // -1代表降序，0代表原序，1代表升序
            if (order !== 0) {
                hhh.sort(function (a, b) {
                    if (order === 1) {
                        return a.age - b.age;
                    } else {
                        return b.age - a.age;
                    }
                });
            }
            return hhh;
        }
    }
});