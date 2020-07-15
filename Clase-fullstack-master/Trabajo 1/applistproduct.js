import axios from 'axios';
import Global from '../global';
const app = new Vue({
    el:'#listproduc"',
    name:'los_products',
    methods:{
        getaccesorios(){
            axios.get(this.url+'listaraccesorios').then(res=>{
                this.accesorios=res.data.accesorios;
                console.log(this.accesorios);
            })
        }
    },
    mounted(){
        this.getaccesorios();
    },
    data(){
        return{
            accesorios:null,
            url:Global.url
        }
    }
});