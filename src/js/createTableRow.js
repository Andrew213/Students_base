const today_date = new Date();
const today_year = today_date.getFullYear();


function addClass(el, selector) {
    el.classList.add(selector);
};

export function getEl(selector) {
    return document.querySelector(selector);
};

function courseCount(num) {
    if (today_year - num > 4) return 'закончил';
    if (today_year - num === 1) return '1 курс';
    if (today_year - num === 2) return '2 курс';
    if (today_year - num === 3) return '3 курс';
    if (today_year - num === 4) return '4 курс';
}

export function createTableRow(el) {

    const tableEl = getEl('.body__table');
    const tableRow = tableEl.insertRow();
    const tableCellName = tableRow.insertCell();
    const tableCellfaculty = tableRow.insertCell();
    const tableCellBirthDate = tableRow.insertCell();
    const tableCellAddmission = tableRow.insertCell();

    addClass(tableRow, 'body__row');
    addClass(tableCellName, 'body__cell');
    addClass(tableCellfaculty, 'body__cell');
    addClass(tableCellBirthDate, 'body__cell');
    addClass(tableCellAddmission, 'body__cell');

    tableCellName.textContent = `${el.name} ${el.middlename} ${el.lastname}`;
    tableCellfaculty.textContent = `${el.faculty} (${courseCount(el.admission)})`;
    tableCellBirthDate.textContent = `${el.birthdate} ${el.age}`;
    tableCellAddmission.textContent = `${el.admission}-${el.admission + 4}`;
}

// ДЛЯ МАКСИМАЛЬНОГО ЗНАЧЕНИЯ ИНПУТА DATE

function zeroToDate(date) {
    if (date < 10) {
        return `0${date}`
    } else {
        return date
    }
}

export const today_dateForm = `${new Date().getFullYear()}-${zeroToDate(new Date().getMonth() + 1)}-${zeroToDate(new Date().getDate())}`;




