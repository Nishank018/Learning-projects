//select the domcunet first
const input = document.querySelector("input")
const button = document.querySelector("button")
const task = document.querySelector("ul")

const addTask = () => { // add event listener to create the task 
    const inputText = input.value.trim()//  take the input value and store it in a  variabel --- used input.vlaue.trim (), becose input also accepting the space (trim reomve teh st and ending space )
    if (inputText === "") { // used trim() for remvoing the space problem ,and used condtion statement to resolve the empty task entry 
        return;
    }


    const li = document.createElement('li') //create a varible  and in this varible create a element <li> where we append or push the task 

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const span = document.createElement('span')
    span.textContent = inputText

    li.appendChild(checkbox)
    li.appendChild(span)

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.classList.add('completed')
        }
        else {
            span.classList.remove('completed')

        }
    })



    task.appendChild(li) // appned that create li element in the html ul created 
    input.value = '' // insure that after appending the value form input the input feiled became empty again 

}


button.addEventListener('click', addTask)

input.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
        addTask()
    }

})







