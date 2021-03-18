import{getEl,today_dateForm}from './createTableRow'


function excludeNumbers(el){
    el.addEventListener('keypress', ev => {
        if ("1234567890-=<>,./?`[]|;'".indexOf(ev.key) != -1)
        ev.preventDefault();
    })
}

export const form_nameEl = {
    name: 'Поле ФИО',
    element: getEl('.form__input--name'),
     excludeNum:function() {
        excludeNumbers(this.element)
    },
};

form_nameEl.excludeNum()

export const form_facultyEl = {
    name: 'Поле факультета',
    element: getEl('.form__input--faculty'),
    excludeNum: function() {
        excludeNumbers(this.element)
    },
};

form_facultyEl.excludeNum()

export const form_birthEl = {
    name: 'Поле Дата рождения',
    element: getEl('.form__input--birth'),
};

form_birthEl.element.max = today_dateForm;

export const form_admissionEl = {
    name: 'Поле Дата поступления',
    element: getEl('.form__input--admission'),
};

form_admissionEl.element.max = today_dateForm;