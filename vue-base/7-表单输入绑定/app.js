new Vue({
    el: "#app",
    data: {
        name: '',
        gender: '男',
        major: [],
        maritalStatus: '',
        hobby: [],
        // 使用v-for动态渲染select选项
        professionOptions: [
            {text: '上班族', value: 'worker'},
            {text: '无业', value: 'unemployed'},
            {text: '学生', value: 'student'}
        ],
        profession: '',
        selfAppraisal: ''
    },
    methods: {}
});