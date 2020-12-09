// Записываем переменные
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');
// Ищем кнопку для очистки поля ввода
const btnClear = document.querySelector('.j-btn-clear');

// Валидация числа в инпуте 
function validateNumber(number) {
	if (number>=100 && number<=300) {
		return number
	} else {
		return false
	}
};

//Функция при введении числа вне диапозона
function displayError() {
	resultNode.innerHTML = 'Вы ввели число вне диапозона';
};

// Функция обработки полученного URL
const useRequest = url => {
  return fetch(url)
    .then((response) => {
      console.log('response', response);
      return response.url;
    })
    .then((url) => { 
    	console.log('url', url);
    	return url; 
    })
    .catch(error => { 
    	console.log('error', error);
     });
};

// Функция обработки клика
btnNode.addEventListener('click', async () => {
	let valueWidth = document.getElementById('main_input-width').value;

	let valueHeight = document.getElementById('main_input-height').value;

	if (validateNumber(valueWidth) && validateNumber(valueHeight)) {
		// Сохранение URL
		let fetchURL = `https://picsum.photos/${valueWidth}/${valueHeight}`;
		let imgURL = await useRequest(fetchURL);
		console.log('ImgURL:', imgURL);
		let card = `<img src="${imgURL}">`;
		resultNode.innerHTML = card;


	}
	else {
		displayError();
		console.log('ERRORRRRRROROROROROROROR');
	}
});

// Вешаем обработчик на кнопку для очистки полей ввода
btnClear.addEventListener('click', function() {
  document.getElementById('main_input-width').value = '';
  document.getElementById('main_input-height').value = '';
});