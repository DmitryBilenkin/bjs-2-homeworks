'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let disсrim = b ** 2 - 4 * a * c;

   if (disсrim === 0) {
    arr.push(-b / (2 * a));
  } else if (disсrim > 0){ 
    arr.push((-b + Math.sqrt(disсrim)) / (2 * a));
    arr.push((-b - Math.sqrt(disсrim)) / (2 * a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
  return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  else if (isNaN(contribution)) {
  return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  else if (isNaN(amount)) {
  return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  } else {
  percent = percent / 100;
  let bodyCredit = amount - contribution;

  let msProMonth = 30.5 * 24 * 60 * 60 * 1000; 
  let dateToday = new Date();
  let dateCredit = Math.round((date.getTime() - dateToday.getTime()) / msProMonth);
  
  let partOfPercent = percent / 12;
  let paymentProMonth = bodyCredit * (partOfPercent + (partOfPercent / (((1 + partOfPercent) ** dateCredit) - 1)));
  let totalAmount = +((paymentProMonth * dateCredit).toFixed(2));
  
  console.log(totalAmount);
  
  return totalAmount;
  }
}
