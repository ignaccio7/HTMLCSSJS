const imagen1 = document.getElementById('imagen1');

const cargarImagen = (entradas,observador)=>{
	//console.log(entradas);
	//console.log(observador);
	//console.log("se esta observando");
	entradas.forEach((entrada)=>{
		if (entrada.isIntersecting) {
			console.log('La imagen esta en el viewport');
			entrada.target.classList.add('visible');
		}else{
			entrada.target.classList.remove('visible');
		}
	});
};

const observador = new IntersectionObserver(cargarImagen,{
	root: null, /*hacemos referencia al viewport*/
	rootMargin: '500px 0px 100px 0px', /*podemos añadir un margen hipotetico*/
	threshold: 1.0 /*para saber que porcentaje debe tener el elemento*/
});

observador.observe(imagen1);
observador.observe(imagen2);