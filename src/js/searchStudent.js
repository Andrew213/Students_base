import { getEl, createTableRow, today_dateForm } from './createTableRow'




const search_nameEl = getEl('.form-search__input--name');
const search_facultyEl = getEl('.form-search__input--faculty');
const search_birthEl = getEl('.form-search__input--birth');
search_birthEl.max = today_dateForm;
const search_admissionEl = getEl('.form-search__input--admission');
search_admissionEl.max = today_dateForm;
const search_btnEl = getEl('.form__btn--search');
const search_errorEl = getEl('.form__error--search')

function searchStudent(result, resultArr) {
    let allRows = [...document.querySelectorAll('.body__row')];
    allRows.forEach(el => el.remove());
    resultArr.push(result);
    search_errorEl.textContent = ''
    resultArr.forEach(elem => {
        createTableRow(elem)
        console.log(elem)
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

search_btnEl.addEventListener('click', ev => {
    ev.preventDefault();

    const dataNew = JSON.parse(localStorage.getItem('studentsBase'));
    const resultArr = [];
    console.log()
    dataNew.filter(el => {
        let fullName = ((el.name + el.middlename + el.lastname).toLowerCase())
        let faculty = el.faculty.toLowerCase()

        if (validateSearch(fullName, search_nameEl)) {
            searchStudent(el, resultArr)
        } else if (validateSearch(faculty, search_facultyEl)) {
            searchStudent(el, resultArr)
        } else if (search_birthEl.value.length !== 0) {
            const birth_day = search_birthEl.valueAsDate.getDate();
            const birth_month = search_birthEl.valueAsDate.getMonth() + 1;
            const birth_year = search_birthEl.valueAsDate.getFullYear();
            const birthdate = `${birth_day}.${birth_month}.${birth_year}`;

            birthdate === el.birthdate ? searchStudent(el, resultArr) : search_errorEl.textContent = 'Ничего не найдено'
        } else if (search_admissionEl.value.length !== 0) {
            const admission = search_admissionEl.valueAsDate.getFullYear();
            admission === el.admission ? searchStudent(el, resultArr) : search_errorEl.textContent = 'Ничего не найдено'
        } else {
            search_errorEl.textContent = 'Ничего не найдено'
        }

    });
})