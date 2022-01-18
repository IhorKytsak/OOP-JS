// Task 1
console.log('-------------------------Task 1-------------------------');
{
   class Student {

      constructor(fullName, direction) {
         this.fullName = fullName;
         this._direction = direction;
      }

      showFullName() {
         return this.fullName;
      }

      nameIncludes(data) {
         return [this.showFullName(), this.showFullName().split(' ')[0], this.showFullName().split(' ')[1]].includes(data);
      }

      static studentBuilder() {
         return new Student('Ihor Kohut', 'qc');
      }

      get direction() {
         return this._direction;
      }

      set direction(val) {
         this._direction = val;
      }
   }

   const stud1 = new Student('Ivan Petrenko', 'web');
   console.log(stud1.nameIncludes('Ivan'));
   console.log(stud1.nameIncludes('Denysenko'));

   const stud2 = new Student('Sergiy Koval', 'python');
   console.log(stud2.nameIncludes('Ser'));
   console.log(stud2.nameIncludes('Koval'));

   const studentBuilder = Student.studentBuilder();
   console.log(studentBuilder.direction);

   console.log(stud1.direction);
   stud1.direction = 'python';
   console.log(stud1.direction);

}

// Task 2
console.log('-------------------------Task 2-------------------------');

class Person {
   constructor(name, surname) {
      this.name = name;
      this.surname = surname;
   }

   showFullName() {
      const showFullName = this.name + this.surname;
      return showFullName;
   }
}

class Student extends Person {
   constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
   }

   showFullName(midleName) {
      const showFullName = (`${this.name} ${this.surname} ${midleName}`);
      return showFullName;
   }

   showCourse() {
      return new Date().getFullYear() - this.year;
   }
}
const stud1 = new Student('Petro', 'Petrenko', 2017);
console.log(stud1.showFullName('Petrovych'));
console.log('Current course: ' + stud1.showCourse());

const stud2 = new Student('Ivan', 'Iva', 2020);
console.log(stud2.showFullName('Ivanovich'));
console.log('Current course: ' + stud2.showCourse());


// Task 3
console.log('-------------------------Task 3-------------------------');

const arr = [];

class Worker {
   #experience = 1.2;

   constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;

      arr.push(this);
   }

   showSalary() {
      return console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
   }

   showSalaryWithExperience() {
      return console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays * this.#experience}`);
   }

   get showExp() {
      return this.#experience;
   }

   set setExp(newExp) {
      this.#experience = newExp;
   }

   static sortBySalary() {
      arr.sort((a, b) => (a.dayRate * a.workingDays * a.#experience) - (b.dayRate * b.workingDays * b.#experience));
      return arr.forEach(elem => elem.showSalaryWithExperience());
   }

}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

console.log('---------------------------');

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

console.log('---------------------------');

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

console.log('---------------------------');

Worker.sortBySalary();