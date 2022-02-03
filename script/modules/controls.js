
import {addGoodsPage} from './addToPage.js';
import {addGoodstData} from './addToData.js';

const modalTitle = document.querySelector('.modal__title');
const table = document.querySelector('.goods__table table');
const nameProductModal = document.getElementById('name');
const categoryProductModal = document.getElementById('category');
const descriptionProductModal = document.getElementById('description');
const unitsProductModal = document.getElementById('units');
let modalInputDiscount = document.querySelector('.modal__input_discount');
let modalId = document.querySelector('.vendor-code__id');
let modalTotalPrice = document.querySelector('.modal__total-price');
const modalBtnSumbit = document.querySelector('.modal__submit');
const modalCheckbox = document.querySelector('.modal__checkbox');

export const formControl = (modalForm, tableBody) => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('active');
  
  modalCheckbox.addEventListener("click", () => {
    if (
        modalCheckbox.checked && modalInputDiscount.disabled === true) {
         modalInputDiscount.disabled = false;
      } else {
        modalInputDiscount.disabled = true;
        modalInputDiscount.value = '';
      }
    });
  
    modalForm.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      let newGoods = Object.fromEntries(formData);
      newGoods.id = generatorRandomId();
      newGoods.title = newGoods.name;
  
      addGoodstData(newGoods);
      addGoodsPage(newGoods, tableBody);
      modalForm.reset();
      modalTotalPrice.value = `$`;
      overlay.classList.remove('active');
    });
  };

  
  export const modalControl = (btnAddGoods) => {
  const overlay = document.querySelector('.overlay');
    
    const modalClose = document.querySelector('.modal__close');

    const openModal = () => {
      overlay.classList.add('active');
      const numGeneratorRandomId = generatorRandomId();
      modalId.textContent = numGeneratorRandomId;
    };
    const closeModal = () => {
      overlay.classList.remove('active');
      modalCheckbox.checked = false;
      modalInputDiscount.disabled = true;
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

  export const generatorRandomId = () => {
    const randomId = Math.round((Math.random() * 246016548165120) + 1);
    return randomId;
  };
  
  export const totalPrice = (countProductModal, modalInputDiscount, priceProductModal) => {

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
  
  