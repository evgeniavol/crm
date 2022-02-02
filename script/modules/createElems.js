import {getTotalPrice} from './modules/getTotalPrice.js';

export const createRow = ({
    id: id,
    title: title,
    price: price,
    description: description,
    category: category,
    count: count,
    units: units,
  }) => {
  
  
    const tr = document.createElement('tr');
    tr.classList.add("goods__row");
  
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
  
    tr.append(tdId, tdName, tdNameMeasurement, tdCount, tdPrice, tdTotalPrice, tdBtnWrap, buttonPic, buttonEdit, buttonDel);
    tdBtnWrap.append(buttonPic, buttonEdit, buttonDel);
  
  
    tableBody.append(tr);
    getTotalPrice(goods);
    return tableBody, tr;
  }