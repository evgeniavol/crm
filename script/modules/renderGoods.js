import {tableBody, createRow} from './createElems.js';
import {goods} from '../../data.js';

export const renderGoods = (goods) => {
    goods.map(item => {
      return createRow(item);
    });
  }

 export  function deleteGoods() {
 
    tableBody.addEventListener("click", (e) => {
      const target = e.target;
      if (target.closest(".table__btn_del")) {
        target.closest(".goods__row").remove();
        let allGoodsRow = Array.from(tableBody.querySelectorAll(".goods__row"));
      }
    });
  }
  deleteGoods();

