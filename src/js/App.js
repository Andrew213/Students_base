// СОЗДАНИЕ ТАБЛИЦЫ
import { getEl, createTableRow } from './createTableRow'
// МАССИВ СО СТУДЕНТАМИ
import { studentsBaseArr, Person } from './dataStudents'
// ФОРМЫ ДОБАВЛЕНИЯ СТУДЕНТОВ
import { form_nameEl, form_facultyEl, form_birthEl, form_admissionEl } from './forms'
// ФУНКЦИЯ ПЕРЕРИСОВКИ ТАБЛИЦЫ
import { renderNewTable } from './renderNewTable'
// ВАЛИДАЦИЯ ФОРМ
import { validateForm } from './validateForms'


// ДОБАВЛЕНИЕ СТУДЕНТА #################################################

let itemsArray = localStorage.getItem('studentsBase') ? JSON.parse(localStorage.getItem('studentsBase')) : studentsBaseArr;
localStorage.setItem('studentsBase', JSON.stringify(itemsArray));
export let data = JSON.parse(localStorage.getItem('studentsBase'));

data.forEach(el => createTableRow(el))

function addStudent(name, middleName, lastName) {

    const birthdate = form_birthEl.element.valueAsDate.toLocaleDateString();
    const admission = form_admissionEl.element.valueAsDate.getFullYear();
    const faculty = form_facultyEl.element.value;

    const newStudent = new Person(name, middleName, lastName, faculty, birthdate, admission)

    itemsArray.push(newStudent);

    localStorage.setItem('studentsBase', JSON.stringify(itemsArray));

    renderNewTable(data)

    form_nameEl.element.value = ''
    form_facultyEl.element.value = ''
    form_birthEl.element.value = ''
    form_admissionEl.element.value = ''
}

const btn_submitEl = getEl('.form__btn--add');

btn_submitEl.addEventListener('click', ev => {
    ev.preventDefault();

    const nameStudentArr = form_nameEl.element.value.replace(/ /g, '').split(/(?=[А-Я])/);
    const nameStudent = nameStudentArr[1];
    const middleNameStudent = nameStudentArr[2];
    const lastNameStudent = nameStudentArr[0];

    if (validateForm(form_nameEl, middleNameStudent, lastNameStudent) &&
        validateForm(form_facultyEl, null, null) &&
        validateForm(form_birthEl, null, null) &&
        validateForm(form_admissionEl, null, null)) {
        addStudent(nameStudent, middleNameStudent, lastNameStudent)
    }

})

// ДОБАВЛЕНИЕ СТУДЕНТА ##################################