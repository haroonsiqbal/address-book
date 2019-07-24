const addressContainer = document.querySelector("#addressList")

const htmlRep = (name, address) => {
    return `
    <div>
    <h3>${name}</h3>
    <p>${address}</p>   
    </div>
    `
}

//add event listener

document.querySelector("#saveEntry").addEventListener("click", () => {
    console.log("hello")

//get data

    const name = document.querySelector("#fullName").value 
    const address = document.querySelector("#address").value
        console.log(name);

//put data in DOM        
    const personAddress = htmlRep(name, address)
        console.log(personAddress)
    addressContainer.innerHTML += personAddress

})
