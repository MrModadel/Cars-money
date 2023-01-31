let cars = [28000, 5000, 11000, 12000, 16000, 8000, 7000, 22000, 45000, 80000, 55000, 20000];
alert('Добро пожаловать в Авто сервис \"Коминтерн\"');
let from = prompt('Машины от какой цены вам нужны?').trim();
let upto = prompt('Машины од какой цены вам нужны?').trim();
let userFill = cars.filter(item => from <= item && item <= upto);
console.log(userFill);
let carsMenu;
if (userFill[0] > 0) {
   carsMenu = prompt(`Вот подходяшие варианты для вас:${userFill} Выберите одно из них!`).trim();
   let numberCash = +prompt('Номер вашего счёта!').trim();
   if (numberCash === 7777) {
      let balans = 15000;
      alert(`Ваш баланс ${balans}`)
      if (balans  >= carsMenu) {
         let bC = confirm(`Вы хотите купить машину за ${carsMenu}`);
         if (bC === true) {
            alert('Всё прошло отлично!')
            alert(`Вы потратили ${carsMenu} баксов`)
            alert(`У вас осталось ${balans - carsMenu}`)
            alert("Пока!")
         } else {
            alert('пока')
         }
      } else {
         alert('Не достаточно средств! Пока!')
      }
   } else {
      alert('Пользоватеь не был обнарузен пока!')
   }
} else {
   alert("Таких машин нет!")
}


