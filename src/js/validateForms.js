const errorMassageEl = document.querySelector('.form__error--add');

/**
 * Проверяет на поустую строку или неполное ФИО
 *
 * @param {DOMElement} form Инпут, данные которого нужно провалидировать
 * @param {String} middleNameStudent  Отчество в строке ФИО
 * @param {String} lastNameStudent  Фамилия в строке ФИО
 * @return {Boolean}
 *  */

export function validateForm(form, middleNameStudent, lastNameStudent) {

    if (form.element.value.length === 0) {
        errorMassageEl.textContent = `${form.name} введено неверно или пустое`;
        return false
    } else if (middleNameStudent === undefined || lastNameStudent === undefined) {
        errorMassageEl.textContent = 'Введите полные данные (ФИО)';
        return false
    } else {
        errorMassageEl.textContent = '';
        return true
    }

}
