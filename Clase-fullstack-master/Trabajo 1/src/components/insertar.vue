<template>
   <div class="contenedor-form">
        <div class="formulario">
            <h2>Crea tu Cuenta</h2>
            <form id="nuevo-usuario">
                <input type="text" placeholder="Usuario" required>
                
                <input type="password" placeholder="Contraseña" required>
                
                <input type="email" placeholder="Correo-Electronico" required>
                
                <input type="text" placeholder="Teléfono" required>
                
                <input type="submit" value="Registrarse">
            </form>
        </div>
        
    </div>
    
</template>

<script>
//import axios from 'axios';
import Global from '../global';
import Estudiante from './models/Estudiante';

export default {
    name:'insertar',
   
    data(){
       return{
           url:Global.url,
           estudiante:new Estudiante('','','','',''), 
        }
    }
}
</script>
<style>

</style>