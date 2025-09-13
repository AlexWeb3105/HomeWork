//Когда пользователь наживает на кнопку появляется окно
// Клик - на крестик или ПОДЛОЖКУ должно закрыться

const openModal = document.querySelector('.button-open'); 						//кнопка открытия модалки
const subModal = document.querySelector('.modal');                   // подложка для окна модалки
const closeButton = document.querySelector('.modal__close-button'); // крестик для закрытия окна
const modalWindow = document.querySelector('modal__window') 			 // окно модалки

//ОТКРЫТЬ МОДАЛКУ через кнопку 
openModal.addEventListener('click', () => {
	subModal.classList.add('modal__closed')
});

//ЗАКРЫТИЕ МОДАЛКИ через крестик.
closeButton.addEventListener('click', () => {
	subModal.classList.remove('modal__closed');
});

//ЗАКРЫТИЕ МОДАЛКИ через подложку.
subModal.addEventListener('click', (event) => {
	if (event.target && event.target.classList.contains('modal')) {
		subModal.classList.remove('modal__closed');
	}
}
);

//пытался сделать самостоятельно через эту логику. Не получилось. Почему?
//window.addEventListener('click', (event) => {
//	if (event.target == 'subModal') {
//		subModal.classList.remove('modal__closed')
//	}
//}
//)

