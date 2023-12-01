let addBtn = document.querySelector('[add]');
let taskInput = document.querySelector('[type="text"]');
let todoList = document.querySelector('#list');
let sortBtn = document.querySelector('[sort]');

addBtn.addEventListener('click', function(){
    let isTaskEmpty = ( taskInput.value.length > 0 ) ? true : false;

    if(isTaskEmpty){
        let alphanumeric = taskInput.value.split('');
        alphanumeric[0] = alphanumeric[0].toUpperCase();
        todoList.innerHTML += createTask(alphanumeric.join(''));
    } else {
        alert('Cannot add an empty task!')
        //dont forget to add local storage
    }
    // either writes or overwrites the listeners
    let allDelBtns = document.querySelectorAll('[removeBtn]');
    for(let button of allDelBtns){
        console.log(button)
        button.addEventListener('click', function(){
            button.parentElement.remove()
        });
    }
    let allCheckBoxes = document.querySelectorAll('[type="checkbox"]');
    for(let checkbox of allCheckBoxes){
        checkbox.addEventListener('click', function(){
            if(checkbox.checked){
                checkbox.parentElement.children[1].innerHTML = `<s>${checkbox.parentElement.children[1].innerHTML}</s>`
            }
            else {
                checkbox.parentElement.children[1].innerHTML = checkbox.parentElement.children[1].children[0].textContent;
            }
        })
    }
});

sortBtn.addEventListener('click', function(){
    let items = document.querySelectorAll('[class="item"]');
    // let arr = []
    // for( let item of items ){
    //     arr.push( item )
    // }
    // console.log(arr)
})

function createTask(taskContent){
    let item = `<li class="item">
    <input type="checkbox">
    <small>${taskContent}</small>
    <button removeBtn>delete</button>
</li>`
    return item;
}