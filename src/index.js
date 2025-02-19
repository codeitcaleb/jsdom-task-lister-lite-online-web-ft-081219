const taskForm = document.querySelector("#create-task-form")
const taskList = document.querySelector("#tasks")

taskForm.addEventListener("submit", (event) =>{
  event.preventDefault()
  const newTask = document.querySelector("#new-task-description").value
  
  taskList.innerHTML += `
    <li>${newTask}  
      <button data-action="delete">Delete</button>
    </li>
  `
  taskForm.reset()
} )

taskList.addEventListener("click", function(event) {
  if (event.target.dataset.action === "delete") {
    event.target.parentElement.remove()
  } 
})

