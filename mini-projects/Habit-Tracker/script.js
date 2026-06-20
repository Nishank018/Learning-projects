const input = document.getElementById("habitInput");
const addBtn = document.getElementById("addBtn");
const habitListElement = document.getElementById("habitList");

let filter = "all";

const habitList =
JSON.parse(localStorage.getItem("habits")) || [];

const saveHabits = () => {
localStorage.setItem(
"habits",
JSON.stringify(habitList)
);
};

const updateStats = () => {
const total = habitList.length;


const completed =
habitList.filter(
    habit => habit.isCompleted
).length;

document.getElementById("total").innerText = total;
document.getElementById("completed").innerText = completed;
document.getElementById("remaining").innerText = total - completed;

};

const renderHabits = () => {


habitListElement.innerHTML = "";

let filteredHabits = habitList;

if(filter === "active"){
    filteredHabits =
    habitList.filter(
        habit => !habit.isCompleted
    );
}

if(filter === "completed"){
    filteredHabits =
    habitList.filter(
        habit => habit.isCompleted
    );
}

if(filteredHabits.length === 0){
    habitListElement.innerHTML =
    "<p>No habits found.</p>";
}

filteredHabits.forEach((item,index)=>{

    const li =
    document.createElement("li");

    const checkbox =
    document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked =
    item.isCompleted;

    checkbox.addEventListener(
        "change",
        ()=>{
            item.isCompleted =
            checkbox.checked;

            saveHabits();
            renderHabits();
        }
    );

    const span =
    document.createElement("span");

    span.classList.add("habit-name");

    if(item.isCompleted){
        span.classList.add("completed");
    }

    span.innerText = item.name;

    const deleteBtn =
    document.createElement("button");

    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener(
        "click",
        ()=>{
            const realIndex =
            habitList.indexOf(item);

            habitList.splice(realIndex,1);

            saveHabits();
            renderHabits();
        }
    );

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    habitListElement.appendChild(li);
});

updateStats();


};

const addHabit = ()=>{


const value =
input.value.trim();

if(value === "") return;

habitList.push({
    name:value,
    isCompleted:false
});

saveHabits();
renderHabits();

input.value = "";


};

addBtn.addEventListener(
"click",
addHabit
);

input.addEventListener(
"keydown",
(e)=>{
if(e.key === "Enter"){
addHabit();
}
}
);

document
.querySelectorAll(".filter-btn")
.forEach(btn=>{


btn.addEventListener(
    "click",
    ()=>{

        document
        .querySelectorAll(".filter-btn")
        .forEach(
            b=>b.classList.remove("active")
        );

        btn.classList.add("active");

        filter =
        btn.dataset.filter;

        renderHabits();
    }
);


});

document
.getElementById("clearCompleted")
.addEventListener(
"click",
()=>{


    const activeHabits =
    habitList.filter(
        habit => !habit.isCompleted
    );

    habitList.length = 0;
    habitList.push(...activeHabits);

    saveHabits();
    renderHabits();
}


);

renderHabits();
