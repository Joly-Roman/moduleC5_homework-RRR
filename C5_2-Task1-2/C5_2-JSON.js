// JSON, который мы будем парсить
const jsonString = ` 
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;

// Получение данных 
const data = JSON.parse(jsonString);
const list = data.list;
const person1 = list[0];
const person2 = list[1];

// Запись данных в результирующий объект 
const jsonResult = { list: [
	{
		name: person1.name,
		age: Number(person1.age),
		prof: person1.prof
	},
		{
		name: person2.name,
		age: Number(person2.age),
		prof: person2.prof
	},
	] };
	
// При запуске через консоль браузера
// содержимое result показывается как Array(2),
// но при его раскрытии все нужные объекты доступны
console.log('JSON-result', jsonResult);