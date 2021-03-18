// СОЗДАНИЕ ТАБЛИЦЫ
import{getEl,createTableRow}from './createTableRow'
// МАССИВ СО СТУДЕНТАМИ
import{studentsBaseArr} from './dataStudents'
// ФОРМЫ ДОБАВЛЕНИЯ СТУДЕНТОВ
import{form_nameEl,form_facultyEl,form_birthEl,form_admissionEl} from './forms'


// ВАЛИДАЦИЯ ФОРМ #################################################

const btn_submitEl = getEl('.form__btn');
const errorMassageEl = getEl('.form__error');


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

// ВАЛИДАЦИЯ ФОРМ #################################################


// ДОБАВЛЕНИЕ СТУДЕНТА #################################################

let itemsArray = localStorage.getItem('studentsBase') ? JSON.parse(localStorage.getItem('studentsBase')) : studentsBaseArr;
localStorage.setItem('studentsBase', JSON.stringify(itemsArray));
let data = JSON.parse(localStorage.getItem('studentsBase'));

data.forEach(el => createTableRow(el))

function addStudent(name,middleName,lastName){

const newStudent = {};
const birth_day = form_birthEl.element.valueAsDate.getDate();
const birth_month = form_birthEl.element.valueAsDate.getMonth() + 1;
const birth_year = form_birthEl.element.valueAsDate.getFullYear(); 

const allRowArr = [...document.querySelectorAll('.body__row')];

newStudent.name = name;
newStudent.middlename = middleName;
newStudent.lastname = lastName;
newStudent.faculty = form_facultyEl.element.value;
newStudent.birthdate = `${birth_day}.${birth_month}.${birth_year}`;
newStudent.admission = form_admissionEl.element.valueAsDate.getFullYear();

    allRowArr.forEach(el => el.remove());

    itemsArray.push(newStudent);

    localStorage.setItem('studentsBase', JSON.stringify(itemsArray));
  

let dataNew= JSON.parse(localStorage.getItem('studentsBase'));

dataNew.forEach(el => createTableRow(el));

form_nameEl.element.value = ''
form_facultyEl.element.value = ''

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

// ДОБАВЛЕНИЕ СТУДЕНТА #################################################






