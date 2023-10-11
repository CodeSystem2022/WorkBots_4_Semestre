const modalContainter=document.getElementById("modal-container");
const modalOverlay= document.getElementById("modal-overlay");

const cartBtn= document.getElementById("cart-btn");



const displayCart =() =>{
    modalContainter.innerHTML="";
    modalContainter.style.display="block";
    modalOverlay.style.display="block";
    //modal header
    const modalHeader=document.createElement("div");

    const modalClose = document.createElement("div");

    modalClose.innerText="❌";
    modalClose.className= "modal-close";
    modalHeader.append(modalClose)

    modalClose.addEventListener("click",()=>{
        modalContainter.style.display="none";
        modalOverlay.style.display="none";
    });

    const modalTitle= document.createElement("div");
    modalTitle.innerText="Cart";
    modalTitle.className="modal-title";
    modalHeader.append(modalTitle);

    modalContainter.append(modalHeader);
};

cartBtn.addEventListener("click", displayCart)
