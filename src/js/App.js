export const studentsBaseArr = [
    {
        name:'Андрей',
        middlename: 'Андреевич',
        lastname: 'Пупкин',
        faculty: 'Прикладная информатика',
        birthdate: "12.12.1998",
        admission: 2017,

    },
    {
        name:'Игорь',
        middlename: 'Владимирович',
        lastname: 'Панков',
        faculty: 'Туризм',
        birthdate: "12.12.1997",
        admission: 2019,

    },
    {
        name:'Максим',
        middlename: 'Владимирович',
        lastname: 'Перепелица',
        faculty: 'Дизайн',
        birthdate: "31.12.2000",
        admission: 2017,
    },
];

const today_date = new Date();
const today_year = today_date.getFullYear();
const today_month = today_date.getMonth();
const today_day = today_date.getDate();


function zeroToDate (date){
if(date < 10){
    return `0${date}`
}else{
    return date
}
}

export const today_dateForm = `${today_year}-${zeroToDate(today_month+1)}-${zeroToDate(today_date.getDate())}`;

const ARR_Year = ['год', 'года', 'лет'];

function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 ?
      2 :
      cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

function addClass(el,selector){
el.classList.add(selector);
};

 export function getEl(selector){
   return document.querySelector(selector);
};

function courseCount (num){
if (today_year - num > 4){return 'закончил'};
if(today_year - num === 1){return '1 курс'};
if(today_year - num === 2){return '2 курс'};
if(today_year - num === 3){return '3 курс'};
if(today_year - num === 4){return '4 курс'};
}


function calculate_age(birth_day,birth_month,birth_year){

    let age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}

console.log(calculate_age(12,12,1998))

export function createTableRow (el){

const tableEl = getEl('.body__table');
const tableRow = tableEl.insertRow();
const tableCellName = tableRow.insertCell();
const tableCellfaculty = tableRow.insertCell();
const tableCellBirthDate = tableRow.insertCell();
const tableCellAddmission = tableRow.insertCell();

const birthArr = el.birthdate.split('.');
const birth_year = birthArr[2];
const birth_month = birthArr[1]
const birth_day = birthArr[0];


addClass(tableRow ,'body__row');
addClass(tableCellName ,'body__cell');
addClass(tableCellfaculty ,'body__cell');
addClass(tableCellBirthDate ,'body__cell');
addClass(tableCellAddmission ,'body__cell');

tableCellName.textContent = `${el.name} ${el.middlename} ${el.lastname}`;
tableCellfaculty.textContent = `${el.faculty} (${courseCount(el.admission)})`;
tableCellBirthDate.textContent = `${el.birthdate} (${calculate_age(birth_day,birth_month,birth_year)} ${declOfNum(calculate_age(birth_day,birth_month,birth_year),ARR_Year)})`;
tableCellAddmission.textContent =`${el.admission}-${el.admission+4}`;
}



