const productFlex=document.querySelector('.third-container-items')
const productCards = document.querySelectorAll(".add-to-cart")




//Looping and  Creating the Elements
 
for(let productCard = 0; productCard < productCards.length; productCard++){
    console.log(productCards)
let inputDiv = document.createElement("div")
inputDiv.className = "input-div"

let pinputDiv = document.createElement("p")
pinputDiv.appendChild(document.createTextNode(""))

let totalPriceInput = document.createElement("input")
totalPriceInput.className = "total-price"
totalPriceInput.type = "number"
totalPriceInput.value = 31500;
totalPriceInput.readOnly = true;

// Appending the  elements to it's parent element

inputDiv.appendChild(pinputDiv)
inputDiv.appendChild(totalPriceInput)


// Creating the Elements

let cartDiv = document.createElement("div")
cartDiv.className= "cart-div"
let addButton = document.createElement("button")
addButton.className= "add-button"
addButton.appendChild(document.createTextNode("+"))
let minusButton = document.createElement("button")
minusButton.className= "add-button"
minusButton.appendChild(document.createTextNode("-"))
let numberInput = document.createElement("input")
numberInput.className = "number"
numberInput.type = "number"
numberInput.value = 1;
numberInput.readOnly = true;
let addCart = document.createElement("button")
addCart.className = "add-cart"
addCart.appendChild(document.createTextNode("ADD TO CART"))
let cartLink = document.createElement("a");
cartLink.className = "cart-link"
cartLink.appendChild(addCart)
cartLink.title = "ADD TO CART"
cartLink.href = "/external-links/sign-up.html"
document.body.appendChild(cartLink)



// Appending the  elements to it's parent element

cartDiv.appendChild(minusButton)
cartDiv.appendChild(numberInput)
cartDiv.appendChild(addButton)
cartDiv.appendChild(cartLink)
// cartDiv.appendChild(addCart)

// Appending the parent elements to the node elements
productCards[productCard].appendChild(inputDiv)
productCards[productCard].appendChild(cartDiv)


addButton.addEventListener("click", e =>{
   console.log(productCards[productCard])
   numberInput.value++
   let additionalPrice = 31500 ;
  let calculatedPrice = Number(totalPriceInput.value) + additionalPrice
  totalPriceInput.value = calculatedPrice

})

minusButton.addEventListener("click", e =>{
    let subtractingPrice = 31500;
    if(numberInput.value < 1){
        numberInput.value = 1
        totalPriceInput.value = 40
    }else if(numberInput.value > 1){
        numberInput.value--
       let minusCalculatedPrice = Number(totalPriceInput.value)  - subtractingPrice
       totalPriceInput.value = minusCalculatedPrice
    }
 })

 console.log(productCards)

};

// this is the selection section

// productFlex.addEventListener('click',e=>{
//     for(let products=0; products < productFlex.children.length; products++){
//         let div = productFlex.children[products]
//         if(div === e.target){
//             div.classList.add('active')
//             console.log(div.innerHTML)
//             console.log(e.target.textContent)
//         }else{
//             div.classList.remove('active')
//         }
//         }  
// })
