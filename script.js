window.onload = function(){
    new Vue({
        el:"#app",
        data:{
            year: 2021,
            text: '하늘새미멋지다',
            message:'안녕하세요'
        },
        methods:{
            submited(){
                alert('submited');
            },
            // reversedMessage : function(){
            //     return this.message.split('').reverse().join('');
            // }

            changeMessage(){
                this.message = '양영디지털고등학교';
            }
        },
        computed: {
            reversedMessage(){
                return this.message.split('').reverse().join('');
            }
        },
        watch : {
            message(){
                this.update = "Yes"
            }
        }

    });
}