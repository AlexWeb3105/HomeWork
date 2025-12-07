//=================БУРГЕР==================================
(function () {
	document.addEventListener('click', burgerInit);

	function burgerInit(e) {

		const burgerIcon = e.target.closest('.burger-top');
		const burgerNavlink = e.target.closest('.nav__link');

		if (document.documentElement.clientWidth > 900) return;

		if (!burgerIcon && !burgerNavlink) return;

		if (!document.body.classList.contains('body--opened-menu')) {
			document.body.classList.add('body--opened-menu')
		} else { document.body.classList.remove('body--opened-menu') }
	}
})();
//=================МОДАЛКА, сделал сам, просто скопировал из ДЗ урока по JS и передалал под данный проект=========================== 
(function () {
	const openModal = document.querySelector('.gift-btn__icon'); 						//кнопка открытия модалки
	const subModal = document.querySelector('.pup-ap');                // сама обертка модалки
	const closeButton = document.querySelector('.btn-close');            // крестик для закрытия окна
	const bodyClass = document.querySelector('.body')                    // сам сайт боди, что бы убать скролл, когда выйдет модалка


	//ОТКРЫТЬ МОДАЛКУ через кнопку 
	openModal.addEventListener('click', () => {
		subModal.classList.add('pup-ap__closed');
		bodyClass.classList.add('pup-ap__closed')
	});


	//ЗАКРЫТИЕ МОДАЛКИ через крестик.

	closeButton.addEventListener('click', () => {
		subModal.classList.remove('pup-ap__closed');
		bodyClass.classList.remove('pup-ap__closed')
	});
	//ЗАКРЫТИЕ МОДАЛКИ через подложку.

	subModal.addEventListener('click', (event) => {
		if (event.target && event.target.classList.contains('pup-ap__overlay')) {
			subModal.classList.remove('pup-ap__closed');
			bodyClass.classList.remove('pup-ap__closed');
		}
	});

})();

