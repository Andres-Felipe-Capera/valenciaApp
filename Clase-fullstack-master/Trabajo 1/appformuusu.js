import axios from 'axios';
import Global from '../global';
import Usuario from './models/Usuario';
const app = new Vue({
    el:'#listproduc"',
    name:'formulario',
    methods:{
        save(){
            axios.post(this.url+'guardarusuario',this.usuario).then(res=>{
                this.$router.push('/usuarios');
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    mounted(){
        this.save();
    },
    data(){
        return{
            url:Global.url,
            usuario:new Usuario('','','','',''),
        }
    }
});