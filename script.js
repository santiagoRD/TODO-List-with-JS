let todoList = [];

const renderTodos = todoList => {
  document.querySelector(".container-list").innerHTML = "";

  todoList.map(todo => {
    const p = document.createElement("p");
    p.textContent = todo;
    document.querySelector(".container-list").appendChild(p);
  });
};

renderTodos(todoList);

document.querySelector("#container-form").addEventListener("submit", e => {
  e.preventDefault();
  todoList.push(e.target.elements.todoText.value);
  e.target.elements.todoText.value = "";
  renderTodos(todoList);
});
