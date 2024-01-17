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
  
  getDays() {
    return this._days;
  }
  
  getSalary() {
    return this._rate * this._days;
  }
}

const worker1 = new Worker("Иван", "Иванов", 10, 20);
console.log(worker1.getName());
console.log(worker1.getSurname()); 
console.log(worker1.getRate()); 
console.log(worker1.getDays());
console.log(worker1.getSalary());
