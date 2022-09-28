window.addEventListener('load', () => {

    const todo = document.querySelector('.todo');
    const todoWrapper = document.querySelector('.todo__wrapper');
    const form = document.querySelector('#form');
    const input = document.querySelector('.todo__wrapper--input');

    // let listItem = document.querySelector('.todo__list--item');
    const buttonSubmit = document.querySelector('.todo__wrapper--button');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let list = document.querySelector('.todo__list');
        const li = document.createElement('li');


        li.textContent = input.value;
        const buttonRemove = document.createElement('button');
        buttonRemove.classList.add('todo__list--button');
        buttonRemove.textContent = 'DELETE';
        list.appendChild(buttonRemove);
        list.appendChild(li);
        li.classList.add('todo__list--item');
        buttonRemove.addEventListener('click', (e) => {
            console.log("bla")
            li.classList.add('none');
            buttonRemove.classList.add('none')
        })


    })








})