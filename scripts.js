const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");



for (let card of cards){

    card.addEventListener("click", function (){
        const fotoId = card.getAttribute("id");
        const title = card.querySelector(".content").innerHTML;
        const text = card.querySelector(".info").innerHTML;
        modalOverlay.classList.add("active");
        modalOverlay.querySelector("img").src=`https://images.unsplash.com/photo-${fotoId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80`;
        modalOverlay.querySelector(".title").innerHTML = title;
        modalOverlay.querySelector(".info").innerHTML = text; 
    })
}

document.querySelector(".close-modal").addEventListener("click", function (){
    modalOverlay.classList.remove("active");
    modalOverlay.querySelector("img").src="";
})
