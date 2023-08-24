
$(document).ready(function() {
	$('#autoWidth').lightSlider({
		autoWidth:true,
		loop:true,
		onSliderLoad: function() {
			$('#autoWidth').removeClass('cS-hidden');
		}
	});
});


document.addEventListener("DOMContentLoaded", () => {
	let animItems = document.querySelectorAll('.anim-items');
	console.log(animItems);
	if (animItems.length > 0) {
		window.addEventListener("scroll", animOnScroll);

		function animOnScroll() {
			for (let i = 0; i < animItems.length; i++) {
				const animItem = animItems[i];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;

				if (animItemHeight > window.innerHeight ) {
					animItemPoint =  window.innerHeight - window.innerHeight / animStart;
				}

				if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('active');
				} else {
					animItem.classList.remove('active');
				}


			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft =window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop =window.pageYOffset || document.documentElement.scrollTop;
			return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
		}
	}

	animOnScroll();

	let btnMore = document.querySelectorAll('.btn__more');


	btnMore.forEach(item => item.addEventListener('click', (e) => {
		let target = e.target;
		let parentTarget = target.closest('.slider__footer');
		let boxPrice = parentTarget.nextElementSibling;
		boxPrice.style.display = 'block';
	}));

	let closeBtn = document.querySelectorAll('.close__btn');


	//для закрытия слайдера


	closeBtn.forEach(item => item.addEventListener('click', (e) => {
		let target = e.target;
		let boxPrice = target.closest('.box__price');

		boxPrice.style.display = 'none';
	}));

	//для выбора языка и смены преподавателя в зависимости от языка

	let languages = document.querySelector('.languages'),
		languageBtn = document.querySelectorAll('.language__item'),
		groupTeacher = document.querySelectorAll('.speakers_group');

	function hideTabContent(a) {
		for (let i = a; i < groupTeacher.length; i++) {
			groupTeacher[i].style.display = 'none';
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (groupTeacher[b].style.display == 'none') {
			groupTeacher[b].style.display = 'flex'
		}
	}

	languages.addEventListener('click', (e)=> {
		let target = e.target;
		if (target && target.classList.contains('language__item')) {
			languageBtn.forEach(item=>item.classList.remove('language_active'));
			target.classList.add('language_active');

			for (let i = 0; i < languageBtn.length; i++) {
				if (target == languageBtn[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}

		}

	});

	//для развертывания описания
	let arrow = document.querySelectorAll('.fa-chevron-down');
		arrow.forEach((item) => item.addEventListener('click', (e) => {
			let target = e.target;
			target.nextElementSibling.classList.toggle('description_hide');
			target.style.display = "none";

			let arrowUp = document.querySelectorAll('.fa-chevron-up');
			arrowUp.forEach(item=>item.onclick = (e) => {
				let target = e.target;
				let targetParent = target.parentElement;
				targetParent.previousElementSibling.style.display = "block";
				targetParent.classList.toggle('description_hide');
			});
		}));


});
