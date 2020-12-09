// Записываем переменные
// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.j-result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.j-btn-request');
// Ищем кнопку для очистки поля ввода
const btnClear = document.querySelector('.j-btn-clear');

// Функция-обертка над XMLHttpRequest, осуществляющая запрос
// url - урл, по которому будет осуществляться запрос
// callback - функция, которая вызовется при успешном выполнении
// и первым параметром получит объект-результат запроса

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};



// Функция обработки полученного результата
// apiData - объект с результатом запроса
function displayResult(apiData) {
  let cards = '';
  console.log('Cards: ', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img width = 250
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
    console.log('Cards: ', cards);
  });
    resultNode.innerHTML = cards;
}

//Функция при введении числа вне диапозона
function displayError() {
	resultNode.innerHTML = 'Вы ввели число вне диапозона';
};
  
    

// Валидация числа в инпуте 
function validateNumber(number) {
	if (number>=1 && number<=10) {
		return number
	} else {
		return false
	}
};

// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', function() {
    let value = document.getElementById('main_input').value;
    if (validateNumber(value)) {
    	useRequest(`https://picsum.photos/v2/list/?limit=${value}`, displayResult);
    } 

    else {
    	displayError();
    	console.log('Error');
    };
});

// Вешаем обработчик на кнопку для очистки полей ввода
btnClear.addEventListener('click', function() {
  document.getElementById('main_input').value = '';  
});