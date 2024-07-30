
export async function AddInCard() {

    const AddBtnList = document.querySelectorAll("figcaption button")
    let AllProduct
    try {
        AllProduct = JSON.parse(localStorage.getItem("Card") || [])
    } catch (error) {
        
        AllProduct = []
    }
    let productName , productDescription , productStatus , productPrice , productImage
    setInterval(()=>{
        document.getElementById("TotalCardItens").textContent = AllProduct.length
    },100)
    
    AddBtnList.forEach(addBtn=>{
        addBtn.addEventListener("click",(e)=>{

            //pegando os dados do Produto
            productName = e.target.getAttribute("data-name")
            productDescription = e.target.getAttribute("data-description")
            productStatus = e.target.getAttribute("data-status")
            productPrice = Number(e.target.getAttribute("data-price"))
            productImage = encodeURI(e.target.getAttribute("data-image"))

            let isProduct = AllProduct.find(product=>{
                return product.name == productName
            })

            if(isProduct){
                isProduct.qtd += 1
            }
            else{
                AllProduct.push({
                    name : productName,
                    price : productPrice,
                    description : productDescription,
                    image : productImage,
                    status : productStatus,
                    qtd : 1
                })
            }
            localStorage.Card = JSON.stringify(AllProduct)


        })
    })
    
}
