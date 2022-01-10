'use strict';

const goods = [{
    "id": 1,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 2,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 3,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 4,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
];

const modalTitle = document.querySelector('.modal__title');
const modalForm = document.querySelector('.modal__form');
const modalCheckbox = document.querySelector('.modal__checkbox');
const modalInputDiscount = document.querySelector('.modal__input_discount');
const overlay = document.querySelector('.overlay');

const tableBody = document.querySelector('.table__body');

/*

2. Создайте функцию createRow, которая будет получать объект и на основе объекта формировать элемент  

Такого вида 
3. Создайте функцию renderGoods, принимает один параметр массив с объектами

Функция renderGoods перебирает массив и вставляет строки , созданные на основе createRow, в таблицу



*/

const removeActiveOverlay = overlay.classList.remove('active');
const createRow = ([{
  id: id,
  titleName: title,
  priceName: price,
  descriptionName: description,
  categoryNAme: category,
  countName: count,
  unitsName: units,
}]) => {

  const tr = document.createElement('tr');

  const tdNumeric = document.createElement('td');
  tdNumeric.textContent = id;


  const tdId = document.createElement('td');
  tdId.classList.add('table__cell table__cell_left table__cell_name');
  tdId.setAttribute('data-id', id);
  const span = document.createElement('span');
  span.classList.add('table__cell-id');
  span.textContent = `id: id`
  tdId.append(span);


  const tdName = document.createElement('td');
  tdName.classList.add('table__cell table__cell_left');
  tdName.textContent = titleName;

  const tdNameMeasurement = document.createElement('td');
  tdNameMeasurement.classList.add('table__cell');
  tdNameMeasurement.textContent = unitsName;

  const tdCount = document.createElement('td');
  tdCount.classList.add('table__cell');
  tdCount.textContent = countName;

  const tdPrice = document.createElement('td');
  tdPrice.classList.add('table__cell');
  tdPrice.textContent = priceName;

  const tdTotalPrice = document.createElement('td');
  tdTotalPrice.classList.add('table__cell');
  tdTotalPrice.textContent = `${priceName*countName}`

  const tdBtnWrap = document.createElement('td');
  tdBtnWrap.classList.add('table__cell table__cell_btn-wrapper');

  const buttonPic = document.createElement('button');
  buttonPic.classList.add('table__btn table__btn_pic');

  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('table__btn table__btn_edit');

  const buttonDel = document.createElement('button');
  buttonDel.classList.add('table__btn table__btn_del');

  tdBtnWrap.append(buttonPic, buttonEdit, buttonDel);

  tr.append(tdNumeric, tdId, tdName, tdNameMeasurement, tdCount, tdPrice, tdTotalPrice, tdBtnWrap, buttonPic, buttonEdit, buttonDel);
return console.log(tr);
}

const renderGoods = (goods) => {
  goods.map(item => {
    return createRow(item);
  });
}