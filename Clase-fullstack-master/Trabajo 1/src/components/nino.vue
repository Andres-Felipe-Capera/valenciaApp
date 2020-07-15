<template>
<div class="center">
    <Slider texto="Por aqui estan los estudiantes"></Slider>
    <h2>La lista</h2>
    <article v-for="estudiante in personas" :key="estudiante.id">
        <div class="image-wrap">
            <img :src="'http://localhost:3900/obtener-imagen/'+estudiante.image" :alt="estudiante.nombre"/><br/>
            {{estudiante.nombre+" "+estudiante.cedula}}
        </div>
    </article>
</div>
</template>

<script>
import Slider from './slider.vue'
import axios from 'axios';
import Global from '../global'
export default {
    name:'mi_nino',
    components:{
        Slider,
    },
    methods:{
        getEstudiantes(){
            axios.get(this.url+'listar').then(res=>{
                this.personas=res.data.personas;
                console.log(this.personas);
            })
        }
    },
    mounted(){
        this.getEstudiantes();
    },
    
    data(){
        return{
            personas:null,
            url:Global.url
        }
    }
}

</script>
<style>
@import '../assets/css/styles.css';

</style>
