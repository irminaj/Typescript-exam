import WorkPerson from './structure/work-person.js';
import SelfEmployedPerson from './structure/self-employed-person.js';
import BuisnessLicencePerson from './structure/business-license-person.js';
import Employee from './structure/employee.js';
import Job from './structure/jobs.js';

const salesManager = new WorkPerson({
  id: '123',
  name: 'Ona',
  surname: 'Onaitiene',
  hourPay: 10,
  fullTimeEquivalent: 1,
});
const projectManager = new WorkPerson({
  id: '345',
  name: 'Agne',
  surname: 'Pilkiene',
  hourPay: 15,
  fullTimeEquivalent: 0.75,
});

const driver = new SelfEmployedPerson({
  id: '999',
  name: 'Petras',
  surname: 'Ilgauskas',
  hourPay: 5,
  hoursWorked: 10,
});
const finance = new SelfEmployedPerson({
  id: '200',
  name: 'Tomas',
  surname: 'Kanapinskas',
  hourPay: 26,
});

const specialist = new BuisnessLicencePerson({
  id: '344',
  name: 'Petras',
  surname: 'Petrauskas',
});

const jobs = [
  new Job('SomeJob', 300),
  new Job('SomeJob', 100),
  new Job('SomeJob', 500),
];

jobs[0].completeJob();
jobs[2].completeJob();

const teacher = new BuisnessLicencePerson({
  id: '566',
  name: 'Jonas',
  surname: 'Jonaitis',
  jobs,
});

const employees: Employee[] = [
  salesManager,
  projectManager,
  driver,
  finance,
  specialist,
  teacher,
];

console.group('1. Atspausdinkite visus darbuotojus');
employees.forEach((emp) => console.log(emp.toString()));
console.groupEnd();

console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.forEach((emp) => {
  console.log(emp.getPersonInfo());
  console.log(emp.calcPay());
});
console.groupEnd();