window.onload = function(){
    new Vue({
        el:'#app',
        data : {
            isRed:false,
            isBold: false,
            blue:'blue',
            size:'30px'
    
        },
        methods:{
            update(){
                this.isRed = !this.isRed;
                this.isBold = !this.isBold;
            }
        }
    })
}