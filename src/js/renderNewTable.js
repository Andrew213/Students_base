import { createTableRow } from './createTableRow'

export function renderNewTable(dataNew, sort = false, sortFunc = null) {

    let allRows = [...document.querySelectorAll('.body__row')];

    allRows.forEach(el => el.remove());

    dataNew = JSON.parse(localStorage.getItem('studentsBase'));

    if (sort) {
        dataNew.sort(sortFunc)
    }

    dataNew.forEach(el => createTableRow(el));
}