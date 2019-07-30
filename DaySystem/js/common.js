window.addEventListener("load", function () {
	//页面加载

	//导航栏
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

	//页面切换
	var swiper = new Swiper("#swiper", {
		on: {
			slideChangeTransitionEnd: function () {
				var index = this.activeIndex;
				var list = document.querySelectorAll("#nav > ul > li");
				list[index].click();
			}
		}
	});

	//滚动
	new Swiper("#section1-swiper", {
		direction: "vertical",
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: "auto",
		mousewheel: {
			sensitivity:0.8,
		},
		hide: false,
	});
	new Swiper("#section2-swiper", {
		direction: "vertical",
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: "auto",
		mousewheel: {
			sensitivity: 0.8,
		},
		hide: true,
	});
	new Swiper("#section3-swiper", {
		direction: "vertical",
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: "auto",
		mousewheel: {
			sensitivity: 0.8,
		},
		hide: true,
	});
	new Swiper("#section4-swiper", {
		direction: "vertical",
		freeMode: true,
		freeModeMomentum: true,
		slidesPerView: "auto",
		mousewheel: {
			sensitivity: 0.8,
		},
		 hide: true,
	});

	//报表
	
	this.window.onload =function Dawr() {
		var data = [

			{ name: '吃饭', value: 40.0, color: '#4572a7' },

			{ name: '房租', value: 37.1, color: '#aa4643' },

			{ name: '交通', value: 13.8, color: '#89a54e' },

			{ name: '水电', value: 1.6, color: '#80699b' },

			{ name: '网购', value: 1.4, color: '#92a8cd' },

			{ name: '娱乐', value: 1.2, color: '#db843d' },

			{ name: '其他', value: 4.9, color: '#a47d7c' }

		];





		var chart = new iChart.Donut2D({

			render: 'canvasDiv',

			data: data,

			title: {

				text: '记账支出',

				color: '#3e576f'

			},

			footnote: {


				color: '#486c8f',

				fontsize: 11,

				padding: '0 38'

			},

			center: {

				text: '记账/收入',

				color: '#3e576f',

				shadow: true,

				shadow_blur: 2,

				shadow_color: '#557797',

				shadow_offsetx: 0,

				shadow_offsety: 0,

				fontsize: 20

			},

			sub_option: {

				label: {

					background_color: null,

					sign: false,//设置禁用label的小图标

					padding: '0 4',

					border: {

						width: 0,

						enable: false,

						color: '#666666'

					},

					fontsize: 11,

					fontweight: 600,

					color: '#4572a7'

				},

				border: {

					width: 0,

					color: '#ffffff'

				}

			},

			shadow: true,

			animation: true,//开启过渡动画

			shadow_blur: 6,

			shadow_color: '#aaaaaa',

			shadow_offsetx: 0,

			shadow_offsety: 0,

			background_color: '#fefefe',

			offset_angle: -120,//逆时针偏移120度

			showpercent: true,

			decimalsnum: 2,

			width: 415,

			height: 337,

			radius: 120,

			border: 0,

		});



		chart.draw();



	}


	function Dawrs() {
		var data = [

			{ name: '吃饭', value: 40.0, color: '#4572a7' },

			{ name: '房租', value: 37.1, color: '#aa4643' },

			{ name: '交通', value: 13.8, color: '#89a54e' },

			{ name: '水电', value: 1.6, color: '#80699b' },

			{ name: '网购', value: 1.4, color: '#92a8cd' },

			{ name: '娱乐', value: 1.2, color: '#db843d' },

			{ name: '其他', value: 4.9, color: '#a47d7c' }

		];





		var chart = new iChart.Donut2D({

			render: 'canvasDiv',

			data: data,

			title: {

				text: '记账收入',

				color: '#3e576f'

			},

			footnote: {


				color: '#486c8f',

				fontsize: 11,

				padding: '0 38'

			},

			center: {

				text: '收入/支出',

				color: '#3e576f',

				shadow: true,

				shadow_blur: 2,

				shadow_color: '#557797',

				shadow_offsetx: 0,

				shadow_offsety: 0,

				fontsize: 20

			},

			sub_option: {

				label: {

					background_color: null,

					sign: false,//设置禁用label的小图标

					padding: '0 4',

					border: {

						enable: false,

						color: '#666666'

					},

					fontsize: 11,

					fontweight: 600,

					color: '#4572a7'

				},

				border: {

					width: 0,

					color: '#ffffff'

				}

			},

			shadow: true,

			animation: true,//开启过渡动画

			shadow_blur: 6,

			shadow_color: '#aaaaaa',

			shadow_offsetx: 0,

			shadow_offsety: 0,

			background_color: '#fefefe',

			offset_angle: -120,//逆时针偏移120度

			showpercent: true,

			decimalsnum: 2,

			width: 415,

			height: 337,

			radius: 120

		});



		chart.draw();



	}
	/* -----------------------------------------收入----------------------------------*/

	[].slice.call(document.querySelectorAll("#section3 header nav a")).forEach(function (el) {
		//el就是被遍历的每一个DOM元素
		el.addEventListener("click", function () {
			document.querySelector("#section3 header nav a.selected").classList.remove("selected");
			el.classList.add("selected");
			Dawrs();
		})

	});



	/**--------------年份--- -------------------*/
	var months = ['2016年06月', '2016年07月', '2016年08月', '2016年09月', '2016年10月', '2016年11月', '2016年12月', '2017年01月', '2017年02月'];
	var monthIndex = 4;/*默认选中下标为2的*/
	//上一个月点击事件
	document.getElementById("btn_prev_month").addEventListener("click", function () {
		monthIndex--;
		changeMonth();
	});
	//下一个月点击事件
	document.getElementById("btn_next_month").addEventListener("click", function () {
		monthIndex++;
		changeMonth();
	});
	//改变选中日期时调用的方法
	function changeMonth() {
		//判断点击左边
		if (monthIndex < 0) monthIndex = 0;
		//判断点击右边
		if (monthIndex >= months.length) monthIndex = months.length - 1;
		//获取中间那个lable标签显示:对应数组中的日期
		document.getElementById("lbl_month").innerText = months[monthIndex];
		Dawr();
	}
});
