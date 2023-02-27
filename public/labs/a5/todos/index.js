import TodoList from "./TodoList.js";


// alert('Hello World!');
console.log("Console log for Todos");

// eslint-disable-next-line no-undef
$('#wd-todo').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${TodoList()}
   </div>
`);
