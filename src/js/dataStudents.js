import { declOfNum } from './declOfNum'
export class Person {
    constructor(name, middlename, lastname, faculty, birthdate, admission) {
        this.name = name;
        this.middlename = middlename;
        this.lastname = lastname;
        this.faculty = faculty;
        this.birthdate = birthdate;
        this.admission = admission;
        this.age = `(${this.getAge} ${declOfNum(this.getAge)})`
    }

    #current_year = new Date().getFullYear();
    #current_month = new Date().getMonth() + 1;
    #current_day = new Date().getDay();

    get getAge() {
        let birthArr = this.birthdate.split('.');
        let birth_day = birthArr[0];
        let birth_month = birthArr[1];
        let birth_year = birthArr[2];

        let age = this.#current_year - birth_year;

        if (this.#current_month < (birth_month)) {
            age--;
        }
        if (((birth_month) === this.#current_month) && (this.#current_day < birth_day)) {
            age--;
        }
        return age;
    }

}

export const studentsBaseArr = [];

studentsBaseArr.push(new Person('Андрей', 'Андреевич', 'Иванов', 'Прикладная информатика', '12.12.1998', 2017));

studentsBaseArr.push(new Person('Алексей', 'Алексеевич', 'Алексеев', 'Дизайн', '8.7.2000', 2019));

studentsBaseArr.push(new Person('Екатерина', 'Олеговна', 'Попова', 'Флористика', '15.10.1999', 2016));

console.log(JSON.parse(JSON.stringify(studentsBaseArr[0])))

    // console.log(JSON.parse(JSON.stringify(studentsBaseArr[0])))