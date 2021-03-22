const errorMassageEl = document.querySelector('.form__error--add');

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
