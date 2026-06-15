// const ToDo =[
//     "learn JavaScript",
//     "learn React",
//     "learn Node.js",
//     "learn Express.js",
//     "learn MongoDB"
// ]

// // ToDo.forEach((item) =>{
// //     console.log(item);
// // })

// // ToDo.push("learn TypeScript");

// // console.log(ToDo);

// // ToDo.splice(1, 2);

// // console.log(ToDo);


const ToDO = [
    {
        title: "Learn JavaScript",
        isCompleted: false
    },
    {
        title: "Learn React",
        isCompleted: true
    },
    {
        title: "Learn Node.js",
        isCompleted: false
    },
    {
        title: "Learn Express.js",
        isCompleted: true
    },
]


ToDO.forEach((item) => {
    if(item.isCompleted === true){
        console.log(`Completed Task: ${item.title}`);
    }
    else{
        console.log(`Pending Task: ${item.title}`);
    }
})

let countTasks = 0;

ToDO.forEach((item) => {
    if(item.isCompleted === true){
        countTasks++;
    }
});
console.log(`Total completed tasks: ${countTasks}`);


function findTask(title) {
    return ToDO.find((item) => item.title === title);
}

console.log(findTask("Learn React"));