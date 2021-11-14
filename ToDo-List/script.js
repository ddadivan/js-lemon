'use strict';

const list = document.querySelector('.list');
const field = document.querySelector('.list-field');
const fieldBtn = document.querySelector('.list-field-btn');


function createItemList() {

    let item = document.createElement('li');
    item.classList.add('list-item');
    list.append(item);

    let itemText = document.createElement('span');
    itemText.classList.add('list-item-text');
    itemText.textContent = field.value;
    item.append(itemText);

    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('list-delete');
    deleteBtn.textContent = 'DELETE';

    item.append(deleteBtn);

    deleteBtn.addEventListener('click', function(e) {
        e.target.parentElement.remove();
    });
}


fieldBtn.addEventListener('click', function (e){

    if (field.value.length <= 0) {
        alert('Введите вашу заметку');
    } else {
        createItemList();
        field.value = '';
    }
});


