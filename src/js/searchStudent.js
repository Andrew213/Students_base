import { data } from './App';
import { getEl, createTableRow, today_dateForm } from './createTableRow'




const search_nameEl = getEl('.form-search__input--name');
const search_facultyEl = getEl('.form-search__input--faculty');
const search_birthEl = getEl('.form-search__input--birth');
search_birthEl.max = today_dateForm;
const search_admissionEl = getEl('.form-search__input--admission');
search_admissionEl.max = today_dateForm;
const search_btnEl = getEl('.form__btn--search');
const search_errorEl = getEl('.form__error--search')

function showFoundStudent(resultArr) {

    let allRows = [...document.querySelectorAll('.body__row')];

    allRows.forEach(el => el.remove());

    search_errorEl.textContent = ''

    resultArr.forEach(elem => {

        createTableRow(elem)

    })
}

function validateSearch(str, input) {

    if (str.includes(input.value.toLowerCase().trim()) &&

        input.value.length !== 0) {

        return true

    } else {

        return false
    }
}

function filterByName(list) {

    const resultArr = list.filter(el => {

        let fullName = (el.name + el.middlename + el.lastname).toLowerCase()

        if (validateSearch(fullName, search_nameEl)) {

            return el

        }
    });

    return resultArr.length > 0 ? resultArr : list
}

function filterByFaculty(filterByNameResult) {

    const resultArr = filterByNameResult.filter(el => {

        let faculty = el.faculty.toLowerCase()

        if (validateSearch(faculty, search_facultyEl)) {

            return el
        }
    });

    return resultArr.length > 0 ? resultArr : filterByNameResult
}

function filterByBirth(filterByFacultyResult) {

    let birthDay = search_birthEl.type === 'date' ?

        search_birthEl.valueAsDate.toLocaleDateString() : false

    const resultArr = filterByFacultyResult.filter(el => {

        if (el.birthdate === birthDay) {

            return el
        }
    });

    return resultArr.length > 0 ? resultArr : filterByFacultyResult
}

function filterByAdmission(filterByBirthResult) {

    let admissionYear = search_admissionEl.type === 'date' ?

        search_admissionEl.valueAsDate.getFullYear() : false

    const resultArr = filterByBirthResult.filter(el => {

        if (el.admission === admissionYear) {

            return el

        }
    });

    return resultArr.length > 0 ? resultArr : filterByBirthResult
}


function filterList(list) {

    const filterByNameResult = filterByName(list);

    const filterByFacultyResult = filterByFaculty(filterByNameResult);

    const filterByBirthResult = filterByBirth(filterByFacultyResult);

    const filterByAdmissionResult = filterByAdmission(filterByBirthResult);

    return (filterByAdmissionResult)

}

search_btnEl.addEventListener('click', ev => {
    ev.preventDefault();

    const dataNew = JSON.parse(localStorage.getItem('studentsBase'));

    if (filterList(dataNew).length === dataNew.length) {
        search_errorEl.textContent = 'Ничего не найдено'
    } else {
        search_errorEl.textContent = ''
        showFoundStudent(filterList(dataNew))
    }
})