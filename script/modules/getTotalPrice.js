export function getTotalPrice(goods) {
    let total = 0;
    goods.forEach((item) => {
      total += item.price * item.count;
    });
    crmTotalPrice.textContent = `$${total}`;
  }
  
  getTotalPrice(goods);
  