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
const overlay = document.querySelector('.overlay');
const overlayModal = document.querySelector('.overlay__modal');
const tableBody = document.querySelector('.table__body');
const removeActiveOverlay = overlay.classList.remove('active');
const btnAddGoods = document.querySelector('.panel__add-goods');
const modalClose = document.querySelector('.modal__close');
const table = document.querySelector('.goods__table table');

const nameProductModal = document.getElementById('name');
const categoryProductModal = document.getElementById('category');
const descriptionProductModal = document.getElementById('description');
const unitsProductModal = document.getElementById('units');
let modalInputDiscount = document.querySelector('.modal__input_discount');
let discountProductModal = document.getElementById('discount');
let countProductModal = document.getElementById('count');
let priceProductModal = document.getElementById('price');
let modalId = document.querySelector('.vendor-code__id');
let modalTotalPrice = document.querySelector('.modal__total-price');
const modalBtnSumbit = document.querySelector('.modal__submit');

let crmTotalPrice = document.querySelector(".crm__total-price");


const createRow = ({
  id: id,
  title: title,
  price: price,
  description: description,
  category: category,
  count: count,
  units: units,
}) => {


  const tr = document.createElement('tr');
  const tdNumeric = document.createElement('td');
  tdNumeric.textContent = id;


  const tdId = document.createElement('td');
  tdId.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
  tdId.setAttribute('data-id', id);

  const span = document.createElement('span');
  span.classList.add('table__cell-id');
  span.textContent = `id: ${id}`
  tdId.textContent = title;
  tdId.append(span);


  const tdName = document.createElement('td');
  tdName.classList.add('table__cell', 'table__cell_left');
  tdName.textContent = category;

  const tdNameMeasurement = document.createElement('td');
  tdNameMeasurement.classList.add('table__cell');
  tdNameMeasurement.textContent = units;

  const tdCount = document.createElement('td');
  tdCount.classList.add('table__cell');
  tdCount.textContent = count;

  const tdPrice = document.createElement('td');
  tdPrice.classList.add('table__cell');
  tdPrice.textContent = price;

  const tdTotalPrice = document.createElement('td');
  tdTotalPrice.classList.add('table__cell');
  tdTotalPrice.textContent = `${price*count}`

  const tdBtnWrap = document.createElement('td');
  tdBtnWrap.classList.add('table__cell', 'table__cell_btn-wrapper');

  const buttonPic = document.createElement('button');
  buttonPic.classList.add('table__btn', 'table__btn_pic');

  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('table__btn', 'table__btn_edit');

  const buttonDel = document.createElement('button');
  buttonDel.classList.add('table__btn', 'table__btn_del');

  buttonDel.addEventListener('click', e => {
    const target = e.target;
    goods.splice(id - 1, 1);
    if (target.closest('.table__btn_del')) {
      const markTr = target.closest('tr');
      markTr.remove();
    }
  })

  tr.append(tdNumeric, tdId, tdName, tdNameMeasurement, tdCount, tdPrice, tdTotalPrice, tdBtnWrap, buttonPic, buttonEdit, buttonDel);
  tdBtnWrap.append(buttonPic, buttonEdit, buttonDel);


tableBody.append(tr);
return tableBody, tr;
}


const renderGoods = (goods) => {
  goods.map(item => {
    return createRow(item);
  });
}

const modalControl = (btnAddGoods) => {

  const openModal = () => {
    overlay.classList.add('active');
    const numGeneratorRandomId = generatorRandomId();
    modalId.textContent = numGeneratorRandomId;
  };
  const closeModal = () => {
    overlay.classList.remove('active');
  };

  btnAddGoods.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);

  overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay || target.classList.contains('active')) {
      closeModal();
    }
  });
  return {
    closeModal
  };

};



modalCheckbox.addEventListener("click", () => {
  if (
    modalCheckbox.checked && modalInputDiscount.disabled === true) {
    modalInputDiscount.disabled = false;
  } else {
    modalInputDiscount.disabled = true;
    modalInputDiscount.value = '';
  }
});



const generatorRandomId = () => {
  const randomId = Math.round((Math.random() * 10) + 1);
  return randomId;
};

const totalPrice = (countProductModal, modalInputDiscount, priceProductModal) => {

  const calculationTotalPrices = () => {
    let modalInputDiscount = document.querySelector('.modal__input_discount');
    let countProductModal = document.getElementById('count');
    let priceProductModal = document.getElementById('price');

    let disc = parseFloat(modalInputDiscount.value) / 100;
    let total = countProductModal.value * priceProductModal.value;
    let totalSumDisc = total * disc;
    let totalWithDisc = Math.round(total - totalSumDisc);
    modalTotalPrice.innerHTML = `$ ${totalWithDisc}`;
  };

  countProductModal.addEventListener('blur', calculationTotalPrices);
  modalInputDiscount.addEventListener('blur', calculationTotalPrices);
  priceProductModal.addEventListener('blur', calculationTotalPrices);
};

const addGoodstData = newGoods => {
  goods.push(newGoods);
};

const addGoodsPage = (goods, tableBody) => {
  tableBody.append(createRow(goods));
}


const formControl = (modalForm, tableBody, closeModal) => {

  modalForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let newGoods = Object.fromEntries(formData);
    newGoods.id = generatorRandomId();
    newGoods.title = newGoods.name;

    addGoodstData(newGoods);
    addGoodsPage(newGoods, tableBody);
    modalForm.reset();
    modalCheckbox.removeAttribute('checked');
    modalInputDiscount.removeAttribute('disabled');
    modalTotalPrice.value = `$`;
    overlay.classList.remove('active');

  });
};

function getTotalPrice(goods) {
  let total = 0;
  goods.forEach((item) => {
    total += item.price * item.count;
  });
  crmTotalPrice.textContent = `$${total}`;
}
getTotalPrice(goods);


renderGoods(goods);
modalControl(btnAddGoods);
totalPrice(countProductModal, discountProductModal, priceProductModal);
formControl(modalForm, tableBody);
