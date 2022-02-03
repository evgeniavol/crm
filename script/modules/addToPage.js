import {tableBody, createRow} from './createElems.js';
export const addGoodsPage = (goods, tableBody) => {
    tableBody.append(createRow(goods));
  }
