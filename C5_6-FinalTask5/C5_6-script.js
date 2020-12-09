// Записываем переменные
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');
// Ищем кнопку для очистки поля ввода
const btnClear = document.querySelector('.j-btn-clear');

//Функция при введении числа вне диапозона
function displayError(value) {
	resultNode.innerHTML = value + ' вне диапазона от 1 до 10';
};

// Валидация числа в инпуте 
function validateNumber(number) {
	if (number>=1 && number<=10) {
		return number
	} else {
		return false
	}
};


const useRequest = (url) => {
    return fetch(url)
   .then((response) => { 
   		return response.json(); })
   .then((url) => { 
   		console.log('URL: ', url);
   		
   		return url })
   

   .catch((error) => { 
   		console.log('error', error) 
   	});
};

// Функция для форматирования вывода результата
function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img  width = 250class="card-image" src="${item.download_url}"/>
        <p class="autor">${item.author}</p>
      </div>
    `;
    cards += cardBlock;
    console.log(cards)
    resultNode.innerHTML = cards;
    
  });
  return cards;
};
// Функция обработки клика
btnNode.addEventListener('click', async() => {
	let valuePageNumber = document.getElementById('main_input-pageNumber').value;

	let valueLimit = document.getElementById('main_input-limit').value;

	if (validateNumber(valuePageNumber) && validateNumber(valueLimit)) {
		localStorage.clear();
		let fetchURL = `https://picsum.photos/v2/list?page=${valuePageNumber}&limit=${valueLimit}`;
		console.log('PageNumber: ', valuePageNumber);
		console.log('Limit: ', valueLimit);	
		let requestResult = await useRequest(fetchURL);
		displayResult(requestResult);
		await console.log('requestResult:', requestResult);
		console.log('Display: ', displayResult(requestResult));
		
		// Записываем результат запроса в хранилище
		localStorage.setItem('MyPhotos', displayResult(requestResult));
		let MyPhotos = localStorage.getItem('MyPhotos');
		console.log('MyPhotos', MyPhotos);

	}
	else if(validateNumber(valueLimit) === false && validateNumber(valuePageNumber)) {
		displayError('Лимит');
		console.log('Limit error');

	}
	else if(validateNumber(valueLimit)  && validateNumber(valuePageNumber) === false) {
		displayError('Номер страницы');
		console.log('Page number error');
	}
	else if(validateNumber(valueLimit) === false  && validateNumber(valuePageNumber) === false) {
		displayError('Номер страницы и лимит');
		console.log('Page number  and limit error');
	}
});

// Вешаем обработчик на кнопку для очистки полей ввода
btnClear.addEventListener('click', function() {
  document.getElementById('main_input-pageNumber').value = '';
  document.getElementById('main_input-limit').value = '';
});


// Проверяем хранилище и, если есть сохраненные данные, выводим результат
let MyPhotos = localStorage.getItem('MyPhotos');
if (MyPhotos) {
  resultNode.innerHTML = MyPhotos;
};
