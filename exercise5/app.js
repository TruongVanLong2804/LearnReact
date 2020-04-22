
const form = document.querySelector('#my-form');
const todoText = document.querySelector('.textTodo');
const btn = document.querySelector('.btn');
const list = document.querySelector('#listTodo');


function apppendItem(todo){
    let li = document.createElement('li');
        if( todo !== '') {
            li.innerHTML = `
                <input type='checkbox' class='chxbox'></input>
                <span>${todo}</span>
                <span class='closeItem'>X</span>
            `
        listTodo.appendChild(li);
        } 
        removeItem();
}
document.addEventListener('DOMContentLoaded', () => {
    getTodos().map((todo) => {
        apppendItem(todo);
    })
    change_ckbox();
    removeItem();
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if(todoText.value !== ''){
    apppendItem(todoText.value);
    addTodo(todoText.value);
    }
    todoText.value = '';
})

function getTodos(){
    let todos = [];
    if (localStorage.getItem('todosList')=== null) {
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todosList'));
    }
    return todos;
}
function addTodo(todo){
    let todos = getTodos();
    todos.push(todo);
    localStorage.setItem('todosList', JSON.stringify(todos));
}
var flag = true;
function removeItem(){
    var btn = document.getElementsByClassName("closeItem");
    for(var i = 0; i < btn.length; i ++){
        btn[i].addEventListener("click",function(){
            removeFromlocalStorage(i);
            this.parentElement.remove();
        })
    }
}
function removeFromlocalStorage(i)
{
    if(flag){
        console.log(i-1);
        var temp = JSON.parse(localStorage.getItem("todosList"));
        temp.splice(i-1,1);
        localStorage.setItem('todosList',JSON.stringify(temp));
        flag = false;
        location.reload();
    }  
}
function setTodo(todo){
    let todos = [];
    todos = getTodos();
    todos.push(todo);
    localStorage.setItem('todo',JSON.stringify(todos));
}
function change_ckbox(){
    var checkbox = document.getElementsByClassName("chxbox");

    for(var i = 0; i < checkbox.length; i++)
    {
        checkbox[i].addEventListener( 'change', function() {
            if(this.checked) {
                this.parentElement.style.background = 'blue';
            } else {
                this.parentElement.style.background = '#f4f4f4';
            }
        });
    }
}