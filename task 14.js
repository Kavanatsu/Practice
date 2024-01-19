class Worker {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }
  
  getName() {
    return this._name;
  }
  
  getSurname() {
    return this._surname;
  }
  
  getRate() {
    return this._rate;
  }

	setRate(rate) {
    this._rate = rate;
  }
  
  getDays() {
    return this._days;
  }

	setDays(days) {
    this._days = days;
  }
  
  getSalary() {
    return this._rate * this._days;
  }
}

const worker1 = new Worker("Иван", "Иванов", 10, 20);
console.log(worker1.getName());
console.log(worker1.getSurname()); 
console.log('Ставка за день работы:', worker1.getRate()); 
console.log('Дни работы:', worker1.getDays());
console.log('Зарплата:', worker1.getSalary());

worker1.setRate(1200);
worker1.setDays(25);

console.log('Новая ставка за день работы:', worker1.getRate()); 
console.log('Новые дни работы:', worker1.getDays()); 
console.log('Новая зарплата:', worker1.getSalary());