const taskNameInputElemt = document.querySelector("#name");
const addButtonElemt = document.querySelector("button");
const tasksContainerElemet = document.querySelector(".tasks");
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        name: "Wyrzucic smieci",
        done: false,
    },
    {
        name: "Nakarmic Lole",
        done: true,
        category: "work",
    },
    {
        name: "Zrobic program",
        done: false,
    },
];
const render = () => {
    tasksContainerElemet.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = 'task-${index}';
        const labelElelemt = document.createElement("label");
        labelElelemt.innerText = task.name;
        labelElelemt.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElelemt);
        taskElement.appendChild(checkboxElement);
        tasksContainerElemet.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElemt.addEventListener("click", (event) => {
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    const selectedCategory = selectedRadioElement.value;
    event.preventDefault();
    addTask({ name: taskNameInputElemt.value, done: false, category: selectedCategory });
    render();
});
render();
