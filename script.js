

const text = document.getElementById('text');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function(){
    
    const newItem = document.createElement('p');
    newItem.textContent = text.value;
    newItem.classList.add('strike-able')
    const todoList = document.getElementById('list-item');
    todoList.appendChild(newItem);
    text.value = '';
    
    if (!newItem.textContent.trim()) {
        todoList.removeChild(newItem); 
      }
    else {
    newItem.addEventListener('click', function(){
        this.classList.toggle('strike');
      });
    }
    
    newItem.addEventListener('dblclick', function(){
        todoList.removeChild(this);  // Remove item on double-click
      });


});

