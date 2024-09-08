
const taskNameInputElemt: HTMLInputElement = document.querySelector("#name");
const addButtonElemt: HTMLButtonElement = document.querySelector("button");
const tasksContainerElemet: HTMLElement = document.querySelector(".tasks");

type Category = "general" | "work" | "gym" | "hobby";

interface Task {
    name: string;
    done: boolean;
    category?: Category;
}

const categories: string[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
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
    tasksContainerElemet.innerHTML ="";
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id: string = 'task-${index}';

        const labelElelemt: HTMLElement = document.createElement("label");
        labelElelemt.innerText = task.name;
        labelElelemt.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        })

        taskElement.appendChild(labelElelemt);
        taskElement.appendChild(checkboxElement);

        tasksContainerElemet.appendChild(taskElement);
    });
};

const addTask = (task: Task) => {
    tasks.push(task);
}

addButtonElemt.addEventListener("click", (event: Event) => {
    const selectedRadioElement: HTMLInputElement = document.querySelector(
        "input[type='radio']:checked");

    const selectedCategory: Category = selectedRadioElement.value as Category;
    event.preventDefault();
    addTask({name: taskNameInputElemt.value, done: false, category: selectedCategory});
    render();
});

render();
