 const buttons = document.querySelectorAll(".button");
 const body = document.querySelector("body");

 //now the button we get all in nodelist so we can apply the foreach loop and wirte a call back function in it 

 buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        console.log (e)
        console.log(e.target)
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id
        }if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
        }
    })

 })