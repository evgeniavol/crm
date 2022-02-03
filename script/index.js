import {formControl,  modalControl, totalPrice} from './modules/controls.js';
import {renderGoods, deleteGoods} from './modules/renderGoods.js';
import { getTotalPrice, crmTotalPrice} from './modules/getTotalPrice.js';
import {tableBody} from './modules/createElems.js';
let goods = [{
    "id": 1,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки.",
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
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO.",
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
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP.",
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



{
  const overlayModal = document.querySelector('.overlay__modal');
  const btnAddGoods = document.querySelector('.panel__add-goods');
  let discountProductModal = document.getElementById('discount');
  let countProductModal = document.getElementById('count');
  let priceProductModal = document.getElementById('price');
  const modalForm = document.querySelector('.modal__form');


  renderGoods(goods);
  modalControl(btnAddGoods);
  totalPrice(countProductModal, discountProductModal, priceProductModal);
  formControl(modalForm, tableBody);
  getTotalPrice(goods);

}