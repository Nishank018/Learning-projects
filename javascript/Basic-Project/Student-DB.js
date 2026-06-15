const studentDB = [
   { 
    name: "Nishank Gupta",
    age: 22,
    courses: ["Math", "Science", "History"],
    isGraduated: false,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }   
},
{
    name: "Amit Sharma",
    age: 24,
    courses: ["Math", "English", "History"],
    isGraduated: true,
    address:{
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        zip: "90001"    

    }

},
    {
    name: "Rohit Kumar",   
    age: 23,
    courses: ["Math", "Science", "History"],
    isGraduated: false,
    address: {
        street: "789 Oak St",
        city: "Chicago",
        state: "IL",
        zip: "60601"
    }
}
]



console.log(studentDB.filter((student) => student.isGraduated === true).map((student) => student.name));

console.log(studentDB.filter((student)=> student.address.city === "New York").map((student) => student.name));