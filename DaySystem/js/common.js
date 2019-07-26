window.addEventListener("load", function () {
	//页面加载

	//var list = document.querySelectorAll("#nav > ul > li");
	//alert(list.length);
	//for (var i = 0; i < list.length; i++) {
	//	list[i].addEventListener("click", function () {
	//		var old = document.querySelector("#nav > ul > li.selected");
	//		if (old != null) {
	//			old.classList.remove("selected");
	//		}
	//		this.classList.add("selected");
	//	})

	document.querySelectorAll("#nav > ul > li").forEach(
		function (obj, index) {
			obj.addEventListener("click", function () {
				//添加点击事件
				var old = document.querySelector("#nav > ul > li.selected");
				if (old != null) {
					//如果样式存在则移除
					old.classList.remove("selected");
				}
				this.classList.add("selected");//添加类样式
				swiper.slideTo(index);//根据索引跳转
			});


		}

	);

	var swiper = new Swiper("#swiper", {
		on: {
			slideChangeTransitionEnd: function () {
				var index = this.activeIndex;
				var list = document.querySelectorAll("#nav > ul > li");
				list[index].click();
			}
		}
	});

	new Swiper("#section1-swiper", {
		direction: "vertical",
		scrollbar: {
			el: '.swiper-scrollbar',
		},
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: "auto",
		mousewheel: {
			sensitivity:0.8,
		}
	});
});
