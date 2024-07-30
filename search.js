
import { AddInCard } from "./js/addToCard.mjs"


let categories = document.querySelectorAll("ul a")

let searchTitle = document.getElementById("searchTitle")

categories.forEach(category =>{
    category.addEventListener("click",Active)
})


function Active(e){
    categories.forEach(category =>{

        category.classList.remove("active")
    })
    this.classList.add("active")
    searchTitle.textContent = e.target.textContent
    let title= e.target.textContent
    if(title == "Todos"){
        return
    }else{

        //API
        alert(title)
    }

}

AddInCard()