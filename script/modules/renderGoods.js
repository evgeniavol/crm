import {tableBody, createRow} from './createElems.js';

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
        const allGoodsRow = Array.from(tableBody.querySelectorAll(".goods__row"));
        goods = allGoodsRow;
      }
    });
  }
  deleteGoods();

  