import axios from 'axios';
import Global from '../global';
const app = new Vue({
    el:'#listusu"',
    name:'los_nescos',
    methods:{
        getusuarios(){
            axios.get(this.url+'listarusuario').then(res=>{
                this.usuarios=res.data.usuarios;
                console.log(this.usuarios);
            })
        }
    },
    mounted(){
        this.getusuarios();
    },
    data(){
        return{
            usuarios:null,
            url:Global.url
        }
    }
});