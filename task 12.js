class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  
  getSalary() {
    return this.rate * this.days;
  }
}

const worker1 = new Worker("Иван", "Иванов", 10, 20);
console.log(worker1.getSalary());