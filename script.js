window.addEventListener('load', () => {

    const todo = document.querySelector('.todo');
    const todoWrapper = document.querySelector('.todo__wrapper');
    const form = document.querySelector('#form');
    const input = document.querySelector('.todo__wrapper--input');
    const ul = document.getElementById('ul');
    const buttonSubmit = document.querySelector('.todo__wrapper--button');



    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value;

        // CREATING LIST ITEM 
        const li = document.createElement('input');
        li.type = 'text';
        li.value = task;
        li.id = 'input';
        li.setAttribute('readonly', 'readonly');
        li.classList.add('todo__list--item');
        li.setAttribute("readonly", "readonly");

        // BUTTON WRAPPER
        const wrapperButton = document.createElement('div');
        wrapperButton.classList.add('todo__list--item');
        const wrapperLi = document.createElement('div');

        //EDIT/BUTTON
        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('todo__list--button-edit');
        buttonEdit.textContent = 'EDIT';

        //SAVE/BUTTON
        let buttonSave = document.createElement('button');
        buttonSave.classList.add('todo__list--button-save');
        buttonSave.textContent = 'SAVE';

        //DELETE BUTTON
        let buttonRemove = document.createElement('button');
        buttonRemove.classList.add('todo__list--button-remove');

        buttonRemove.textContent = 'REMOVE';

        //APPEND PART
        ul.appendChild(wrapperLi);
        ul.appendChild(wrapperButton);
        wrapperButton.appendChild(li);
        wrapperButton.appendChild(buttonRemove);
        wrapperButton.appendChild(buttonEdit);

        input.value = " ";

        // DELETE FUNCTIONALITY
        buttonRemove.addEventListener('click', (e) => {
            buttonRemove.classList.add('none');
            buttonEdit.classList.add('none');
            wrapperButton.classList.add('none');
            li.classList.add('none');

        })

        //EDIT/SAVE FUNCTIONALITY
        buttonEdit.addEventListener('click', (e) => {
            if (buttonEdit.innerText.toLowerCase() == 'edit') {
                buttonEdit.innerText = 'SAVE';
                li.removeAttribute('readonly');
                li.focus();
            } else {
                buttonEdit.innerText = 'EDIT';
                li.setAttribute('readonly', 'readonly');
                const storageItem = {
                    item: li.value
                }


                window.localStorage.setItem('item', JSON.stringify(storageItem));
                const get = window.localStorage.getItem('item');
                const parse = JSON.parse(get);
                document.getElementById("input").innerHTML = storageItem.item;
                console.log(parse.item);

            }
        });
        // console.log(li.value);










        // console.log(li.innerHTML)

        // console.log(li.textContent);
        // window.localStorage.setItem('item', JSON.stringify(localItem));
        // window.localStorage.getItem('item');
        // // JSON.parse(window.localStorage.getItem('item'));
        // // console.log(item);






    })







})




