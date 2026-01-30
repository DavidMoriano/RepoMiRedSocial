document.addEventListener('DOMContentLoaded', function () {
	/* Guardamos los elementos HTML para luego trabajar con ellos */
	const boton = document.getElementById('btn-menu');
	const fondoEnlace = document.getElementById('fondo-enlace');
	const barraLateral = document.getElementById('barra-lateral-izquierda');
	if (boton) {
		/* Cuando se haga click en el boton menu */
		boton.addEventListener('click', function (e) {
			e.preventDefault();
			/* Añadimos o quitamos la clase CSS active
			al fondo y la barra lateral */
			fondoEnlace.classList.toggle('active');
			barraLateral.classList.toggle('active');
		});
	}
	/* Lo mismo pero cuano se pulsa el fondo del menu para cerrarlo */
	if (fondoEnlace) {
		fondoEnlace.addEventListener('click', function (e) {
			e.preventDefault();
			fondoEnlace.classList.toggle('active');
			barraLateral.classList.toggle('active');
		});
	}
});