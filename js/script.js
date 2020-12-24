$(document).ready(function(){

	$('#flower1').click(function(){
		$('.header__bg').toggleClass('closeHeader');
		$('#flower1').toggleClass('flowerturn');
		$('#flower2').removeClass('flowerturn2');
		$('.header__bg2').addClass('shadow');
		$('.navigation').addClass('active');
		$('.main').addClass('active2');
		$('.circle').addClass('active3');
		$('#download').addClass('active4');
		$('.introducing').addClass('intOpen');
		$('body').css('overflow', 'visible');
		$('.section1__container, .section2__container, .section3__container, .footer__container').removeClass('visibilitiHidden');
		var typed = new Typed('.introducing', {
			strings: ["^8000 Hello!",
			 "My name is Dmitriy Lyubim.",
			"I'm novice frontend developer",
			"and",
			"I wanna work and progress",
			"with your team.",
			],
			smartBackspace: true,
			typeSpeed: 100,
			backpeed: 70,
			startDelay: 1,
			loop: true
		 });
	});

	$('#flower2').click(function(){
		$('.header__bg').toggleClass('closeHeader');
		$('#flower1').removeClass('flowerturn');
		$('#flower2').toggleClass('flowerturn2');
		$('.header__bg2').removeClass('shadow');
		$('.navigation').removeClass('active');
		$('.main').removeClass('active2');
		$('.circle').removeClass('active3');
		$('#download').removeClass('active4');
		$('.introducing').removeClass('intOpen');
		$('body').css('overflow', 'hidden');
		$('.section1__container, .section2__container, .section3__container, .footer__container').addClass('visibilitiHidden');
	});
	
	$('#hamburger').click(function(){
		$('#hamburger').toggleClass('rotateSticks');
		$('.menulist').toggleClass('openMenu');
	});

	$(function() {
        $('.chart').easyPieChart({
		   size: 150,
		   lineWidth: 15,
		   scaleColor: false,
		   trackColor: '#a4d5b4',
		   lineCap: 'round',
		   animate: 10000
        });
    });


		$('.popupButton').click(function(){
			$('.blur').toggleClass('activeBlur');
			$('.popup').toggleClass('activePopUp');
	});
		$('.popupButton2').click(function(){
			$('.blur').toggleClass('activeBlur');
			$('.popup2').toggleClass('activePopUp');
	});	

});


 "use strict"

document.addEventListener('DOMContentLoaded', function (){
		const form = document.getElementById('form');
		form.addEventListener('submit', formSend);

		async function formSend(e){
			e.preventDefault();

			let error = formValidate(form);
			let formData = new FormData(form);

			if (error===0){
				form.classList.add('_sending');
				// let response = await fetch('sendmail.php', {
				// 	method: 'POST',
				// 	body: formData
				// });
				// if(response.ok){
				// 	let result = await response.json();
				// 	alert(result.message);
				// 	formPreview.innerHTML = '';
				// 	form.reset();
				// 	form.classList.remove('_sending');
				// } else{
				// 	alert('Ошибка');
				// 	form.classList.remove('_sending');
				// }
			} else{
				alert('Пожалуйста, заполните обязательные поля!')
			}
		}

		function formValidate(form) {
			let error = 0;
			let formReq = document.querySelectorAll('._req');

			for(let index = 0; index < formReq.length; index++){
				const input = formReq[index];
				formRemoveError(input);

				
				if(input.classList.contains('_email')){
					if(emailTest(input)){						
						formAddError(input);
						error++;
					}
				}
				else{
					if(input.value === ''){
						formAddError(input);
						error++;
					}
				}
			}
			return error;
		}

		function formAddError(input){
			input.parentElement.classList.add('_error');
			input.classList.add('_error');
		}
		function formRemoveError(input){
			input.parentElement.classList.remove('_error');
			input.classList.remove('_error');
		}
		// for eMail
		function emailTest(input) {
			return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		}
});

