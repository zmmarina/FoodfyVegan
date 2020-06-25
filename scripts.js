const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");



for (let card of cards){

    card.addEventListener("click", function (){
        const fotoId = card.getAttribute("id");
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("img").src=`https://images.unsplash.com/photo-${fotoId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80`;
        
    })
}

document.querySelector(".close-modal").addEventListener("click", function (){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("img").src="";
})
