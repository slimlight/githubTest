let addBtn = document.getElementById('addTask');
let container = document.getElementById('taskArea');
let field = document.getElementById('textArea');
let body = document.querySelector('body');

// ღილაკის დაჭერის დროს ფუნქცია ამატებს ახალ Tasksს სიაში
addBtn.addEventListener( "click", () => { 
    let text = document.createElement('p')
    text.innerText = field.value;
    container.appendChild(text)
    text.classList.add('point');

    //Taskზე დაჭერისას ფუნქცია ამწვანებს რაც ნიშნავს რომ აღნიშნული Taskი შესრულდა
    text.addEventListener('click', () => {
        text.style.textDecoration = 'line-through'
        text.style.color = 'green'
    })
    
    // ორჯერ დაკლიკვის დროს შესრულებული Taskი სიიდან წაიშლება
    text.addEventListener('dblclick', () => { 
        container.removeChild(text)
    })
})