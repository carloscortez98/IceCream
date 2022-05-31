document.addEventListener("DOMContentLoaded", function() {

	document.querySelector("#buttonP").onclick = function () {
		document.querySelector("#desplegableP").classList.toggle("active")
	}

	const imgs = document.querySelectorAll(".carrousel .img")

	setInterval( ()=> {
		let indexActive;
		imgs.forEach( (img, index) => {
			if (img.classList.contains("active")) {
				indexActive = index//0
				img.classList.remove('active')
			}
		})

		if (imgs[indexActive+1] === undefined) {
			imgs[0].classList.add('active')
		} else {
			imgs[indexActive+1].classList.add('active')
		}

	} , 5000)

});
