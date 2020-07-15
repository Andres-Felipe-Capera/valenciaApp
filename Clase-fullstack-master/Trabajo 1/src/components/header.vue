<template>
<div>
   <header>
			<div class="menu_block">
				<div class="container clearfix">
					<div class="logo pull-left">
						<a href="inicio.html" ><span class="b1">v</span><span class="b2">a</span><span class="b3">p</span><span class="b4">p</span><span class="b5">s</span></a>
					</div>
					<div class="pull-right">
						<nav class="navmenu center">
							<ul>
								<li class="sub-menu">
									<a href="javascript:void(0);" >Home</a>
									<ul>
                                        
                                        <li class="scroll_btn"><a href="inicio.html #about" >Nosotros</a></li>
										<li class="scroll_btn"><a href="inicio.html #projects"  >Projectos</a></li>
									</ul>
                                </li>
								<li class="sub-menu">
									<a href="javascript:void(0);" >Paginas</a>
									<ul>
                                        
                                        <li><a href="listaUsuarios.html" >Lista de Usuarios</a></li>
										<li><a href="productos.html" >Registrar productos</a></li>
										<li><a href="listaProductos.html" >Lista de productos</a></li>
									</ul>
                                </li>
                                <li class="scroll_btn"><a href="login.html">Cerrar sesion</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		<div class="contenedor-form">
			
			<div class="toggle">
				<span> Crear Cuenta</span>
			</div>
			
			<div class="formulario">
				<h2>Iniciar Sesión</h2>
				<form id="validar-datos">
					<input type="text" placeholder="Usuario" required>
					<input type="password" placeholder="Contraseña" required>
					<input type="submit" value="Iniciar Sesión" onClick="location.href='Inicio.html'">
				</form>
			</div>
			
			<div class="formulario">
				<h2>Crea tu Cuenta</h2>
				<form id="nuevo-usuario">
					<input type="text" placeholder="Nombre" required>
					
					<input type="text" placeholder="Cedula" required>
					
					<input type="text" placeholder="Telefono" required>
					
					<input type="password" placeholder="Contraseña" required>
					
					<input type="submit" value="Registrarse">
				</form>
			</div>
			
		</div>
			
	</header> 
	
</div>
</template>
<script src="/../js/jquery.min.js" type="text/javascript"></script>
<script src="/../js/bootstrap.min.js" type="text/javascript"></script>
<script src="/../js/jquery.prettyPhoto.js" type="text/javascript"></script>
<script src="/../js/jquery.nicescroll.min.js" type="text/javascript"></script>
<script src="/../js/superfish.min.js" type="text/javascript"></script>
<script src="/../js/jquery.flexslider-min.js" type="text/javascript"></script>
<script src="/../js/owl.carousel.js" type="text/javascript"></script>
<script src="/../js/animate.js" type="text/javascript"></script>
<script src="/../js/jquery.BlackAndWhite.js"></script>
<script src="/../js/myscript.js" type="text/javascript"></script>
<script src="/./jquery/jquery-3.3.1.min.js"></script>
<script src="/../popper/popper.min.js"></script>
<script src="/../bootstrap/js/bootstrap.min.js"></script>  
<script src="/../https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="/../https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.2/axios.js"></script>
<script src="/../plugins/sweetalert2/sweetalert2.all.min.js"></script> 
<script src="/./main.js"></script>  
<script >
export default {
    
}
</script>
<style>
@import '/./css/estilos.css';
@import '/../plugins/sweetalert2/sweetalert2.min.css';
@import '/../https://use.fontawesome.com/releases/v5.8.1/css/all.css';
@import '/../bootstrap/css/bootstrap.min.css';
@import '/../css/style.css';
@import '/../css/owl.carousel.css';
@import '/../css/animate.css';
@import '/../css/prettyPhoto.css';
@import '/../css/flexslider.css';
@import '/../css/bootstrap.min.css';
</style>