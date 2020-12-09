// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString1 = `

  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>`;

const xmlString2 = `  
<student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
`;

// Парсинг XML
const xmlDOM1 = parser.parseFromString(xmlString1, "text/xml");
const xmlDOM2 = parser.parseFromString(xmlString2, "text/xml");

// Получение всех DOM-нод
// Для 1 студента
const studentNode1 = xmlDOM1.querySelector("student");
const nameNode1 = xmlDOM1.querySelector("name");
const firstNameNode1 = xmlDOM1.querySelector("first");
const secondNameNode1 = xmlDOM1.querySelector("second");
const ageNode1 = xmlDOM1.querySelector("age");
const profNode1 = xmlDOM1.querySelector("prof");

// Для 2 студента
const studentNode2 = xmlDOM2.querySelector("student");
const nameNode2 = xmlDOM2.querySelector("name");
const firstNameNode2 = xmlDOM2.querySelector("first");
const secondNameNode2 = xmlDOM2.querySelector("second");
const ageNode2 = xmlDOM2.querySelector("age");
const profNode2 = xmlDOM2.querySelector("prof");

// Получение данных из атрибутов
// Для 1 студента
const langAttr1 = nameNode1.getAttribute('lang');

// Для 2 студента
const langAttr2 = nameNode2.getAttribute('lang');

// Запись данных в результирующий объект 
const result = { list: [{  
  name: nameNode1.textContent,
  age: Number(ageNode1.textContent),
  prof: profNode1.textContent,
  lang: langAttr1},
  {
  name: nameNode2.textContent,
  age: Number(ageNode2.textContent),
  prof: profNode2.textContent,
  lang: langAttr2
  },]

};
// При запуске через консоль браузера
// содержимое result показывается как Array(2),
// но при его раскрытии все нужные объекты доступны
console.log('XMl-result: ', result);



