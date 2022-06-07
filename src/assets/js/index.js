document.addEventListener("DOMContentLoaded", function() {

	window.addEventListener("scroll", reveal);
	function reveal() {
		var reveals = document.querySelectorAll(".reveal");

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var revealTop = reveals[i].getBoundingClientRect().top;
			var revealPoint = 100;

			if (revealTop < windowHeight - revealPoint) {
				reveals[i].classList.add("active");
			}
			else {
				reveals[i].classList.remove("active");
			}
		}
	}

	document.querySelector("#buttonP").onclick = function () {
		document.querySelector("#desplegableP").classList.toggle("active")
	}

	document.querySelector("#menuButton").onclick = function () {
		document.querySelector("#showMenu").classList.toggle("open")
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
