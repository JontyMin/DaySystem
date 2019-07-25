window.addEventListener("load", function () {
	//页面加载
	var list = document.querySelectorAll("#nav > ul > li");
	//alert(list.length);
	for (var i = 0; i < list.length; i++) {
		list[i].addEventListener("click", function () {
			var old = document.querySelector("#nav > ul > li.selected");
			if (old != null) {
				old.classList.remove("selected");
			}
			this.classList.add("selected");
		})
	}

	new Swiper('#swiper', {
		pagination: {
			el:'.container-pagination'
		}
	});
	new Swiper('#section1', {
		direction: "vertical",
		slidesPerView: "auto",
		freeMode: true,
		scrollbar: {
			el: '.section1-scrollbar',
		},

	});
});
