/******* MENU ******/
((d)=>{
	const $btnMenu = d.querySelector(".menu-btn");
	const $menu = d.querySelector(".menu");

	$btnMenu.addEventListener("click",(e)=>{
		$btnMenu.firstElementChild.classList.toggle("none");
		$btnMenu.lastElementChild.classList.toggle("none");
		$menu.classList.toggle("is-active");
	});

	d.addEventListener("click",(e)=>{
		/*********ESTO PARA QUE CUANDO DEMOS CLICK EN UN ENLACE
		SE CIERRE EL MENU*******/
		/* 
		si el selector que activa el evento click 
		NO es un enlace dentro del menu
		*/
		if (!e.target.matches(".menu a")) return false;

		/*si es que si activa*/
		$btnMenu.firstElementChild.classList.remove("none");
		$btnMenu.lastElementChild.classList.add("none");
		$menu.classList.remove("is-active");
		/*********ESTO PARA QUE CUANDO DEMOS CLICK EN UN ENLACE
		SE CIERRE EL MENU*******/
		

	});


})(document);


/* ********** ContactForm ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/igna260298@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);