import { createTableRow } from './createTableRow'


/**
 * Рендерит новую таблицу на основании данных из LS
 *
 * @param {Boolean} sort Ставится в условии для отработки сортировки
 * @param {Function} sortFunc Функция, по которой происходит сортировка
 */

export function renderNewTable(sort = false, sortFunc = null) {

    let allRows = [...document.querySelectorAll('.body__row')];

    allRows.forEach(el => el.remove());

    let dataNew = JSON.parse(localStorage.getItem('studentsBase'));

    if (sort) {
        dataNew.sort(sortFunc)
    }

    dataNew.forEach(el => createTableRow(el));
}