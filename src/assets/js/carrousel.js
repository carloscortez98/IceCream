// document.querySelector("#btnCategorias").onclick = function () {
// 	document.querySelector("#desplegableCategorias").classList.toggle("active")
// }
const imgs = document.querySelectorAll(".carrousel .img")
console.log(imgs)
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

} , 3000)
