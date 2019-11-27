console.log("Client side")

fetch("http://dummy.restapiexample.com/api/v1/employees").then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data)
        }
    })
})

const form = document.querySelector('form')

form.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Testing")
})