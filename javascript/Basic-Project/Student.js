const students = [
  {
    name: "Nishank",
    marks: 90
  },
  {
    name: "Rahul",
    marks: 75
  },
  {
    name: "Priya",
    marks: 60
  },
   {
    name: "chutiya",
    marks: 100
   }
];

students.forEach(student => {
    console.log(`Name: ${student.name}`);
});

function calculateAverageMarks(students) {
    let totalMarks = 0;
    students.forEach(student =>{
        totalMarks += student.marks;
    })
    return totalMarks/students.length

}
console.log(`Average Marks: ${calculateAverageMarks(students)}`);


function getTopScorer(students) {
    let topScore = 0;
    students.forEach(student =>{
        if (student.marks > topScore){
            topScore = student.marks;
        }


    })
    return topScore

}
console.log(`Highest marks: ${getTopScorer(students)}`)



function lowestMarks (students){
    let lowScore = students[0].marks;
    students.forEach(student => {
        if(student.marks < lowScore){
            lowScore = student.marks;
        }
    })
return lowScore;
}


console.log(`losest marks: ${lowestMarks(students)}`)

