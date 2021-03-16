import{getEl,today_dateForm,studentsBaseArr,createTableRow}from './App'

const form_nameEl = {
    name: 'Поле ФИО',
    element: getEl('.form__input--name'),
     excludeNum:function() {
        excludeNumbers(this.element)
    },
};

form_nameEl.excludeNum()

const form_facultyEl = {
    name: 'Поле факультета',
    element: getEl('.form__input--faculty'),
    excludeNum: function() {
        excludeNumbers(this.element)
    },
};

form_facultyEl.excludeNum()

const form_birthEl = {
    name: 'Поле Дата рождения',
    element: getEl('.form__input--birth'),
};

const form_admissionEl = {
    name: 'Поле Дата поступления',
    element: getEl('.form__input--admission'),
};

const btn_submitEl = getEl('.form__btn');
const errorMassageEl = getEl('.form__error');

function excludeNumbers(el){
    el.addEventListener('keypress', ev => {
        if ("1234567890-=<>,./?`[]|;'".indexOf(ev.key) != -1)
        ev.preventDefault();
    })
}

function validateForm(form,middleNameStudent,lastNameStudent){

if(middleNameStudent === undefined || middleNameStudent === '' || lastNameStudent === undefined || lastNameStudent === ''){
    errorMassageEl.textContent = 'Введите полные данные (ФИО)';
    return false
}

if (form.element.value.length === 0 || !form.element.value.trim()) {
    errorMassageEl.textContent = `${form.name} введено неверно или пустое`
    return false
 } else {
    errorMassageEl.textContent = '';
     return true
 }
}

// let x = {
//     name:'Андрей',
//     middlename: 'Андреевич',
//     lastname: 'Пупкин',
//     faculty: 'Прикладная информатика',
//     birthdate: "12.12.1998",
//     admission: 2017,

// },

function addStudent(name,middleName,lastName){

const newStudent = {};
const birth_day = form_birthEl.element.valueAsDate.getDate();
const birth_month = form_birthEl.element.valueAsDate.getMonth() + 1;
const birth_year = form_birthEl.element.valueAsDate.getFullYear(); 

newStudent.name = name;
newStudent.middlename = middleName;
newStudent.lastname = lastName;
newStudent.faculty = form_facultyEl.element.value;
newStudent.birthdate = `${birth_day}.${birth_month}.${birth_year}`;
newStudent.admission = form_admissionEl.element.valueAsDate.getFullYear();

studentsBaseArr.push(newStudent);

studentsBaseArr.forEach(el => createTableRow(el))

}

btn_submitEl.addEventListener('click', ev => {
    ev.preventDefault();

    const nameStudentArr = form_nameEl.element.value.split(' ');
    const nameStudent = nameStudentArr[1];
    const middlenameStudent = nameStudentArr[2];
    const lastnameStudent = nameStudentArr[0];
    
    if (validateForm(form_nameEl,middlenameStudent,lastnameStudent) && validateForm(form_facultyEl,middlenameStudent,lastnameStudent) && validateForm(form_birthEl,middlenameStudent,lastnameStudent) && validateForm(form_admissionEl,middlenameStudent,lastnameStudent)){
        addStudent(nameStudent,middlenameStudent,lastnameStudent)
    }
    
})

form_birthEl.element.max = today_dateForm;
form_admissionEl.element.max = today_dateForm;




