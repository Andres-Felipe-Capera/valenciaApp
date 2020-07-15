<template>
    <div>
        <Slider texto="Estas en el home socio"></Slider>
        {{personaje}}
        <h1>{{url}}</h1>
    </div>
    
</template>
<script>
import Slider from './slider.vue'
export default {
    name:"home",
    components:{
        Slider,
    },
    created(){
        console.log("componente creado");
    },
    mounted(){
       this.url=this.$route.params.cualquiercosa; 
       console.log("Componente cargado al pelo");
    },
    update(){
        console.log("Componente actualizado");
    },
    destroyed(){
        console.log("componente eliminado");
    },
    data(){
        return{
            personaje:"el chavo",
            url:null,
        }
    }
}
</script>