import { getEl } from './createTableRow'
import { data } from './App'
import { renderNewTable } from './renderNewTable'


const sorting_nameEl = getEl('.body__table-sort--name');
const sorting_facultyEl = getEl('.body__table-sort--faculty');
const sorting_birthEl = getEl('.body__table-sort--birth');
const sorting_admissionEl = getEl('.body__table-sort--admission');


class Sotring {

    sortByName(a, b) {
        const nameA = a.name.toLowerCase() + a.middlename.toLowerCase() + a.lastname.toLowerCase();
        const nameB = b.name.toLowerCase() + b.middlename.toLowerCase() + b.lastname.toLowerCase();

        if (nameA < nameB) {
            return -1
        }
    }

    sortByFaculty(a, b) {
        const facultyA = a.faculty.toLowerCase() + a.faculty.toLowerCase() + a.faculty.toLowerCase();
        const facultyB = b.faculty.toLowerCase() + b.faculty.toLowerCase() + b.faculty.toLowerCase();
        if (facultyA < facultyB) {
            return -1
        }
    }

    sortByBirthDate(a, b) {
        const birtdateArr_a = a.birthdate.split('.');
        const x = `${birtdateArr_a[1]}.${birtdateArr_a[0]}.${birtdateArr_a[2]}`;

        const birtdateArr_b = b.birthdate.split('.');
        const y = `${birtdateArr_b[1]}.${birtdateArr_b[0]}.${birtdateArr_b[2]}`

        if (new Date(x) < new Date(y)) {
            return -1
        }
    }

    sortByAdmission(a, b) {
        const admissionA = a.admission
        const admissionB = b.admission
        if (admissionA < admissionB) {
            return -1
        }
    }

}

const sort = new Sotring()

/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} data Возводимое в степень число.
 * @param {number} Boolean Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */


sorting_nameEl.addEventListener('click', ev => {
    renderNewTable(true, sort.sortByName)
});

sorting_facultyEl.addEventListener('click', ev => {
    renderNewTable(true, sort.sortByFaculty)
})

sorting_birthEl.addEventListener('click', ev => {
    renderNewTable(true, sort.sortByBirthDate)
})

sorting_admissionEl.addEventListener('click', ev => {
    renderNewTable(true, sort.sortByAdmission)
})