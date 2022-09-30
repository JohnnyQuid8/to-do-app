window.addEventListener('load', () => {

    const todo = document.querySelector('.todo');
    const todoWrapper = document.querySelector('.todo__wrapper');
    const form = document.querySelector('#form');
    const input = document.querySelector('.todo__wrapper--input');
    let ul = document.getElementById('ul');


    const buttonSubmit = document.querySelector('.todo__wrapper--button');


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // CREATING LIST ITEM 
        const li = document.createElement('li');
        ul.appendChild(li);

        li.classList.add('todo__list--item');
        console.log(li);
        li.textContent = input.value;

        //EDIT/SAVE BUTTON
        let buttonEdit = document.createElement('button');

        //DELETE BUTTON
        let buttonRemove = document.createElement('button');
        buttonRemove.classList.add('todo-list__button-remove');
        buttonRemove.textContent = 'REMOVE';


        li.appendChild(buttonRemove);

        // DELETE FUNCTIONALITY
        buttonRemove.addEventListener('click', (e) => {
            console.log("bla")
            li.classList.add('none');
            buttonRemove.classList.add('none')
        })


    })








})