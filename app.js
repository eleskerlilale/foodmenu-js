const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]
const cartArr=[]

const buttonMain=document.querySelectorAll(".menu .content button")

const cartSummary=document.querySelector(".cart-summary")

function item(){
    cartSummary.innerHTML=``
    cartArr.forEach( item => {
        cartSummary.innerHTML+=`
            <li>
            <div class="plate">
            <img src="images/${item.image}" alt="Fish Sticks and Fries" class="plate" />
            <div class="quantity">1</div>
            </div>
            <div class="content">
            <p class="menu-item">${item.name}</p>
            <p class="price">$${item.price}</p>
            </div>
            <div class="quantity__wrapper">
            <button class="decrease">
                <img src="images/chevron.svg" />
            </button>
            <div class="quantity">1</div>
            <button class="increase">
                <img src="images/chevron.svg" />
            </button>
            </div>
            <div class="subtotal">
            $${item.price}
            </div>
        </li>
            `
    })
    console.log("isliyir")
}
// item()
const cartPlate=document.querySelectorAll(".cart-summary .plate .plate")
const cartMenuItem=document.querySelectorAll(".cart-summary .menu-item")
const cartPrice=document.querySelectorAll(".cart-summary .price")
const cartDecrease=document.querySelectorAll(".cart-summary .decrease")
const cartIncrease=document.querySelectorAll(".cart-summary .increase")
const cartQuantity1=document.querySelectorAll(".cart-summary .plate .quantity")
const cartQuantity2=document.querySelectorAll(".cart-summary .quantity__wrapper .quantity")
const cartSubtotal=document.querySelectorAll(".cart-summary .subtotal")
const totalPrice=document.querySelector(".totals .subtotal")
const totalTax=document.querySelector(".totals .tax")
const totalsTotal=document.querySelector(".totals .total")

for(let i=0; i<buttonMain.length ;i++){
    buttonMain[i].addEventListener("click", () => {
        if(buttonMain[i].classList.value=='add'){
            buttonMain[i].classList.remove("add")
            buttonMain[i].classList.add("in-cart")
            buttonMain[i].innerHTML=`<img src="images/check.svg" alt="Check" />
            In Cart`
            cartArr.push(menuItems[i])
            console.log(cartArr);
            item()
            console.log(cartIncrease)
        }else{
            buttonMain[i].classList.remove("in-cart")
            buttonMain[i].classList.add("add")
            buttonMain[i].innerText=`Add to Cart`   
        }
    })
}

cartIncrease.forEach((increase,i) => {
    increase.addEventListener("click", () => {
        console.log("intro")
        const price = Number(cartPrice[i].innerText.slice(1,2)+cartPrice[i].innerText.slice(3,5))
        const k=Number(cartQuantity1[i].innerText)+1
        const subTotal= String(price*k)
        cartQuantity1[i].innerHTML=k
        cartQuantity2[i].innerHTML=k
        cartSubtotal[i].innerHTML=`$${subTotal.slice(0,subTotal.length-2)+'.'+subTotal.slice(subTotal.length-2, subTotal.length)}`
    })
})
cartDecrease.forEach((decrease, i )=> {
    decrease.addEventListener("click", () => {
        if(Number(cartQuantity1[i].innerText)==1){
            alert("olmaz")
        }else{
            const price = Number(cartPrice[i].innerText.slice(1,2)+cartPrice[i].innerText.slice(3,5))
            const k=Number(cartQuantity1[i].innerText)-1
            const subTotal= String(price*k)
            cartQuantity1[i].innerHTML=k
            cartQuantity2[i].innerHTML=k
            cartSubtotal[i].innerHTML=`$${subTotal.slice(0,subTotal.length-2)+'.'+subTotal.slice(subTotal.length-2, subTotal.length)}`
        }
    })
})
