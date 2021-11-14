'use strict';

const list = document.querySelector('.list');
const field = document.querySelector('.list-field');
const fieldBtn = document.querySelector('.list-field-btn');
const deleteAll = document.querySelector('.list-delete-all');

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

    if (field.value.trim().length <= 0) {
        alert('Введите вашу заметку');
        field.value = '';
    } else {
        createItemList();
        field.value = '';
    }

    if (list.children.length > 1) {
        deleteAll.classList.add('active');
    }
});

function removeAll() {
    let itemArr = Array.from(list.children);

    for(let item of itemArr) {
       item.remove();
    }
}

deleteAll.addEventListener('click', function(e) {
    removeAll();
    deleteAll.classList.remove('active');
});

